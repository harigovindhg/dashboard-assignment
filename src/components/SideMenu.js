import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Accordion from '@mui/material/Accordion';
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/Add';
import CollapseMoreIcon from '@mui/icons-material/Remove';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SaveAltRoundedIcon from '@mui/icons-material/SaveAltRounded';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import SystemUpdateAltRoundedIcon from '@mui/icons-material/SystemUpdateAltRounded';
import DirectionsRunRoundedIcon from '@mui/icons-material/DirectionsRunRounded';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';

const SideMenu = () => {
    const [expanded, setExpanded] = useState('panel0');
    const dataset = useSelector((state) => state.dataApp.tableData);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const renderAccordionInfo = (workFlowData, name) => {
        let content;
        switch (name) {
            case 'DATASET SELECTION':
                content =
                    <p>
                        name: {workFlowData?.params_extra?.name}
                    </p>
                break;
            case 'NEW':
                content =
                    <>
                        <p>
                            column_name: {workFlowData?.params_extra?.column_name}
                        </p>
                        <p>
                            expression: {workFlowData?.params_extra?.expression}
                        </p>
                    </>
                break;
            case 'AGGREGATE':
                content =
                    <>
                        <p>
                            aggregate type: {workFlowData?.params_extra?.agg_type[0]}
                        </p>
                        <p>
                            dim_cols: {workFlowData?.params_extra?.dim_cols.join(', ')}
                        </p>
                        <p>
                            meas_col: {workFlowData?.params_extra?.meas_col[0].join(', ')}
                        </p>
                    </>
                break;
            case 'CLEAN':
                content =
                    <>
                        <p>
                            columns: {workFlowData?.params_extra?.columns.join(', ')}
                        </p>
                    </>
                break;
            case 'DEDUPE':
                content =
                    <>
                        <p>
                            columns: {workFlowData?.params_extra?.columns.join(', ')}
                        </p>
                    </>
                break;
            case 'JOIN':
                content =
                    <>
                        <p>
                            type: {workFlowData?.params_extra?.type}
                        </p>
                        <p>
                            left_columns: {workFlowData?.params_extra?.left_columns[0]}
                        </p>
                        <p>
                            right_columns: {workFlowData?.params_extra?.right_columns[0]}
                        </p>
                        <p>
                            dataset2_name: {workFlowData?.params_extra?.dataset2_name}
                        </p>
                    </>
                break;
            default:
                break;
        }
        return content;
    }

    return (
        <div className='sidemenu-container'>
            <div className='data-block'>
                <div className='row-block'>
                    <div className='data-label'>
                        <p>Workflow</p>
                    </div>
                    <div className='action-block'>
                        <CloseRoundedIcon />
                        <SaveAltRoundedIcon />
                        <SystemUpdateAltRoundedIcon />
                        <SaveOutlinedIcon />
                        <DirectionsRunRoundedIcon />
                        <EventRepeatOutlinedIcon sx={{ opacity: 0.5, cursor: 'not-allowed' }} />
                    </div>
                </div>
            </div>
            {dataset?.workflow_steps?.map((workflowItem, idx) =>
                <Accordion
                    disableGutters
                    defaultExpanded={idx === 0}
                    elevation={0}
                    expanded={expanded === `panel${idx}`}
                    onChange={handleChange(`panel${idx}`)}
                    sx={{
                        padding: '8px 8px 0 8px',
                        border: '0',
                        "::before": { display: 'none' }
                    }}
                >
                    <AccordionSummary
                        expandIcon={expanded === `panel${idx}` ? <CollapseMoreIcon /> : <ExpandMoreIcon />}
                        aria-controls={`panel${idx}-content`}
                        id={`panel${idx}-header`}
                        sx={{
                            flexDirection: 'row-reverse',
                            border: '0.2px solid #987DDA',
                            borderRadius: '10px',
                            color: '#4B6B86',
                            fontWeight: 'bold',
                            [`& .${accordionSummaryClasses.expandIconWrapper}`]:
                            {
                                borderRadius: 50,
                                bgcolor: '#F5F2FF',
                                color: '#3C0086'
                            },
                            [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
                            {
                                borderRadius: 0,
                            },
                            [`& .${accordionSummaryClasses.content}`]:
                            {
                                marginLeft: '10px',
                            }
                        }}
                    >
                        {workflowItem?.name_title}
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            bgcolor: '#F4F6FC',
                            border: '0.2px solid #987DDA',
                            borderTop: '0',
                            padding: '-10px',
                            color: '#4B6B86',
                            fontWeight: 'bold',
                            borderRadius: '0 0 10px 10px'
                        }}
                    >
                        <div>
                            {renderAccordionInfo(workflowItem, workflowItem?.name_title)}
                        </div>
                    </AccordionDetails>
                </Accordion>
            )}
        </div>
    );
};

export default SideMenu;
