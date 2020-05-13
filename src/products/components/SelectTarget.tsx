import React from 'react';
import styled from 'styled-components';
import { useAppContext } from 'shared/hooks';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Wrapper = styled.div``;

type CityType = {
  name: string;
};

const cities: Array<CityType> = [
  {
    name: 'מירב',
  },
  {
    name: 'אלון מורה',
  },
  {
    name: 'תל אביב',
  },
];

const SelectTarget = (): JSX.Element => {
  const {
    state: { setCostumerDetails },
  } = useAppContext();

  return (
    <Autocomplete
      id="combo-box-demo"
      options={cities}
      getOptionLabel={(option: CityType) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="יעד למשלוח" variant="outlined" />}
    />
  );
};

export default SelectTarget;
