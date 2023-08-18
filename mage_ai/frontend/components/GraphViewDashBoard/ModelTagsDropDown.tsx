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

const ModelTagDropDown = () => {
    const [modelTagData, setModelTagData] = useState([]);
    const [modelTag, setModelTag] = useState('');

    useEffect(() => {
        getModelTagData();
    }, []);
    const getModelTagData = async () => {
        const data = await http.get(API_CONSTANTS.GET_MODEL_TAGS_MLFLOW);
        setModelTagData(data.data?.model_versions);
    };
    const handleChange = (e)=>{
        setModelTag(e.target.value);
    }
    const renderLocationData = () => {
        if (modelTagData)
            return modelTagData.map((item) => (
                <StyledMenuItem key={item.name} value={item.name}>
                    {item.name}
                </StyledMenuItem>
            ));
        return null;
    };
    return (
        <>
            <FormControl size={'small'} sx={{ m: 1, width: 300 }}>
                <StyledInputLabel id="demo-simple-select-label">{' Model Tag '}</StyledInputLabel>
                <StyledSelect
                    id="demo-simple-select"
                    input={<StyledOutlinedInput label=" Model Tag " />}
                    label="Age"
                    onChange={handleChange}
                    labelId="demo-simple-select-label"
                    value={modelTag}
                >
                    {renderLocationData()}
                </StyledSelect>
            </FormControl>
        </>
    );
};

ModelTagDropDown.propTypes = {
    batteryId: PropTypes.number,
    setBatteryId: PropTypes.func,
};
export default ModelTagDropDown;
