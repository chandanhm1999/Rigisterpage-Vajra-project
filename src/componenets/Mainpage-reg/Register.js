import React from 'react';
import "./Register.css"
import { Box, TextField, Button } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


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

const names = [
  'Clinic',
  'Super Speciaity',
  'Multi Speciaity',
  'Others',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName === name
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
    color: personName === name ? 'orange' : 'inherit',
  };
}

const RegisterForm = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState('');

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(value);
  };


  return (
    <Box
      sx={{
        display: 'flex',
        position: 'absolute',
        width: '100%',
        height: '904px',
        left: '8%',
        right: '7.5%',
        border: '2px solid rgba(255, 115, 29, 0.5)',
        filter: 'drop-shadow(0px 4px 4px #C7C7C7)',
        borderRadius: "60px",
        mt: "146px",
        px: 4,
        py: 6,
        '@media (min-width: 375px)': {
          mt: "106px",
          width: "260px",
          height: 800,
          left: "15px",
        },
        '@media (min-width: 412px)': {
          width: "480px",
          height: "1159px",
          mt: "126px",
          left: "50px"

        },
        '@media (landscape · width: 768px)': {
          width: 900,
          height: 1159,
        },
        '@media (min-width: 1200px)': {
          width: 1000,
          height: 904,
        },

        '@media (min-width: 600px)': {
          width: 500,
          height: 800,
        },
        '@media (min-width: 900px)': {
          width: 600,
          height: 900,
        },
        '@media (min-width: 1440px)': {
          width: 1200,
          height: 904,
          left: "100px"
        },
      }}
    >
      <Box sx={{

        display: 'flex',
        position: 'absolute',
        width: '100%',
        height: '904px',
        left: '45%',
        right: '7.5%',
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "40px",
        lineHeight: '60px',
        /* identical to box height */


        color: "#212427",
        '@media (min-width: 375px)': {
          mt: "-25px",
          width: "260px",
          height: 800,
          left: "125px",
          fontSize: "20px",
        },
        '@media (min-width: 412px)': {
          width: "480px",
          height: "1159px",
          mt: "126px",
          left: "50px"

        },
        '@media (landscape · width: 768px)': {
          width: 900,
          height: 1159,
        },
        '@media (min-width: 1440px)': {
          width: 1200,
          mt: 0,
          height: 904,
          left: "45%",
          fontSize: "40px",
        },
      }}>
        Register
      </Box>
      <Box sx={{
        display: 'flex',
        position: 'absolute',
        width: '100%',
        height: '904px',
        left: '45%',
        right: '7.5%',
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "20px",
        lineHeight: '60px',
        /* identical to box height */
        color: "#212427",
        '@media (min-width: 375px)': {
          width: "100%",
          height: "0px",
          mt: "10px",
          left: "15px",
          fontSize: "10px",
        },
        '@media (min-width: 1440px)': {
          width: 1200,
          mt: "66px",
          height: 904,
          left: "350px",
          fontSize: "20px",
        },
      }}>
        Please enter the Hospital information, then use the <Box color={"orange"}>services.</Box>
      </Box>
      <Box sx={{
        color: "#1746A2",
        width: 1200,
        mt: "200px",
        ml: "100px",
        fontSize: "20px",
        fontFamily: 'Poppins',
        fontStyle: "normal",
        '@media (min-width: 375px)': {
          fontSize: "14px",
          height: "21px",
          mt: "84px",
          ml: "-20px",
        },
        '@media (min-width: 1440px)': {
          fontSize: "20px",
          mt: "200px",
          ml: "100px"
        }
      }}>
        Hospital Name
      </Box>
      <div>
        <Box sx={{
          position: "relative",
          left: "-640px",
          mt: "240px",
          '@media (min-width: 375px)': {
            height: "0px",
            mt: "130px",
            left: "-55px",
            fontSize: "10px",
            width: '21.5ch'
          },
          '@media (min-width: 1440px)': {
            width: 1200,
            mt: "266px",
            height: 904,
            left: "-100px",
            fontSize: "20px",
          },
          
        }}>
          <OutlinedInput sx={{ width: '51.5ch', borderColor: 'primary.main', background: 'rgba(23, 70, 162, 0.05)' }} placeholder="Apollo Hospital" />
        </Box>
      </div>
      <div className='Select_fun'>
        <FormControl sx={{ m: 0, width: '57.5ch', mt: 0, borderColor: 'primary.main', background: 'rgba(23, 70, 162, 0.05)' }}>
          <Select
            displayEmpty
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (!selected) {
                return <em style={{ fontFamily: 'Poppins' }}>Hospital Type</em>;
              }
              return selected;
            }}
            MenuProps={MenuProps}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* end with fun! */}

      <p className="text_2">Mobile Number</p>
      <div className='outline_3'>
        <OutlinedInput sx={{ width: '51.5ch', borderColor: 'primary.main', background: 'rgba(23, 70, 162, 0.05)' }} placeholder="888XX88XX00" />
      </div>
      <p className="text_3">City Name</p>

      <div className='outline_4'>
        <OutlinedInput sx={{ width: '51.5ch', borderColor: 'primary.main', background: 'rgba(23, 70, 162, 0.05)' }} placeholder="Bangalore" />
      </div>

      <p className="text_6">State Name</p>

      <div className='outline_6'>
        <OutlinedInput sx={{ width: '51.5ch', borderColor: 'primary.main', background: 'rgba(23, 70, 162, 0.05)' }} placeholder="Karnataka" />
      </div>

      <p className="text_7">Pin Code</p>
      <div className='outline_7'>
        <OutlinedInput sx={{ width: '51.5ch', borderColor: 'primary.main', background: 'rgba(23, 70, 162, 0.05)' }} placeholder="560001" />
      </div>

      <p className="text_8">Address</p>
      <div className='Textfull_area'>
        <OutlinedInput sx={{ width: '1040px', borderRadius: '20px', height: '131px', borderColor: 'primary.main', background: 'rgba(23, 70, 162, 0.05)' }} placeholder="560001" />
      </div>

      <div className='final_0'>
        <button>Submit</button>
      </div>
    </Box>
  );
};

export default RegisterForm;
