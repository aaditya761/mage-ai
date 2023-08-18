import React, { useEffect, useState } from 'react';
import LocationDropdown from './LocationDropDown';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { http } from './http';
import API_CONSTANTS from './apiConstants';
import ModelNameDropDown from '@components/GraphViewDashBoard/ModelNameDropDown';
import ModelTagDropDown from '@components/GraphViewDashBoard/ModelTagsDropDown';

export const SensorForm = ({
                               setShowAltChartView,
                               selectedSensors,
                               setSelectedSensors,
                               setTestData,
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


    // @ts-ignore
    return (
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <LocationDropdown batteryId={batteryId} setBatteryId={setBatteryId}/>
        </Grid>
        <Grid item xs={3}>
          <ModelNameDropDown/>
        </Grid>
          <Grid item xs={3}>
              <ModelTagDropDown/>
          </Grid>

      </Grid>
    );
};

SensorForm.propTypes = {
    selectedSensors: PropTypes.array.isRequired,
    setShowAltChartView: PropTypes.func.isRequired,
    setSelectedSensors: PropTypes.func.isRequired,
    setTestData: PropTypes.func.isRequired,
};

export default SensorForm;
