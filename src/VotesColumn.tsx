import { FC } from 'react';
import { Box, Paper, Typography } from '@mui/material';

export type VotesColumnProps = {
  column: string;
  title: string;
  titleBg: string;
  names: string[];
};

export const VotesColumn: FC<VotesColumnProps> = ({ column, title, titleBg, names }) => {
  return (
    <Paper sx={{ background: 'rgba(0, 0, 0, 0.04)', pb: '1em', minHeight: '200px' }}>
      <Paper sx={{ background: titleBg, p: '1em' }}>
        <Typography sx={{ fontSize: '1.2em' }}>
          {title}
        </Typography>
      </Paper>
      <Box sx={{ fontSize: '1.2em' }}>
        <ul>
          {names.map((name, index) => (<li key={index}>{name}</li>))}
        </ul>
      </Box>
    </Paper>
  );
};
