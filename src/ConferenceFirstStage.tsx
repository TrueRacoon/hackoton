import { FC, useState } from 'react';
import {
  Box,
  Button,
  FormControl, IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField
} from '@mui/material';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import { Subtitle } from './Subtitle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const questionTypes = [
  'Решения о кодексе корпоративного управления',
  'Решения по размещаемым или реализуемым ценным бумагам',
  'Решения по добровольной реорганизации или ликвидации общества',
  'Решения об увеличении количества объявленных акций общества или изменении вида неразмещенных объявленных акций общества',
  'Утверждение изменений в методику определения стоимости акций при их выкупе обществом на неорганизованном рынке',
  'Решения по конвертированию ценных бумаг общества',
  'Решения о выпуске ценных бумаг, конвертируемых в простые акции общества',
  'Решения об обмене размещенных акций одного вида на акции другого вида, определение условий, сроков и порядка такого обмена',
  'Решения о дроблении акций',
  'Решения о выпуске облигаций',
  'Решения по счетной комиссии и её членам',
  'По избранию совета директоров',
  'Решения об определение аудиторской организации, осуществляющей аудит общества',
  'Решения об утверждение аудированной годовой финансовой отчетности',
  'Решения об утверждение порядка распределения дивидендов и о выплате дивидендов',
  'Решения о невыплате дивидендов по простым акциям общества',
  'Решения о добровольном делистинге акций общества',
  'Решения об участии общества в создании или деятельности иных юридических лиц',
  'Решения определение формы извещения обществом акционеров о созыве общего собрания акционеров',
  'Решения об утверждение повестки дня общего собрания акционеров',
  'Решения об определение порядка предоставления акционерам информации о деятельности общества',
  'Решения о "золотой акции"',
  'Принятие решения о заключении обществом крупной сделки, превышающей 50% от общей балансовой стоимости компании',
  'Иные вопросы'
];

const initialValues = {
  agenda: [
    { question: '', questionType: '' },
  ],
};

type ConferenceFirstStageProps = {
  onCreate: () => void;
};

export const ConferenceFirstStage: FC<ConferenceFirstStageProps> = ({ onCreate }) => {
  const [age, setAge] = useState('');

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: '1240px', m: 'auto' }}>
      <Subtitle>
        Создание конференции
      </Subtitle>
      <FormControl fullWidth sx={{ mb: '40px' }}>
        <InputLabel id="demo-simple-select-label">Тип конференции</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Тип конференции"
          onChange={handleChange}
        >
          <MenuItem value={1}>Очередное собрание акционеров</MenuItem>
          <MenuItem value={2}>Внеочередное собрание акционеров</MenuItem>
          <MenuItem value={3}>Собрание директоров</MenuItem>
        </Select>
      </FormControl>
      <Formik
        initialValues={initialValues}
        onSubmit={() => {}}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form>
            <FieldArray name="agenda">
              {({ insert, remove, push }) => (
                <Stack spacing={6}>
                  {values.agenda.map((agendaObject, index) => (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton aria-label="delete" onClick={() => remove(index)} sx={{ mr: '16px' }}>
                        <DeleteOutlineIcon sx={{ color: '#0288D1' }}/>
                      </IconButton>
                      <Stack spacing={2} key={index} sx={{ flexGrow: 1 }}>
                        <TextField
                          name={`agenda.${index}.question`}
                          value={agendaObject.question}
                          label={`Вопрос ${index + 1}`}
                          variant="outlined"
                          onChange={handleChange}
                          fullWidth
                        />
                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="demo-simple-select-outlined-label">
                            Тема вопроса
                          </InputLabel>
                          <Select
                            name={`agenda.${index}.questionType`}
                            value={agendaObject.questionType}
                            label="Тема вопроса"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            {questionTypes.map((type) => (
                              <MenuItem key={type} value={type}>
                                {type}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Stack>
                    </Box>
                  ))}
                  <Stack spacing={4} direction="row" justifyContent="center">
                    <Button
                      variant="contained"
                      sx={{
                        background: '#0288D1',
                        fontSize: '15px',
                        fontWeight: '500',
                        lineHeight: '26px',
                        alignSelf: 'normal',
                      }}
                      onClick={() => push({ question: '', questionType: '' })}
                    >
                      Добавить вопрос
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        background: '#0288D1',
                        fontSize: '15px',
                        fontWeight: '500',
                        lineHeight: '26px',
                        alignSelf: 'normal',
                      }}
                      onClick={onCreate}
                    >
                      Создать конференцию
                    </Button>
                  </Stack>
                </Stack>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>
    </Box>
  )
}
