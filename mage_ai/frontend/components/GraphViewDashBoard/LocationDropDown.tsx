import { FormControl } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { http } from './http';
import API_CONSTANTS from './apiConstants';

import {
  StyledInputLabel,
  StyledMenuItem,
  StyledSelect,
  StyledOutlinedInput,
} from './styles';

const LocationDropdown = ({ batteryId, setBatteryId }) => {
  const [batteryData, setBatteryData] = useState([]);
  const handleChange = (e) => {
    setBatteryId(e.target.value);
  };

  useEffect(() => {
    getBatteryData();
  }, []);
  const getBatteryData = async () => {
    const data = await http.get(API_CONSTANTS.GET_LOCATIONS);
    setBatteryData(data.data);
  };
  const renderLocationData = () => {
    if (batteryData)
      return batteryData.map((item) => (
        <StyledMenuItem key={item.cell_type_id} value={item.cell_type_id}>
          {item.chemistry + ' - ' + item.manufacturer}
        </StyledMenuItem>
      ));
    return null;
  };
  return (
    <>
      <FormControl size={'small'} sx={{ m: 1, width: 300 }}>
        <StyledInputLabel id="demo-simple-select-label">{' Battery '}</StyledInputLabel>
        <StyledSelect
          id="demo-simple-select"
          input={<StyledOutlinedInput label=" Battery " />}
          label="Age"
          labelId="demo-simple-select-label"
          onChange={handleChange}
          value={batteryId}
        >
          {renderLocationData()}
        </StyledSelect>
      </FormControl>
    </>
  );
};

LocationDropdown.propTypes = {
  batteryId: PropTypes.number,
  setBatteryId: PropTypes.func,
};
export default LocationDropdown;
