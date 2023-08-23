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

const ModelTagDropDown = ({ selectModelTag }) => {
    const [modelTagData, setModelTagData] = useState([]);
    const [modelTag, setModelTag] = useState('');

    useEffect(() => {
        getModelTagData();
    }, []);
    const getModelTagData = async () => {
        const data = await http.get(API_CONSTANTS.GET_MODEL_TAGS_MLFLOW);
        const filteredData = data.data.model_versions.filter((item)=>{
            return item.tags && item.tags.length>0;
        });
        setModelTagData(filteredData);
    };
    const handleChange = (e)=>{
        setModelTag(e.target.value);
        selectModelTag(e.target.value);
    };
    const renderLocationData = () => {
        if (modelTagData)
            return modelTagData.map((item) => (
              <StyledMenuItem key={item.tags[0].value} value={item.tags[0].value}>
                {item.name} - {item.tags[0].value}
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
                    labelId="demo-simple-select-label"
                    onChange={handleChange}
                    value={modelTag}
                >
            {renderLocationData()}
          </StyledSelect>
        </FormControl>
      </>
    );
};

ModelTagDropDown.propTypes = {
    selectModelTag: PropTypes.number,
};
export default ModelTagDropDown;
