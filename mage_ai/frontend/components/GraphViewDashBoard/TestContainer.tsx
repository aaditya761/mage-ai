import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const TestContainer = ({ testData, setTestId }) => {
    
    const handleChange = (e) => {
        setTestId(e.target.value);
    };

    return (
      <>
        {testData.length > 0 && (<div>
          <TableContainer component={Paper}>
            <Table aria-label="simple table" sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">Start Date</TableCell>
                  <TableCell align="right">End Date</TableCell>
                  <TableCell align="right">Name </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {testData.map((row) => (
                  <TableRow
                                key={row.test_id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                    <TableCell align="right">{row.test_id}</TableCell>
                    <TableCell align="right">{row.start_date}</TableCell>
                    <TableCell align="right">{row.end_date}</TableCell>
                    <TableCell align="right">{row.test_name}</TableCell>
                  </TableRow>
                        ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>)}
      </>
    );
};

TestContainer.propTypes = {
    testData: PropTypes.array.isRequired,
    setTestId: PropTypes.func,
};
export default TestContainer;
