import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useAppState } from 'shared/hooks';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Wrapper = styled.div``;

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
    (params): JSX.Element => <TextField {...params} label="יעד למשלוח" />,
    [],
  );

  return (
    <Autocomplete
      value={target}
      options={cities}
      inputValue={inputValue}
      onChange={onSelect}
      style={{ width: 300 }}
      onInputChange={handleInputChange}
      getOptionLabel={getOptionLabel}
      renderInput={renderInput}
    />
  );
};

export default SelectTarget;
