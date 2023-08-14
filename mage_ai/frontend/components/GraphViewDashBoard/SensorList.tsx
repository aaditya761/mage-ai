import * as React from 'react';
import PropTypes from 'prop-types';

// mui components
import {
  StyledInputLabel,
  StyledMenuItem,
  StyledSelect,
  StyledOutlinedInput,
  StyledFormControl,
  StyledListItemText,
  StyledCheckbox,
} from './styles';
import { getSensorName } from './common';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SensorList = ({ sensorList, selectedSensors, onSensorSelected, disabled }) => {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    onSensorSelected(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  return (
    <div>
      <StyledFormControl size={'small'} sx={{ m: 1, width: 300 }}>
        <StyledInputLabel disabled={disabled} id="sensor-label">
          {' Sensor '}
        </StyledInputLabel>
        <StyledSelect
          MenuProps={MenuProps}
          disabled={disabled}
          id="sensor-multiple-checkbox"
          input={<StyledOutlinedInput label=" Sensors " />}
          labelId="sensor-multiple-checkbox-label"
          multiple
          onChange={handleChange}
          // @ts-ignore
          renderValue={(selected) => selected.map((sensorId) => getSensorName(sensorId, sensorList)).join(', ')}
          value={selectedSensors}
        >
          {sensorList?.length > 0 &&
            sensorList?.map((sensor) => (
              <StyledMenuItem key={sensor?.sensor_id} value={sensor?.sensor_id}>
                <StyledCheckbox checked={selectedSensors.indexOf(sensor?.sensor_id) > -1} />
                <StyledListItemText primary={sensor?.name} />
              </StyledMenuItem>
            ))}
        </StyledSelect>
      </StyledFormControl>
    </div>
  );
};


SensorList.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onSensorSelected: PropTypes.func.isRequired,
  selectedSensors: PropTypes.string.isRequired,
  sensorList: PropTypes.arrayOf(
    PropTypes.objectOf({
      // @ts-ignore
      sensor_id: PropTypes.string,
      type: PropTypes.string,
    }).isRequired,
  ),
};

export default SensorList;
