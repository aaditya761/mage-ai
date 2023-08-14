import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import http from './http';
import API_CONSTANTS from './apiConstants';
import PropTypes from 'prop-types';
import { getSensorName } from './common';
import { useQuery } from '@tanstack/react-query';
import { Alert, FormControlLabel, Switch } from '@mui/material';
import { CaptureButton, CenterAlign, FormGroupRow, SCLineContainer } from './styles';


const SCLineChart = ({ sensorIds, dateRange, setDateRange, sensorList, toggleChartView }) => {
    const [chartType, setChartType] = useState('area');
    const [altChartType, setAltChartType] = useState('areaspline');
    const [expandedView, setExpandedView] = useState(false);
    const [zoomRange, setZoomRange] = useState([dateRange.from, dateRange.to]); // Initial range

    const getSensorData = async ({ from, to, sensorIds }) => {
        const sensorIdsQStr = sensorIds.map((value) => `sensor_id[]=${value}`).join('&');
        const response = await http.get(
            `${API_CONSTANTS.SENSOR_DATA}?${sensorIdsQStr}&from=${new Date(
                from,
            ).toISOString()}&to=${new Date(to).toISOString()}`,
        );
        return response?.data;
    };

    const { isError: apiError, data: chartData } = useQuery({
        queryKey: ['get_sensor_data', zoomRange[0], zoomRange[1], ...sensorIds],
        queryFn: () => getSensorData({ from: zoomRange[0], to: zoomRange[1], sensorIds }),
    });

    const series = sensorIds
        .map((id) => {
            const sensorData = chartData?.length
                ? chartData.filter((dataPoint) => dataPoint.sensor_id == id)
                : [];
            return [
                {
                    id,
                    name: `${getSensorName(id, sensorList)} - Value 1`,
                    data: sensorData.map((dataPoint) => [
                        new Date(dataPoint.recorded_time).getTime(),
                        parseFloat(dataPoint.sensor_value1),
                    ]),
                },
                {
                    id,
                    name: `${getSensorName(id, sensorList)} - Value 2`,
                    data: sensorData.map((dataPoint) => [
                        new Date(dataPoint.recorded_time).getTime(),
                        parseFloat(dataPoint.sensor_value2),
                    ]),
                },
            ];
        })
        .flat();

    useEffect(() => {
        setZoomRange([dateRange.from, dateRange.to]);
    }, [dateRange]);

    const handleZoom = (chartContext, { xaxis }) => {
        setZoomRange([xaxis.min, xaxis.max]);
        setDateRange(xaxis.min, xaxis.max);
    };

    const afterSetExtremes = (e) => {
        if (e.min && e.max) {
            setZoomRange([e.min, e.max]);
            setDateRange(e.min, e.max);
        }
        // const { chart } = e.target;
        // chart.showLoading('Loading data from server...');
        // chart.hideLoading();
    };

    const [options, setOptions] = useState({
        chart: {
            id: 'chart1',
            group: 'social',
            // type: chartType,
            stacked: false,
            height: '200px',
            animations: {
                enabled: false,
            },
            events: {
                zoomed: handleZoom,
                scrolled: handleZoom,
            },
            zoom: {
                enabled: true,
                type: 'x',
            },
            toolbar: {
                tools: {
                    pan: false,
                    reset: false,
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        markers: {
            size: 0,
        },
        // series: chartData.series,
        xaxis: {
            type: 'datetime',
            // labels: {
            //   formatter: (value) => formatTimestamp(value),
            //   rotate: -45,
            // },
        },
        stroke: {
            width: chartType === 'line' ? 3 : 1,
        },
        yaxis: {
            labels: {
                minWidth: 40,
            },
        },
        // tooltip: {
        //   x: {
        //     formatter: (value) => formatTimestamp(value),
        //   },
        // },
    });

    const highChartOptions = {
        title: {
            text: 'Sensor Data',
        },
        chart: {
            type: altChartType,
        },
        legend: {
            enabled: true,
            symbol: 'circle',
            symbolHeight: 12,
            symbolWidth: 12,
            symbolRadius: 6,
        },
        xAxis: {
            events: {
                afterSetExtremes: afterSetExtremes,
            },
        },
        series: series,
        credits: {
            enabled: false,
        },
        exporting: {
            enabled: true,
        },
        rangeSelector: {
            enabled: false,
            selected: 0,
            inputEnabled: false,
        },
    };

    const handleCapture = async () => {
        // TODO: handle the respone once we have the api
        try {
            await http(`${API_CONSTANTS.CAPTURE}`, {
                method: 'POST',
                data: { from: zoomRange[0], to: zoomRange[1] },
            });
        } catch (err) {
            console.error('Error capturing data', err);
        }
    };

    const handleChangeChartType = (e) => {
        setChartType(e.target.checked ? 'line' : 'area');
    };

    const handleAltChangeChartType = (e) => {
        setAltChartType(e.target.checked ? 'spline' : 'areaspline');
    };

    const toggleExpandedView = (e) => {
        setExpandedView(e.target.checked);
    };

    const toggleChartLink = (e) => {
        setOptions((prev: any) => ({
            ...prev,
            chart: { group: e.target.checked ? null : 'social' },
        }));
    };

    const getHighChart = () => (
      <>
        <FormGroupRow>
          <FormControlLabel
                    control={<Switch onChange={handleAltChangeChartType}/>}
                    label="Show Lines Only"
                />
        </FormGroupRow>

        <HighchartsReact
                constructorType={'stockChart'}
                highcharts={Highcharts}
                options={highChartOptions}
            />
      </>
    );

    const getApexChart = () => (
      <>
        <FormGroupRow>
          <FormControlLabel
                    control={<Switch onChange={toggleExpandedView}/>}
                    label="Show Expanded View"
                />
          {expandedView && (
            <FormControlLabel
                        control={<Switch onChange={toggleChartLink}/>}
                        label="Unlink Charts"
                    />
                )}
          <FormControlLabel
                    control={<Switch onChange={handleChangeChartType}/>}
                    label="Show Lines Only"
                />
          <CaptureButton onClick={handleCapture} variant="contained">
            Capture
          </CaptureButton>
        </FormGroupRow>

        {expandedView ? (
                sensorIds.map((id) => (
                  <ReactApexChart
                        height={250}
                        key={chartType + id}
                        options={{ ...options, chart: { ...options.chart, id: `chart${id}` } }}
                        series={series.filter((s) => s.id === id)}
                        type={'area'}
                    />
                ))
            ) : (
              <ReactApexChart
                    height={250}
                    key={chartType}
                    options={options}
                    series={series}
                    type={'area'}
                />
            )}
      </>
    );
    return (
      <SCLineContainer>
        {apiError ? (
          <CenterAlign>
            <Alert severity="error">Failed to fetch chart data</Alert>
          </CenterAlign>
            ) : !toggleChartView ? (
                getApexChart()
            ) : (
                getHighChart()
            )}
      </SCLineContainer>
    );
};

SCLineChart.propTypes = {
    sensorIds: PropTypes.arrayOf(PropTypes.number).isRequired,
    dateRange: PropTypes.shape({
        from: PropTypes.number.isRequired,
        to: PropTypes.number.isRequired,
    }).isRequired,
    setDateRange: PropTypes.func.isRequired,
    sensorList: PropTypes.arrayOf(
        PropTypes.shape({
            sensor_id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
        }),
    ).isRequired,
    toggleChartView: PropTypes.bool.isRequired,
};

export default SCLineChart;
