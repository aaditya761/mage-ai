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

const ModelNameDropDown = () => {
    const [modelNameData, setModelNameData] = useState([]);
    const [modelName, setModelName] = useState('');

    useEffect(() => {
        getModelNameData();
    }, []);
    const getModelNameData = async () => {
        const data = await http.get(API_CONSTANTS.GET_MODEL_NAMES_MLFLOW);
        setModelNameData(data?.data?.registered_models);
    };

    const handleChange = (e)=>{
        setModelName(e.target.value);
    }
    const renderLocationData = () => {
        if (modelNameData)
            return modelNameData.map((item) => (
              <StyledMenuItem key={item.name} value={item.name}>
                {item.name}
              </StyledMenuItem>
            ));
        return null;
    };
    return (
      <>
        <FormControl size={'small'} sx={{ m: 1, width: 300 }}>
          <StyledInputLabel id="demo-simple-select-label">{' Model Name '}</StyledInputLabel>
          <StyledSelect
                    id="demo-simple-select"
                    input={<StyledOutlinedInput label=" Model Name " />}
                    label="Age"
                    onChange={handleChange}
                    labelId="demo-simple-select-label"
                    value={modelName}
                >
            {renderLocationData()}
          </StyledSelect>
        </FormControl>
      </>
    );
};

ModelNameDropDown.propTypes = {
    batteryId: PropTypes.number,
    setBatteryId: PropTypes.func,
};
export default ModelNameDropDown;
