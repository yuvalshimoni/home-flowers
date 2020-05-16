import React from 'react';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { FlexRowSpaceBetween, ActionButton, FlexColumn, SubTitle } from 'shared/components';
import TextField from '@material-ui/core/TextField';
import { useAppState } from 'shared/hooks';
import { useHistory } from 'react-router-dom';

const FormWrapper = styled(FlexRowSpaceBetween)`
  display: grid;
  grid-gap: 50px;
  align-items: start;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const FieldWrapper = styled(FlexColumn)``;

const SubmitWrapper = styled.div``;

const Error = styled.div`
  height: 35px;
  margin-top: 15px;
  font-size: ${({ theme }) => theme.sizes.small}px;
`;

type FormValues = {
  name: string;
  phone: number;
};

const DetailsForm = (): JSX.Element => {
  const history = useHistory();
  const {
    costumerDetails: { name, phone },
    setCostumerDetails,
  } = useAppState();

  const { control, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      name,
      phone,
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = ({ name, phone }: any): void => {
    setCostumerDetails((state) => ({
      ...state,
      name,
      phone,
    }));
    history.push('./summary');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SubTitle>פרטים ליצירת קשר</SubTitle>
      <FormWrapper>
        <FieldWrapper>
          <Controller
            as={<TextField label="שם מלא" />}
            name="name"
            control={control}
            rules={{ required: 'היי איך נדע איך קוראים לך?' }}
            defaultValue=""
          />
          <Error>{errors.name && errors.name.message}</Error>
        </FieldWrapper>

        <FieldWrapper>
          <Controller
            as={<TextField label="טלפון " />}
            name="phone"
            control={control}
            rules={{
              required: 'בלי טלפון לא נוכל לתאם משלוח..',
              pattern: {
                value: /^0\d([\d]{0,1})([-]{0,1})\d{7}$/,
                message: 'מה זה עוזר הבאלגן הזה?',
              },
            }}
            defaultValue=""
          />
          <Error>{errors.phone && errors.phone.message}</Error>
        </FieldWrapper>

        <SubmitWrapper>
          <ActionButton type="submit">לתשלום</ActionButton>
        </SubmitWrapper>
      </FormWrapper>
    </form>
  );
};

export default DetailsForm;
