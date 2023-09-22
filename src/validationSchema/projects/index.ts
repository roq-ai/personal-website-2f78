import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
