import * as yup from 'yup';

export const formSchema= yup.object().shape({
  teacherName: yup.string().required(),
  teacherImg: yup.string().url().required(),
  price: yup.number().required().positive().integer(),
  courseName: yup.string().required(),
  url: yup.string().url().required()

});