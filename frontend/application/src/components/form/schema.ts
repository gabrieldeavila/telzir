import * as yup from "yup";

const simulation = yup.object({
  ddd_from: yup.string().required(),
  ddd_to: yup.string().required(),
  call_time: yup
    .number()
    .min(0)
    .required(),
  choose_plan: yup.string().required(),
});

const schemas = {
  simulation,
};

export default schemas;
