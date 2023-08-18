import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { http }  from './http';
import API_CONSTANTS from './apiConstants';
import PropTypes from 'prop-types';
import { SCLineContainer } from './styles';

const SCLineChart = ({ testID, dateRange, setDateRange, toggleChartView }) => {
    const [currentData, setCurrentData] = useState([]);
    const [voltageData, setVoltageData] = useState([]);
    const [selectedTestId, setSelectedTestId] = useState(testID);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [cycles, setCycles] = useState([]);

    const getSensorData = async ({ from, to }) => {
        const response = await http.get(
            `${API_CONSTANTS.SENSOR_DATA}?test_id=${selectedTestId}`,
        );
        const currentData = response?.data.map(item => {
            return [
                new Date(item.recorded_datetime).getTime(),
                parseInt(item.current_ma),
            ];
        });
        const voltageData = response?.data.map(item => [
            new Date(item.recorded_datetime).getTime(),
            parseInt(item.voltage_mv),
        ]);

        const cy = response?.data.map(entry => ([
            new Date(entry.recorded_datetime).getTime(),
            entry.cycle,
        ]));
        console.log(response?.data);
        setCycles(cy);
        setCurrentData(currentData);
        setVoltageData(voltageData);
        setDataLoaded(true);
        return response?.data;
    };

    useEffect(() => {
        getSensorData({ from: '', to: '' });
    }, [testID]);


    const yAxisOptions = [
        {
            title: {
                text: 'Cycles'
            }
        },
        { // Primary yAxis (current)
            title: {
                text: 'Current (mA)',
            },
            opposite: false,
        },
        { // Secondary yAxis (voltage)
            title: {
                text: 'Voltage (mV)',
            },
            opposite: true,
        },
    ];


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
        },
        yAxis: yAxisOptions,
        series: [
            {
            name: 'Current',
            type: 'spline',
            data: currentData,
            yAxis: 0,
            lineWidth: 2,
            dataGrouping: {
                enabled: true,
            }
        }, {
            name: 'Voltage',
            type: 'spline',
            data: voltageData,
            yAxis: 1,
            lineWidth: 2,
            dataGrouping: {
                enabled: true,
            }
        },{
                name: 'Cycles',
                data: cycles,
                type: 'spline',
                yAxis: 2,
                dataGrouping: {
                    enabled: true,
                }

            },],
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
      <>

        {dataLoaded?<HighchartsReact
                highcharts={Highcharts}
                options={highChartOptions}
            />:null}
      </>
    );




    return (
      <SCLineContainer>
        {getHighChart()}
      </SCLineContainer>
    );
};

SCLineChart.propTypes = {
    dateRange: PropTypes.shape({
        from: PropTypes.number.isRequired,
        to: PropTypes.number.isRequired,
    }).isRequired,
    setDateRange: PropTypes.func.isRequired,
    testID: PropTypes.number.isRequired,
    toggleChartView: PropTypes.bool.isRequired,
};

export default SCLineChart;
