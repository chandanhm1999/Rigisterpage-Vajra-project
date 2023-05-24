import React from 'react'
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#1746A2', p: 2,
        position:'absolute', top: "1200px",
        width:{xl:"1200px",lg:"1440px",md:"1440px",sm:"428px",xs:"428px"},
        height:{xl:"80px",lg:"80px",md:"80px",sm:"40px",xs:"40px"},
        }}>
            <Typography sx={{ fontFamily: 'Poppins', fontSize: 18, color: '#FFFFFF' }}>
                © 2020 Vajra, All Rights Reserved
            </Typography>
            <Typography sx={{ fontFamily: 'Poppins', fontSize: 18, color: '#FFFFFF' }}>
                Terms & Conditions | FAQ’s
            </Typography>
        </Box>
    )
}

export default Footer
