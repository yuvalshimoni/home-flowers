import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useAppState } from 'shared/hooks';
import { TextPrimary } from 'shared/components';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import * as Types from 'graphql/types.generated';
import { useCitiesQuery } from '../graphql/cities.generated';

const TextWrapper = styled.div`
  margin-top: 10px;
  text-align: left;
`;

const TextFieldStyled = styled(TextField)`
  .MuiInput-root {
    height: 85px;
  }
  .MuiInput-input {
    height: 90px;
    font-size: 50px;
    font-weight: 100;

    @media (max-width: 500px) {
      font-size: 45px;
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
    top: 12px;

    @media (max-width: 500px) {
      top: 20px;
    }
  }

  .MuiInputLabel-shrink {
    transform: translate(0, 1.5px) scale(0.4);
  }

  .MuiAutocomplete-endAdornment {
    top: calc(50% - 2px);
  }
`;

export type CityType = {
  cityId: Types.City['id'];
  name: Types.City['name'];
};

const SelectTarget = (): JSX.Element => {
  const { data, loading } = useCitiesQuery();
  const history = useHistory();
  const {
    costumerDetails: { target },
    setCostumerDetails,
  } = useAppState();

  const [inputValue, setInputValue] = useState('');

  const onSelect = useCallback(
    (event, values) => {
      const newValue = values ? { name: values.name, cityId: values.id } : undefined;
      setCostumerDetails((prevState) => ({
        ...prevState,
        target: values ? { name: values.name, cityId: values.id } : undefined,
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

  const getOptionLabel = useCallback((option: CityType): Types.City['name'] => option.name!, []);

  const renderInput = useCallback(
    (params): JSX.Element => <TextFieldStyled {...params} label="לאן לשלוח?" />,
    [],
  );

  if (loading) {
    return null;
  }

  return (
    <>
      <Autocomplete
        fullWidth
        selectOnFocus
        value={target}
        options={data?.cities!}
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
