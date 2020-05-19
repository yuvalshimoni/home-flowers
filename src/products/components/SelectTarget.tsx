import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useAppState } from 'shared/hooks';
import { TextPrimary } from 'shared/components';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const TextWrapper = styled.div`
  margin-top: 10px;
  text-align: left;
`;

const TextFieldStyled = styled(TextField)`
  .MuiInput-root {
    height: 85px;
  }
  .MuiInput-input {
    height: 90%;
    font-size: 55px;
    font-weight: 100;

    @media (max-width: 500px) {
      font-size: ${({ theme }) => theme.sizes.md}px;
    }
  }
  .MuiInputLabel-root {
    font-weight: 100;
    font-size: ${({ theme }) => theme.sizes.huge}px;

    @media (max-width: 500px) {
      font-size: 45px;
    }
  }

  .MuiInputLabel-formControl {
    top: 20px;
  }

  .MuiInputLabel-shrink {
    transform: translate(0, 1.5px) scale(0.4);
  }

  .MuiAutocomplete-endAdornment {
    top: calc(50% - 2px);
  }
`;

export type CityType = {
  cityId: string;
  name: string;
};

const cities: Array<CityType> = [
  {
    name: 'מירב',
    cityId: 'sadasd',
  },
  {
    name: 'אלון מורה',
    cityId: 'd234dasd',
  },
  {
    name: 'תל אביב',
    cityId: 'sada324sd',
  },
];

const SelectTarget = (): JSX.Element => {
  const history = useHistory();
  const {
    costumerDetails: { target },
    setCostumerDetails,
  } = useAppState();

  const [inputValue, setInputValue] = useState('');

  const onSelect = useCallback(
    (event, values) => {
      const newValue = values ? { name: values.name, cityId: values.cityId } : undefined;
      setCostumerDetails((prevState) => ({
        ...prevState,
        target: values ? { name: values.name, cityId: values.cityId } : undefined,
      }));

      if (!!newValue) {
        history.push('/details');
      }
    },
    [history, setCostumerDetails],
  );

  const handleInputChange = useCallback((event, newInputValue) => {
    setInputValue(newInputValue);
  }, []);

  const getOptionLabel = useCallback((option: CityType): string => option.name, []);

  const renderInput = useCallback(
    (params): JSX.Element => <TextFieldStyled {...params} label="יעד למשלוח" />,
    [],
  );

  return (
    <>
      <Autocomplete
        fullWidth
        value={target}
        options={cities}
        inputValue={inputValue}
        onChange={onSelect}
        style={{ width: '100%' }}
        onInputChange={handleInputChange}
        getOptionLabel={getOptionLabel}
        renderInput={renderInput}
      />

      <TextWrapper>
        <TextPrimary>חלוקה בתאריך 23.3.20 בשעה 20:00</TextPrimary>
      </TextWrapper>
    </>
  );
};

export default SelectTarget;
