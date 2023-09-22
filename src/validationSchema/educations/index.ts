import * as yup from 'yup';

export const educationValidationSchema = yup.object().shape({
  school_name: yup.string().required(),
  degree: yup.string().required(),
  field_of_study: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
