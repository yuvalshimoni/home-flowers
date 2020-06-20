import React, { useCallback, useState, useMemo } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useAppState } from 'shared/hooks';
import { TextPrimary } from 'shared/components';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
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

type CityType = {
  city: string;
  name: string;
};

const SelectTarget = (): JSX.Element | null => {
  const { data, loading } = useCitiesQuery();
  const history = useHistory();
  const {
    orderDetails: { city, cityName, dateText },
    setOrderDetails,
  } = useAppState();

  const [inputValue, setInputValue] = useState('');

  const onSelect = useCallback(
    (event, values) => {
      const id = values?.city;
      const name = values?.name;

      setOrderDetails((prevState) => ({
        ...prevState,
        city: id,
        cityName: name,
      }));

      if (!!id) {
        history.push('/details');
      }
    },
    [history, setOrderDetails],
  );

  const handleInputChange = useCallback((event, newInputValue) => {
    setInputValue(newInputValue);
  }, []);

  const getOptionLabel = useCallback(({ name }: CityType): CityType['name'] => name, []);

  const renderInput = useCallback(
    (params): JSX.Element => <TextFieldStyled {...params} label="לאן לשלוח?" />,
    [],
  );

  const options = useMemo<Array<CityType>>(
    () =>
      data?.cities
        ? data.cities.map((city) => ({ city: city!.id, name: city!.name }))
        : [{ city: '', name: '' }],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data?.cities],
  );

  if (loading || !data?.cities) {
    return null;
  }

  return (
    <>
      <Autocomplete
        fullWidth
        selectOnFocus
        options={options}
        inputValue={inputValue}
        onChange={onSelect}
        style={{ width: '100%' }}
        onInputChange={handleInputChange}
        getOptionLabel={getOptionLabel}
        renderInput={renderInput}
        defaultValue={!!city ? { city, name: cityName! } : { city: '', name: '' }}
      />

      <TextWrapper>
        <TextPrimary>{`חלוקה בתאריך ${dateText} בשעות הערב`}</TextPrimary>
      </TextWrapper>
    </>
  );
};

export default SelectTarget;
