import * as yup from 'yup';

export const experienceValidationSchema = yup.object().shape({
  title: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().nullable(),
  company_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
