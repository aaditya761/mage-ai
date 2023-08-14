import React, { useState } from 'react';
import SensorForm from './SensorForm';
import SCLineChart from './SCLineChart';
import { Stack } from '@mui/material';
import { ChartContainer, DashboardContainer, MenuName } from './styles';

const Dashboard = () => {
    const [selectedSensors, setSelectedSensors] = React.useState([]);
    const [sensorList, setSensorList] = useState([]);
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
      <DashboardContainer style={{ backgroundColor: 'white' }}>
        <Stack spacing={2} width="100%">
          <SensorForm
                    selectedSensors={selectedSensors}
                    sensorList={sensorList}
                    setSelectedSensors={setSelectedSensors}
                    setSensorList={setSensorList}
                    setShowAltChartView={setShowAltChartView}
                    setShowChart={setShowChart}
                    setTimestamp={setTimestamp}
                    showAltChartView={showAltChartView}
                    timestamp={timestamp}
                />
        </Stack>
        {showChart && (
        <Stack spacing={2} width="100%">
          <ChartContainer>
            <SCLineChart
                            dateRange={{
                                from: new Date(timestamp[0].startDate).getTime(),
                                to: new Date(timestamp[0].endDate).getTime(),
                            }}
                            sensorIds={selectedSensors}
                            sensorList={sensorList}
                            setDateRange={updateDates}
                            toggleChartView={showAltChartView}
                        />
          </ChartContainer>
        </Stack>
            )}
      </DashboardContainer>
    );
};

export default Dashboard;
