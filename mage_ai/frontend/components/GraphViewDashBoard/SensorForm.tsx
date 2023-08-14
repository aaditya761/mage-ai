import React, { useEffect, useState } from 'react';
import LocationDropdown from './LocationDropDown';
import SensorList from './SensorList';
import TimestampSlider from './TimeStampSlider';
import PropTypes from 'prop-types';
import { Grid, Switch } from '@mui/material';
import { StyledToggle, StyledCTA } from './styles';
import http from './http';
import API_CONSTANTS from './apiConstants';

export const SensorForm = ({
  showAltChartView,
  setShowAltChartView,
  setShowChart,
  selectedSensors,
  setSelectedSensors,
  testData,
  setTestData,
  timestamp,
  setTimestamp,
}) => {
  const [batteryId, setBatteryId] = useState(0);
  const disableReset = !(batteryId || selectedSensors.length > 0);
  const showChart =
      batteryId && selectedSensors.length > 0 && timestamp[0]?.startDate && timestamp[0]?.endDate;

  useEffect(() => {
    setShowChart(showChart);
  }, [batteryId, selectedSensors.length, setShowChart, showChart, timestamp]);

  useEffect(() => {
    if (batteryId) getTestData();
    setSelectedSensors([]);
  }, [batteryId, setSelectedSensors]);

  const getTestData = async () => {
    const res = await http.get(`${API_CONSTANTS.GET_SENSORS}${batteryId}/all/sensor/record`);
    setTestData(res.data);
  };

  const setChartView = (e) => {
    console.log(e.target.checked, 'ec');
    setShowAltChartView(e.target.checked);
  };

  const onReset = () => {
    setShowAltChartView(false);
    setBatteryId(null);
    setSelectedSensors([]);
    setTimestamp([
      {
        startDate: null,
        endDate: null,
        key: 'selection',
      },
    ]);
  };

  // @ts-ignore
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <LocationDropdown batteryId={batteryId} setBatteryId={setBatteryId} />
        <StyledToggle
          control={<Switch value={showAltChartView} onChange={setChartView} />}
          label="Show Alternate View"
        />
      </Grid>
      <Grid item xs={3}>
        <SensorList
          sensorList={testData}
          selectedSensors={selectedSensors}
          onSensorSelected={setSelectedSensors}
          disabled={!batteryId}
        />
        <StyledCTA
          color={disableReset ? 'rgba(0, 0, 0, 0.38)' : '#1976d2'}
          underline={disableReset ? 'none' : 'hover'}
          onClick={onReset}
        >
          Reset
        </StyledCTA>
      </Grid>
      <Grid item xs={3}>
        <TimestampSlider
          timestamp={timestamp}
          setTimestamp={setTimestamp}
          disabled={!(batteryId && selectedSensors?.length > 0)}
        />
      </Grid>
    </Grid>
  );
};

SensorForm.propTypes = {
  selectedSensors: PropTypes.array.isRequired,
  testData: PropTypes.array.isRequired,
  setShowAltChartView: PropTypes.func.isRequired,
  showAltChartView: PropTypes.bool.isRequired,
  setShowChart: PropTypes.func.isRequired,
  setSelectedSensors: PropTypes.func.isRequired,
  setTimestamp: PropTypes.func.isRequired,
  setTestData: PropTypes.func.isRequired,
  timestamp: PropTypes.array.isRequired,
};

export default SensorForm;
