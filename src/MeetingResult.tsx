import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { SearchBar } from './SearchBar';

export const MeetingResult: FC = () => {
  return (
    <>
      <Box sx={{ m: '100px auto 72px' }}>
        <SearchBar />
      </Box>
      <Typography
        sx={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '32px',
          lineHeight: '40px',
          m: '0 auto 34px',
          textAlign: 'center',
          color: '#1D738B',
        }}
      >
        Последние использованные материалы
      </Typography>
      <Paper
        sx={{
          background: '#D9D9D9',
          pt: '1em',
          borderRadius: '12px',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '16px',
            lineHeight: '20px',
            mb: '85px',
            ml: '37px',
          }}
        >
          Номер протокола{<br/>}01-02-01/123-11.02.2022
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '20px',
            lineHeight: '25px',
            mb: '128px',
            ml: '37px',
          }}
        >
          Повестка дня{<br/>}
          1. Решение об утверждении порядка распределения дивидендов и о выплате дивидендов{<br/>}
          2. Решение об определении порядка предоставления акционерам информации о деятельности общества
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '16px',
            lineHeight: '20px',
            color: '#00000080',
            ml: '37px',
          }}
        >
          Дата исполнения{<br/>}
          "нет даты"
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '16px',
            lineHeight: '20px',
            mb: '36px',
            ml: '37px',
          }}
        >
          Итог собрания{<br/>}
          1. Принят{<br/>}
          2. Принят
        </Typography>
        <Paper
          sx={{
            background: '#1D738B',
            p: '35px 37px 27px',
            borderRadius: '0px 0px 12px 12px',
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={0}
          >
            <Typography
              sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '16px',
                lineHeight: '20px',
                color: '#FFFFFF',
              }}
              component="div"
            >
              Дата собрания{<br/>}
              11.02.2022
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '16px',
                lineHeight: '20px',
                color: '#FFFFFF',
              }}
              component="div"
            >
              Дата подписания{<br/>}
              11.02.2022
            </Typography>
            <Button
              variant="contained"
              sx={{
                background: '#0288D1',
                fontSize: '15px',
                fontWeight: '500',
                lineHeight: '26px',
                height: '48px',
                width: '200px'
              }}
              href={require("./Протокол № 01-02-01-123-11.02.2022.docx")}
            >
              Скачать
            </Button>
          </Stack>
        </Paper>
      </Paper>
    </>
  );
};
