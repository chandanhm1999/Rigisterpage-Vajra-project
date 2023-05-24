import React from 'react';

import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';

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

export default function AddressForm() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState('');

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(value);
  };
  return (
    <React.Fragment>
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
          borderRadius: '60px',
          mt: '146px',
          px: 4,
          py: 6,
          '@media (max-width:600px)': {
            mt: '106px',
            width: '260px',
            height: '904px',
            left: '15px',
          },
          '@media (min-width:600px)': {
            width: '500px',
            height: '800px',
          },
          '@media (min-width:900px)': {
            width: '600px',
            height: '900px',
          },
          '@media (min-width:1200px)': {
            width: '1000px',
            height: '904px',
          },
          '@media (min-width:1440px)': {
            width: '1200px',
            height: '904px',
            left: '100px',
          },
        }}
      >
        <Box>
          <Typography
            sx={{
              display: 'flex',
              position: 'absolute',
              width: '84px',
              height: '904px',
              left: '45%',
              right: '7.5%',
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '40px',
              lineHeight: '60px',
              color: '#212427',
              '@media (max-width:600px)': {
                mt: '-460px',
                ml: '-20px',
                width: '84px',
                fontSize: '20px',
                alignItems: 'center',
                justifyContent: 'center',
                lineHeight: '30px',
              },
              '@media (max-width:900px)': {
                mt: '-460px',
                ml: '-20px',
                width: '84px',
                fontSize: '20px',
                alignItems: 'center',
                justifyContent: 'center',
                lineHeight: '30px',
              },
            }}
          >
            Register
          </Typography>
        </Box>
        <Typography sx={{
          display: 'flex',
          position: 'absolute',
          width: '670px',
          height: '904px',
          left: '28%',
          right: '7.5%',
          top: "130px",
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '20px',
          lineHeight: '30px',
          color: '#212427',
          '@media (max-width:600px)': {
            fontSize: "12px",
            top: "60px",
            left: "38px",
          }
        }}>
          Please enter the Hospital information,
        </Typography>
        <Typography sx={{
          display: 'flex',
          position: 'absolute',
          width: '670px',
          height: '904px',
          left: '59%',
          right: '7.5%',
          top: "130.1px",
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '20px',
          lineHeight: '30px',
          color: '#212427',
          '@media (max-width:600px)': {
            fontSize: "14px",
            top: "80px",
            left: "92px",
          }
        }}>
          then use the <Box color={"orange"}> services.</Box>
        </Typography>

        <Box>
          <Typography sx={{
            color: "#1746A2",
            mt: "200px",
            width: "100%",
            ml: "100px",
            mr: "100px",
            fontSize: "20px",
            fontFamily: 'Poppins',
            fontStyle: "normal",
            '@media (max-width:600px)': {
              fontSize: "14px",
              ml: "-14px",
              mt: "80px",


            }
          }}>
            Hospital Name
          </Typography>
        </Box>
        <Box>
          <OutlinedInput
            sx={{
              width: '51.5ch', borderColor: 'primary.main', background: 'rgba(23, 70, 162, 0.05)',
              top: "240px",
              left: "-182px",
              '@media (max-width:600px)': {
                width: "32.5ch",
                left: "-159px",
                top: "105px"
              }
            }} placeholder="Apollo Hospital" />
        </Box>

        {/* call fun */}

        <div className='Select_fun'>
          <FormControl
            sx={{
              m: 0, width: '57.5ch', borderColor: 'primary.main', background: 'rgba(23, 70, 162, 0.05)',
              left: "-640px",
              top: "360px",
              '@media (max-width:600px)': {
                width: "36.3ch",
                left: "-449px",
                top: "175px"
              }
            }}>
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

        {/* end fun */}

        <Box>
          <Typography sx={{
            color: "#1746A2",
            mt: "460px",
            width: "100%",
            ml: "-1101px",
            mr: "1200px",
            fontSize: "20px",
            fontFamily: 'Poppins',
            fontStyle: "normal",
            '@media (max-width:600px)': {
              fontSize: "14px",
              ml: "-739px",
              mt: "248px",

            }

          }}>
            Mobile Number
          </Typography>
          <Box>
            <OutlinedInput sx={{
              width: '51.5ch', borderColor: 'primary.main', background: 'rgba(23, 70, 162, 0.05)',
              left: "-1100px",
              top: "10px",
              '@media (max-width:600px)': {
                width: "32.5ch",
                left: "-739px",
                top: "5px"
              }
            }} placeholder="Apollo Hospital" />
          </Box>
        </Box>
        <Box>
          <Typography sx={{
            color: "#1746A2",
            mt: "200px",
            width: "100%",
            ml: "-965px",
            mr: "1100px",
            fontSize: "20px",
            fontFamily: 'Poppins',
            fontStyle: "normal",
            '@media (max-width:600px)': {
              fontSize: "14px",
              position: "absolute",
              mt: "345px",
              ml: "-1258px"
            }
          }}>
            City Name
          </Typography>
        </Box>
        <Box>
          <OutlinedInput sx={{
            width: '51.5ch', borderColor: 'primary.main', background: 'rgba(23, 70, 162, 0.05)',
            position: "absolute",
            left: "727px",
            top: "288px",
            '@media (max-width:600px)': {
              width: "32.5ch",
              left: "16px",
              top: "420px"
            }
          }} placeholder="Bangalore" />
        </Box>
        <Box>
          <Typography sx={{
            color: "#1746A2",
            mt: "330px",
            width: "100%",
            ml: "-1161px",
            mr: "1100px",
            position: "absolute",
            fontSize: "20px",
            fontFamily: 'Poppins',
            fontStyle: "normal",
            '@media (max-width:600px)': {
              fontSize: "14px",
              position: "absolute",
              mt: "535px",
              ml: "-1258px"
            }
          }}>
            State Name
          </Typography>
        </Box>
        <Box>
          <OutlinedInput sx={{
            width: '51.5ch', borderColor: 'primary.main', background: 'rgba(23, 70, 162, 0.05)',
            position: "absolute",
            left: "727px",
            top: "408px",
            '@media (max-width:600px)': {
              width: "32.5ch",
              left: "16px",
              top: "610px"
            }
          }} placeholder="Karnataka" />
        </Box>
        <Box>
          <Typography sx={{
            color: "#1746A2",
            mt: "460px",
            width: "100%",
            ml: "-1161px",
            mr: "1100px",
            position: "absolute",
            fontSize: "20px",
            fontFamily: 'Poppins',
            fontStyle: "normal",
            '@media (max-width:600px)': {
              fontSize: "14px",
              position: "absolute",
              mt: "440px",
              ml: "-1258px"
            }
          }}>
            Pin code
          </Typography>
        </Box>
        <Box>
          <OutlinedInput sx={{
            width: '51.5ch', borderColor: 'primary.main', background: 'rgba(23, 70, 162, 0.05)',
            position: "absolute",
            left: "727px",
            top: "548px",
            '@media (max-width:600px)': {
              width: "32.5ch",
              left: "16px",
              top: "515px"
            }
          }} placeholder="560001" />
        </Box>
        <Box>
          <Typography sx={{
            color: "#1746A2",
            mt: "591px",
            width: "100%",
            left: "132px",
            mr: "1100px",
            position: "absolute",
            fontSize: "20px",
            fontFamily: 'Poppins',
            fontStyle: "normal",
            '@media (max-width:600px)': {
              fontSize: "14px",
              position: "absolute",
              top: "90px",
              left: "17px",
            }
          }}>
            Address
          </Typography>
        </Box>
        <Box>
          <OutlinedInput sx={{
            width: '1053px', borderRadius: '20px', height: '131px', borderColor: 'primary.main', background: 'rgba(23, 70, 162, 0.05)',
            position: "absolute",
            left: "132px",
            top: "681px",
            '@media (max-width:600px)': {
              fontSize: "14px",
              position: "absolute",
              top: "710px",
              left: "17px",
              width: '288px',
            }
          }} placeholder="560001" />
        </Box>
        <Button variant="contained" sx={{
          position: "absolute",
          left: "510px",
          top: "880px",
          width: "300px",
          height: "60px",
          borderRadius: "40px",
        }}>Submit</Button>
      </Box>
    </React.Fragment>
  );
}
    