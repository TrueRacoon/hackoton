import { FC, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import ru from 'date-fns/locale/ru';

export const Calendar: FC = () => {
  const [value, setValue] = useState<Date>();

  return (
    <DayPicker
      locale={ru}
      mode="single"
      selected={value}
      onSelect={setValue}
    />
  );
};
