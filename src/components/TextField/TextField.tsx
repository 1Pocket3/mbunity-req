// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields(props: any) {
  const { className, type, placeholder, label } = props;
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, maxWidth: '100%', marginLeft: '8px' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        className={className}
        type={type}
        placeholder={placeholder}
        id="standard-basic"
        label={label}
        variant="standard" />
    </Box>
  );
}