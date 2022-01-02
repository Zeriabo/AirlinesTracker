import * as React from 'react';
import Box from '@mui/material/Box';
import { blue } from '@mui/material/colors';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h6v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function SvgIconsColor() {
  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 5,
        },
      }}
    >
  

      <FlightTakeoffIcon sx={{ color: blue[500] }} />
    </Box>
  );
}