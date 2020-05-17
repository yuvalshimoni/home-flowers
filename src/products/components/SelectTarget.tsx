import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useAppState } from 'shared/hooks';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const TextFieldStyled = styled(TextField)`
  .MuiInput-root {
    height: 85px;
  }
  .MuiInput-input {
    height: 90%;
    font-size: 55px;
    font-weight: 100;
  }
  .MuiInputLabel-root {
    font-size: 60px;
    font-weight: 100;
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
  );
};

export default SelectTarget;
