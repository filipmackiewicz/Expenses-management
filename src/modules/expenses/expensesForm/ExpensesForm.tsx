import * as React from 'react';
import FormControlUnstyled, { useFormControlUnstyledContext } from '@mui/base/FormControlUnstyled';
import InputUnstyled, { inputUnstyledClasses } from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import clsx from 'clsx';
import { CustomForm, SelectWrapper } from './ExpensesFormStyles';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  600: '#0072E5',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const Input = styled(InputUnstyled)(
  ({ theme }) => `
  
  .${inputUnstyledClasses.input} {
    width: 320px;
    font-size: 0.875rem;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 8px;
    padding: 12px 12px;

    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }

    &:focus {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
    }
  }
`
);

const Label = styled(({ children, className }: { children?: React.ReactNode; className?: string }) => {
  const formControlContext = useFormControlUnstyledContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return <p>{children}</p>;
  }

  const { error, required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return (
    <p className={clsx(className, error || showRequiredError ? 'invalid' : '')}>
      {children}
      {required ? ' *' : ''}
    </p>
  );
})`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  margin-bottom: 4px;

  &.invalid {
    color: red;
  }
`;

export default function ExpensesForm() {
  return (
    <CustomForm>
      <FormControlUnstyled defaultValue='' required>
        <Label>Nazwa</Label>
        <Input type='text' placeholder='Wprowadz nazwę produktu/produktów' />
      </FormControlUnstyled>
      <FormControlUnstyled defaultValue='' required>
        <Label>Cena</Label>
        <Input type='number' placeholder='Podaj cenę produktu/produktów' />
      </FormControlUnstyled>
      <FormControlUnstyled defaultValue='' required>
        <Label>Data zakupu</Label>
        <Input type='date' placeholder='Podaj cenę produktu/produktów' />
      </FormControlUnstyled>
      <SelectWrapper>
        <label htmlFor='category'>Wybierz kategorie zakupu</label>
        <select id='category'>
          <option value='zwynosc'>Żywność</option>
          <option value='chemia'>Chemia</option>
          <option value='rozrywka'>Rozrywka</option>
          <option value='rachunki'>Rachunki</option>
          <option value='odziez'>Odzież</option>
          <option value='inne'>Inne wydatki</option>
        </select>
      </SelectWrapper>
      <Button type='submit' variant='contained' endIcon={<SendIcon />}>
        Dodaj wydatek
      </Button>
    </CustomForm>
  );
}
