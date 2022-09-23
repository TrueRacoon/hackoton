import { FC } from 'react';
import { Button, Divider, IconButton, InputBase, Paper, TextField } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

export const SearchBar: FC = () => {
  return (
    <Paper
      component="form"
      sx={{ display: 'flex', alignItems: 'center', background: '#D9D9D9', height: 48, width: 919, ml: 'auto', mr: 'auto' }}
    >
      <SearchOutlined sx={{ p: '10px', color: '#0288D1' }} />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Поиск..."
        inputProps={{ 'aria-label': 'Поиск...' }}
      />
      <Button
        variant="contained"
        sx={{
          background: '#0288D1',
          fontSize: '15px',
          fontWeight: '500',
          lineHeight: '26px',
          alignSelf: 'normal',
        }}
      >
        Поиск
      </Button>
    </Paper>
  );
};
