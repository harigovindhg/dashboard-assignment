import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DeleteIcon from '@mui/icons-material/Delete';
import InsightsButtonGroup from './InsightsButtonGroup';
import { updateTable } from '../utils/slices/dataSlice';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import dataSetIcon from '../assets/data_icon.png';

const DataTable = () => {
    const dataset = useSelector((state) => state.dataApp.tableData);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('data.json').then((response) => {
            dispatch(updateTable(response?.data));
        });
    }, [dispatch]);

    return (
        <>
            <InsightsButtonGroup />
            <div className='data-table-container'>
                <div className='data-block'>
                    <div className='data-summary'>
                        <div className='data-info'>
                            <div className='data-label'>
                                <SettingsSuggestRoundedIcon sx={{ color: '#A085E3' }} />
                                <p>PROJECT NAME</p>
                            </div>
                            <p>{dataset?.project_name}</p>
                        </div>
                        <div className='data-info'>
                            <div className='data-label'>
                                <img src={dataSetIcon} alt='Output Dataset Icon' aria-hidden />
                                <p>OUTPUT DATASET NAME</p>
                            </div>
                            <p>{dataset?.output_name}</p>
                        </div>
                        <div className='data-info'>
                            <div className='data-label'>
                                <p>LAST RUN</p>
                            </div>
                            <p>{dataset?.last_run}</p>
                        </div>
                    </div>
                    <div className='row-count'>
                        <p>Rows:</p>
                        <p>{dataset?.row_count}</p>
                    </div>
                </div>
                <TableContainer sx={{ margin: 3, width: 'auto' }}>
                    <Table sx={{ minWidth: 650, padding: 10 }} aria-label="Data Table">
                        <TableHead>
                            <TableRow className='table-row'>
                                {dataset?.table_headers?.length > 0 &&
                                    dataset.table_headers.map((header) => header.name !== 'Row' &&
                                        <TableCell sx={{ border: 1, borderColor: 'grey.300', minWidth: 150, fontWeight: 700, bgcolor: 'rgba(244, 246, 252, 1)', maxHeight: 15 }} className='table-element' key={header.name}>
                                            <div className='table-header'>
                                                <div className='table-header-text'>
                                                    {header?.name}
                                                </div>
                                                <DeleteIcon sx={{ color: '#A296CA' }} />
                                            </div>
                                        </TableCell>
                                    )
                                }
                            </TableRow>
                            <TableRow className='table-row'>
                                {dataset?.table_headers?.length > 0 &&
                                    dataset.table_headers.map((header) => header.name !== 'Row' &&
                                        <TableCell sx={{ border: 1, borderColor: 'grey.300', minWidth: 150, fontWeight: 700, bgcolor: 'rgba(244, 246, 252, 1)' }} className='table-element' key={header.name}>
                                            <FormControl sx={{ m: 1, minWidth: 120, bgcolor: 'rgba(0, 0, 0, 0)' }} size="small">
                                                <Select
                                                    labelId="demo-select-small-label"
                                                    id="demo-select-small"
                                                    value={header?.type}
                                                    displayEmpty
                                                    sx={{ bgcolor: 'rgba(255, 255, 255, 1)' }}
                                                >
                                                    <MenuItem value={header?.type}>
                                                        <em style={{ textTransform: 'capitalize', fontStyle: 'normal' }}>{header?.type}</em>
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </TableCell>
                                    )
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataset?.table_data?.map((row, idx) => (
                                // <TableRow className='table-row' key={idx} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableRow className='table-row' key={idx}>
                                    {row.map((value, i) => (
                                        i !== 0 && <TableCell sx={{ border: 1, borderColor: 'grey.300' }} scope='row' className='table-element' key={i}>{value}</TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
};

export default DataTable;
