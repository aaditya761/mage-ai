import React, {useState} from 'react';
import {Stack, List} from '@mui/material';
import {ChartContainer, DashboardContainer} from './styles';
import SCLineChart from './SCLineChart';
import SensorForm from './SensorForm';
import TestContainer from '@components/GraphViewDashBoard/TestContainer';

const GraphViewDashBoard = () => {
    const [selectedSensors, setSelectedSensors] = useState([]);
    const [testData, setTestData] = useState([]);
    const [selectedTestID, setSelectedTestID] = useState('');
    const [timestamp, setTimestamp] = useState([
        {
            startDate: null,
            endDate: null,
            key: 'selection',
        },
    ]);
    const [showAltChartView, setShowAltChartView] = useState(false);
    const [showChart, setShowChart] = useState(false);

    const updateDates = (from, to) => {
        setTimestamp([
            {
                startDate: new Date(from),
                endDate: new Date(to),
                key: 'selection',
            },
        ]);
    };

    return (
        <DashboardContainer>
            <Stack spacing={2} width="100%">
                <SensorForm
                    selectedSensors={selectedSensors}
                    setSelectedSensors={setSelectedSensors}
                    setShowAltChartView={setShowAltChartView}
                    setShowChart={setShowChart}
                    setTestData={setTestData}
                    setTimestamp={setTimestamp}
                    showAltChartView={showAltChartView}
                    testData={testData}
                    timestamp={timestamp}
                />
            </Stack>
            <Stack spacing={2} width="100%">
                <ChartContainer>
                    {(testData.length > 0) &&
                        <List style={{width: '100%', height: '200px', overflowX: 'hidden', overflowY: 'scroll'}}>
                            <TestContainer setTestId={setSelectedTestID} testData={testData}/>
                        </List>}
                    {showChart? (<SCLineChart
                        dateRange={{
                            from: new Date(timestamp[0].startDate).getTime(),
                            to: new Date(timestamp[0].endDate).getTime(),
                        }}
                        sensorIds={selectedSensors}
                        sensorList={testData}
                        setDateRange={updateDates}
                        toggleChartView={showAltChartView}
                    />):null}
                </ChartContainer>
            </Stack>
        </DashboardContainer>
    );
};

export default GraphViewDashBoard;
