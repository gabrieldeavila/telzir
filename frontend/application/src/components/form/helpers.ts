import { CloneProps, FormProps, ValidateProps } from "./interface";
import schemas from "./schema";

/**
 *
 * function to initialize the form
 *
 */

export const handleInitialValues = (children: JSX.Element[]) => {
  let initialValues = {};

  // add "" to all fields as default
  children.forEach((child: any) => {
    // prevents buttons from being added to initialValues
    if (!child.props.name) return;

    initialValues = {
      ...initialValues,
      [child.props.name]: "",
    };
  });

  return initialValues;
};

/**
 *
 * function to validate all fields
 *
 */

export const handleErrors = async (values: {}, props: FormProps) => {
  const { schema } = props;
  const keys = Object.keys(values);
  const validateSchema = schemas[schema];
  let errors = {};

  // promises are used to handle async validation
  let errorsPromise = new Promise((resolve) => {
    // foreach to search for errors
    keys.forEach(async (key, index, array) => {
      // current field name
      let field = values[key as keyof typeof values];

      // search for the schema of the current field
      let validate: ValidateProps =
        validateSchema?.fields[key as keyof typeof values];

      // validate the current field
      let error = await validateField(validate, field, key);

      // if has an error, add it to the errors
      errors = { ...errors, ...error };

      // if the foreach is finished, resolve the promise
      if (index === array.length - 1) {
        resolve(null);
      }
    });
  });

  // await for the promise to resolve
  await errorsPromise;

  // returns the errors
  return errors;
};

const validateField = async (
  validate: ValidateProps,
  field: {},
  key: string
) => {
  let error = {};

  // search for errors
  await validate.validate(field, { abortEarly: false }).catch((err: any) => {
    // if found any errors, add only the last
    err.inner.forEach((e: any) => {
      error = { [key]: e.message };
    });
  });

  return error;
};

export const getChildProps = ({
  setValues,
  setFieldTouched,
  values,
  child,
  name,
  isSubmitting,
  errors,
}: CloneProps) => {
  // if the child is a button
  let button = {
    disabled: isSubmitting,
    type: "submit",
  };

  // if the child is going to receive the values
  let receiveValues = {
    onChange: (e: any) => {
      setFieldTouched(name, true);
      setValues({ ...values, [name]: e.target.value });
    },
    value: values[name] || "",
  };

  // finding the props of the child
  let childProps = child.props.submit ? button : receiveValues;

  return childProps;
};
