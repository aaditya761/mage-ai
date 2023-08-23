import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { http } from './http';
import API_CONSTANTS from './apiConstants';
import PropTypes from 'prop-types';
import { SCLineContainer, 
    CaptureButton, 
    CaptureDiv, 
    ModalDiv, 
    ModalHeading, 
    SliderContainer,
    ChartDiv,
    SliderDiv } from './styles';
import Modal from '@mui/material/Modal';
import { Button, Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
import CircularProgress from '@mui/material/CircularProgress';

const SCLineChart = ({ testID, selectedModelTag }) => {
    const [currentData, setCurrentData] = useState([]);
    const [voltageData, setVoltageData] = useState([]);

    const [currentDataOriginal, setCurrentDataOriginal] = useState([]);
    const [voltageDataOriginal, setVoltageDataOriginal] = useState([]);

    const [dataLoaded, setDataLoaded] = useState(false);
    const [cycles, setCycles] = useState([]);
    const [zoomRange, setZoomRange] = useState(['', '']); // Initial range
    const [modelOpen, setModalOpen] = useState(false);
    const [marks, setMarks] = useState([]);
    const [sliderValue, setSliderValue] = React.useState<number[]>([0, 100]);
    const [timeRange, setTimeRange] = useState([]);

    const getSensorData = async () => {
        setDataLoaded(false);
        const response = await http.get(
            `${API_CONSTANTS.SENSOR_DATA}?test_id=${testID}`,
        );
        setDataChartData(response, 'init');
    };


    const setDataChartData = (response, type) => {
        const chartData = response?.data?.sensorData;
        const sliderRange = response?.data?.testTimes;
        const currentData = chartData.map(item => [
            new Date(item.recorded_datetime).getTime(),
            parseInt(item.current_ma),
        ]);
        const voltageData = chartData.map(item => [
            new Date(item.recorded_datetime).getTime(),
            parseInt(item.voltage_mv),
        ]);

        const cy = chartData.map(item => ([
            new Date(item.recorded_datetime).getTime(),
            item.cycle,
        ]));

        setCycles(cy);
        setCurrentData(currentData);
        setVoltageData(voltageData);
        setDataLoaded(true);

        if (type == 'init'){
            const marksData = [];
            const range = (parseFloat(sliderRange[0]['max']) - parseFloat(sliderRange[0]['min'])) / 10;
            for (let i = 0; i < 11; i++) {
                marksData.push({ value: i * 10, label: parseInt(range * i) });
            }
            setTimeRange([parseFloat(sliderRange[0]['min']), parseFloat(sliderRange[0]['max'])]);
            setMarks(marksData);
            setCurrentDataOriginal(currentData);
            setVoltageDataOriginal(voltageData);
        }
    };

    const handleCapture = async () => {
        try {
            await http(`${API_CONSTANTS.CAPTURE}`, {
                method: 'POST',
                data: {
                    ENDING_UNIX_TIME_S: parseInt((new Date(zoomRange[1]).getTime() / 1000).toFixed(0)),
                    MODEL_TAG: selectedModelTag,
                    STARTING_UNIX_TIME_S: parseInt((new Date(zoomRange[0]).getTime() / 1000).toFixed(0)),
                    TEST_ID: testID,
                },
            }).then(() => {
                setModalOpen(false);
                alert('Submitted successfully');
                //call
            });
        } catch (err) {
            console.error('Error capturing data', err);
        }
    };

    useEffect(() => {
        getSensorData();
    }, [testID]);


    const yAxisOptions = [
        {
            title: {
                text: 'Cycle',
            },
            visible: false,
        },
        { // Primary yAxis (current)
            title: {
                text: 'Current (mA)',
            },
            opposite: false,
            labels: {
                formatter: function () {
                    return this.value;
                },
            },
        },
        { // Secondary yAxis (voltage)
            title: {
                text: 'Voltage (mV)',
            },
            opposite: true,
            labels: {
                formatter: function () {
                    return this.value;
                },
            },
        },
    ];

    const afterSetExtremes = (e) => {
        if (e.min && e.max) {
            setZoomRange([e.min, e.max]);
        }
    };

    const getChartDataWithTime = async () => {
        const startTime = timeRange[0] + (timeRange[1]-timeRange[0])*(sliderValue[0] / 100);
        const endtime = timeRange[0] + (timeRange[1]-timeRange[0])*(sliderValue[1] / 100);
        setDataLoaded(false);
        const response = await http.get(
            `${API_CONSTANTS.SENSOR_DATA_WITH_TIME}?test_id=${testID}&startDate=${startTime}&endDate=${endtime}`,
        );
        setDataChartData(response, 'time');
    };


    const resetValues = ()=>{
        setDataLoaded(false);
        setVoltageData(voltageDataOriginal);
        setCurrentData(currentDataOriginal);
        setSliderValue([0,100]);
        setDataLoaded(true);
    };

    const highChartOptions = {
        chart: {
            type: 'spline',
            zoomType: 'x',
        },
        title: {
            text: 'Voltage and Current Behavior',
        },
        xAxis: {
            type: 'datetime',
            events: {
                afterSetExtremes: afterSetExtremes,
            },
        },
        yAxis: yAxisOptions,
        series: [
            {
                name: 'Current',
                type: 'spline',
                data: currentData,
                yAxis: 1,
                lineWidth: 2,
                dataGrouping: {
                    enabled: true,
                },
            }, {
                name: 'Voltage',
                type: 'spline',
                data: voltageData,
                yAxis: 2,
                lineWidth: 2,
                dataGrouping: {
                    enabled: true,
                },
            }],
        tooltip: {
            shared: true,
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
        },
    };

    const getHighChart = () => (
      <ChartDiv>
        {dataLoaded ? <div style={{ width: '100%' }}>
          <HighchartsReact
                  highcharts={Highcharts}
                  options={highChartOptions}
              />
        </div> : <CircularProgress disableShrink />}
      </ChartDiv>
    );


    const handleChange = (event: Event, newValue: number | number[]) => {
        setSliderValue(newValue as number[]);
    };


    return (
      <SCLineContainer>
        <CaptureDiv>
          <CaptureButton onClick={() => {
                    setModalOpen(true);
                }} variant="contained">
            Run Simulation
          </CaptureButton>
        </CaptureDiv>
        <SliderContainer>
          <SliderDiv>
            <div style={{ fontSize: '20px' }}>Test Time Filter</div>
            <Slider
                        getAriaLabel={() => 'Temperature range'}
                        marks={marks}
                        onChange={handleChange}
                        style={{ height: 10 }}
                        value={sliderValue}
                    />
          </SliderDiv>
          <div style={{ display: 'flex' }}>
            <Button onClick={getChartDataWithTime} style={{ marginBottom: '12px' }} variant="outlined">
              Apply
            </Button>
            <Button onClick={resetValues} style={{ marginBottom: '12px', marginLeft: '10px' }} variant="outlined">
              Reset
            </Button>
          </div>
        </SliderContainer>
        {getHighChart()}
        <Modal
                aria-describedby="parent-modal-description"
                aria-labelledby="parent-modal-title"
                onClose={() => {
                    setModalOpen(false);
                }}
                open={modelOpen}
            >
          <ModalDiv>
            <ModalHeading>
              Following data will be submitted:
            </ModalHeading>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              TEST ID: {testID}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              MODEL TAG: {selectedModelTag}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              START TIME: {new Date(zoomRange[0]).toUTCString()}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              END TIME: {new Date(zoomRange[1]).toUTCString()}
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
              <CaptureButton onClick={() => {
                            setModalOpen(false);
                        }} variant="contained">
                Cancel
              </CaptureButton>
              <CaptureButton onClick={handleCapture} sx={{ ml: 2 }} variant="contained">
                Submit
              </CaptureButton>
            </div>
          </ModalDiv>
        </Modal>
      </SCLineContainer>
    );
};

SCLineChart.propTypes = {
    testID: PropTypes.number.isRequired,
    selectedModelTag: PropTypes.string.isRequired,
    toggleChartView: PropTypes.bool.isRequired,
};

export default SCLineChart;
