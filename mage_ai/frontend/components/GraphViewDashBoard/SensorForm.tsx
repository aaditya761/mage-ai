import React, { useEffect, useState } from 'react';
import LocationDropdown from './LocationDropDown';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { http } from './http';
import API_CONSTANTS from './apiConstants';
import ModelNameDropDown from '@components/GraphViewDashBoard/ModelNameDropDown';
import ModelTagDropDown from '@components/GraphViewDashBoard/ModelTagsDropDown';

export const SensorForm = ({
                               setTestData,
                               selectModelTag,
                           }) => {
    const [batteryId, setBatteryId] = useState(null);

    useEffect(() => {
    }, [batteryId]);

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
              <ModelTagDropDown selectModelTag={selectModelTag}/>
          </Grid>

      </Grid>
    );
};

SensorForm.propTypes = {
    setTestData: PropTypes.func.isRequired,
    selectModelTag: PropTypes.func.isRequired,
};

export default SensorForm;
