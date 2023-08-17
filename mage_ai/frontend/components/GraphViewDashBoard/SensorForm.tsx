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
                               selectedSensors,
                               setSelectedSensors,
                               setTestData,
                               setTimestamp,
                           }) => {
    const [batteryId, setBatteryId] = useState(null);

    useEffect(() => {
    }, [batteryId, selectedSensors.length]);

    useEffect(() => {
        if (batteryId) {
            getTestData();
        }
    }, [batteryId]);

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
    };

    // @ts-ignore
    return (
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <LocationDropdown batteryId={batteryId} setBatteryId={setBatteryId}/>
        </Grid>
        {/*<Grid item xs={3}>*/}
        {/*  <SensorList*/}
        {/*    sensorList={testData}*/}
        {/*    selectedSensors={selectedSensors}*/}
        {/*    onSensorSelected={setSelectedSensors}*/}
        {/*    disabled={!batteryId}*/}
        {/*  />*/}
        {/*  <StyledCTA*/}
        {/*    color={disableReset ? 'rgba(0, 0, 0, 0.38)' : '#1976d2'}*/}
        {/*    underline={disableReset ? 'none' : 'hover'}*/}
        {/*    onClick={onReset}*/}
        {/*  >*/}
        {/*    Reset*/}
        {/*  </StyledCTA>*/}
        {/*</Grid>*/}
        {/*<Grid item xs={3}>*/}
        {/*  <TimestampSlider*/}
        {/*    timestamp={timestamp}*/}
        {/*    setTimestamp={setTimestamp}*/}
        {/*    disabled={!(batteryId && selectedSensors?.length > 0)}*/}
        {/*  />*/}
        {/*</Grid>*/}
      </Grid>
    );
};

SensorForm.propTypes = {
    selectedSensors: PropTypes.array.isRequired,
    setShowAltChartView: PropTypes.func.isRequired,
    showAltChartView: PropTypes.bool.isRequired,
    setSelectedSensors: PropTypes.func.isRequired,
    setTimestamp: PropTypes.func.isRequired,
    setTestData: PropTypes.func.isRequired,
};

export default SensorForm;
