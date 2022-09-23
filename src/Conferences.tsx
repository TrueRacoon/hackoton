import { FC, useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { ConferenceFirstStage } from './ConferenceFirstStage';
import { Voting } from './Voting';
import { Subtitle } from './Subtitle';

export const Conferences: FC = () => {
  const [stage, setStage] = useState(0);

  if (stage === 0) {
    return <ConferenceFirstStage onCreate={() => setStage(1)}/>
  }

  return (
    <Box sx={{ maxWidth: '1240px', m: 'auto' }}>
      <Subtitle>
        Голосование
      </Subtitle>
      <Voting />
    </Box>
  );
};
