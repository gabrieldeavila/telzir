import * as yup from "yup";

const simulation = yup.object({
  ddd_from: yup
    .string()
    .typeError("string")
    .required("required"),
  ddd_to: yup
    .string()
    .typeError("string")
    .required("required"),
  call_time: yup
    .number()
    .typeError("number")
    .min(0, "min_zero")
    .required("required"),
  choose_plan: yup
    .string()
    .typeError("string")
    .required("required"),
});

const schemas = {
  simulation,
};

export default schemas;
