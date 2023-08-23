import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';



const TestContainer = ({ testData, setTestId }) => {

    const handleChange = (test_id) => {
        setTestId(test_id[0]);
    };

    const rows: GridRowsProp = testData.map((item)=>({
            id: item.test_id,
            start_date: item.start_date,
            end_date: item.end_date,
            name: item.test_name,
        }));

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'start_date', headerName: 'Start Date', width: 150 },
        { field: 'end_date', headerName: 'End Date', width: 150 },
        { field: 'name', headerName: 'Name', width: 600 },
    ];

    return (
      <>
        <div style={{ height: 400, width: '100%' }}>
          {testData.length > 0 ? <DataGrid
              columns={columns}
              rows={rows}
              onRowSelectionModelChange={(item) => {
                  handleChange(item);
              }}
          /> : null}
        </div>
      </>
    );
};

TestContainer.propTypes = {
    testData: PropTypes.array.isRequired,
    setTestId: PropTypes.func,
};
export default TestContainer;
