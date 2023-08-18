import React, { useState } from 'react';
import { Stack, List } from '@mui/material';
import { ChartContainer, DashboardContainer } from './styles';
import SCLineChart from './SCLineChart';
import SensorForm from './SensorForm';
import TestContainer from '@components/GraphViewDashBoard/TestContainer';

const GraphViewDashBoard = () => {
    const [selectedSensors, setSelectedSensors] = useState([]);
    const [testData, setTestData] = useState([]);
    const [selectedTestID, setSelectedTestID] = useState(null);
    const [showAltChartView, setShowAltChartView] = useState(false);


    const selectTest = (test_id) => {
        setSelectedTestID(test_id);
    };

    const changeTest = (data) => {
        setTestData(data);
        setSelectedTestID(null);
    };

    return (
      <DashboardContainer>
        <Stack spacing={2} width="100%">
          <SensorForm
                    selectedSensors={selectedSensors}
                    setSelectedSensors={setSelectedSensors}
                    setShowAltChartView={setShowAltChartView}
                    setTestData={changeTest}
                />
        </Stack>
        {(testData.length > 0) &&
        <div style={{ marginBottom: '2rem' }}>
          <TestContainer setTestId={selectTest} testData={testData}/>
        </div>
            }
        <ChartContainer>
          {selectedTestID ? <SCLineChart
                    testID={selectedTestID}
                    toggleChartView={showAltChartView}
                /> : null}
        </ChartContainer>
      </DashboardContainer>
    );
};

export default GraphViewDashBoard;
