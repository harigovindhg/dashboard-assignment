import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import SaveIcon from '@mui/icons-material/Save';

const CustomButton = styled(Button)({
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    backgroundColor: '#2C0060',
    color: 'white',
    border: '0.2px solid #e0e0e0',
    '&.inactive': {
        color: '#390060',
        backgroundColor: 'white'
    },
    '&.disabled': {
        opacity: 0.5,
        cursor: 'not-allowed'
    }
});
const CustomButtonGroup = styled(ButtonGroup)({
    border: '0'
});

const InsightsButtonGroup = () => {
    return (
        <div className='insight-buttons-container'>
            <CustomButtonGroup aria-label="Insight Options">
                <CustomButton startIcon={<SettingsOutlinedIcon />}>Data</CustomButton>
                <CustomButton className='inactive' variant="outlined" startIcon={<SignalCellularAltOutlinedIcon />}>Summary</CustomButton>
                <CustomButton className='inactive' variant="outlined" startIcon={<StickyNote2OutlinedIcon />}>Logs</CustomButton>
            </CustomButtonGroup>
            <CustomButton className='inactive disabled' disableRipple startIcon={<SaveIcon />}>Download</CustomButton>
        </div>
    )
}

export default InsightsButtonGroup