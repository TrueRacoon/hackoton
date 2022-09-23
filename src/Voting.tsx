import { FC, useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { VotesColumn } from './VotesColumn';
import { ConferenceFirstStage } from './ConferenceFirstStage';
import { useNavigate } from 'react-router-dom';

type VotingProps = {
  votes: {
    'InProgress': string[],
    'Agree': string[],
    'Restrain': string[],
    'Disagree': string[],
  }
};

export const Voting: FC = () => {
  const [votes, setVotes] = useState<any>({
    'InProgress': ['Хохлова Т.А.', 'Фаерман О.А.', 'Иванов С.М.'],
    'Agree': [],
    'Restrain': [],
    'Disagree': [],
  });

  const [question, setQuestion] = useState<string>('Вопрос 1');

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setVotes({
        'InProgress': ['Хохлова Т.А.', 'Иванов С.М.'],
        'Agree': ['Фаерман О.А.'],
        'Restrain': [],
        'Disagree': [],
      });
      setTimeout(() => {
        setVotes({
          'InProgress': ['Хохлова Т.А.'],
          'Agree': ['Фаерман О.А.', 'Иванов С.М.'],
          'Restrain': [],
          'Disagree': [],
        });
        setTimeout(() => {
          setVotes({
            'InProgress': [],
            'Agree': ['Фаерман О.А.', 'Иванов С.М.', 'Хохлова Т.А.'],
            'Restrain': [],
            'Disagree': [],
          });
          setTimeout(() => {
            setVotes({
              'InProgress': ['Фаерман О.А.', 'Иванов С.М.', 'Хохлова Т.А.'],
              'Agree': [],
              'Restrain': [],
              'Disagree': [],
            });
            setQuestion('Вопрос 2');
            setTimeout(() => {
              setVotes({
                'InProgress': ['Фаерман О.А.', 'Иванов С.М.'],
                'Agree': ['Хохлова Т.А.'],
                'Restrain': [],
                'Disagree': [],
              });
              setTimeout(() => {
                setVotes({
                  'InProgress': ['Фаерман О.А.'],
                  'Agree': ['Хохлова Т.А.', 'Иванов С.М.'],
                  'Restrain': [],
                  'Disagree': [],
                });
                setTimeout(() => {
                  setVotes({
                    'InProgress': [],
                    'Agree': ['Хохлова Т.А.', 'Иванов С.М.'],
                    'Restrain': ['Фаерман О.А.'],
                    'Disagree': [],
                  });
                  setTimeout(() => {
                    setVotes({
                      'InProgress': ['Фаерман О.А.', 'Иванов С.М.', 'Хохлова Т.А.'],
                      'Agree': [],
                      'Restrain': [],
                      'Disagree': [],
                    });
                    setQuestion('Вопрос 3');
                    setTimeout(() => {
                      setVotes({
                        'InProgress': ['Фаерман О.А.', 'Хохлова Т.В.'],
                        'Agree': [],
                        'Restrain': ['Иванов С.М.'],
                        'Disagree': [],
                      });
                      setTimeout(() => {
                        setVotes({
                          'InProgress': ['Фаерман О.А.'],
                          'Agree': ['Хохлова Т.В.'],
                          'Restrain': ['Иванов С.М.'],
                          'Disagree': [],
                        });
                        setTimeout(() => {
                          setVotes({
                            'InProgress': [],
                            'Agree': ['Хохлова Т.В.', 'Фаерман О.А.'],
                            'Restrain': ['Иванов С.М.'],
                            'Disagree': [],
                          });
                          setTimeout(() => {
                            setVotes({
                              'InProgress': ['Фаерман О.А.', 'Хохлова Т.В.', 'Иванов С.М.'],
                              'Agree': [],
                              'Restrain': [],
                              'Disagree': [],
                            });
                            setQuestion('Вопрос 4');
                            setTimeout(() => {
                              setVotes({
                                'InProgress': ['Фаерман О.А.', 'Иванов С.М.'],
                                'Agree': ['Хохлова Т.В.'],
                                'Restrain': [],
                                'Disagree': [],
                              });
                              setTimeout(() => {
                                setVotes({
                                  'InProgress': ['Фаерман О.А.'],
                                  'Agree': ['Хохлова Т.В.', 'Иванов С.М.'],
                                  'Restrain': [],
                                  'Disagree': [],
                                });
                                setTimeout(() => {
                                  setVotes({
                                    'InProgress': [],
                                    'Agree': ['Хохлова Т.В.', 'Иванов С.М.'],
                                    'Restrain': ['Фаерман О.А.'],
                                    'Disagree': [],
                                  });
                                  setTimeout(() => {
                                    setQuestion('');
                                    setTimeout(() => {
                                      navigate('/meeting_result');
                                    }, 1000);
                                  }, 1000);
                                }, 600);
                              }, 200);
                            }, 1000);
                          }, 1000);
                        }, 400);
                      }, 360);
                    }, 1200);
                  }, 1000);
                }, 250);
              }, 400);
            }, 1500);
          }, 1000);
        }, 150);
      }, 333);
    }, 1000);
  }, [navigate]);

  const VotingBoxes = (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <VotesColumn title="В процессе голосования" column="InProgress" titleBg="#BABABA;" names={votes.InProgress} />
      </Grid>
      <Grid item xs={3}>
        <VotesColumn title="Голосуют за" column="Agree"  titleBg="#4EACDF;" names={votes.Agree} />
      </Grid>
      <Grid item xs={3}>
        <VotesColumn title="Воздержались от голоса" column="Restrain"  titleBg="#F9E5A2;" names={votes.Restrain} />
      </Grid>
      <Grid item xs={3}>
        <VotesColumn title="Проголосовали против" column="Disagree"  titleBg="#FF8F8F;" names={votes.Disagree} />
      </Grid>
    </Grid>
  );

  return (
    <Box>
      <Box sx={{ mb: '1em' }}>
        <Typography component="span" sx={{ mr: '1em', fontSize: '1.2em' }}>
          {question ? 'Текущий вопрос:' : 'Все вопросы были рассмотрены.'}
        </Typography>
        <Typography component="span" sx={{ fontSize: '1.2em' }}>
          {question}
        </Typography>
      </Box>
      {question ? VotingBoxes : undefined}
    </Box>
  );
};
