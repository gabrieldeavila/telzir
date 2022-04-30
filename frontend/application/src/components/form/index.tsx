import React from "react";
import { withFormik } from "formik";
import { CloneProps, FormProps, ValidateProps } from "./interface";
import _ from "lodash";
import { FormWrapper, InputError, InputLabel, InputWrapper } from "./style";
import { useTranslation } from "react-i18next";
import schemas from "./schema";
import { ObjectType } from "typescript";
import { toast } from "react-toastify";
import { t } from "i18next";
import { getChildProps, handleErrors, handleInitialValues } from "./helpers";

// prettier-ignore
function Basic({
  errors,
  handleSubmit,
  isSubmitting,
  values,
  setFieldTouched,
  children,
  setValues,
  touched,
}: any) {
  const { t } = useTranslation();
  children = children.length > 1 ? children : [children];

  return (
    <FormWrapper onSubmit={handleSubmit}>
      {children.map((child: any, index: number) => {
        let name = child.props.name;
        return (
          <InputWrapper key={index}>
            <Clone 
              {...{ setValues, setFieldTouched, values, child, name, isSubmitting, errors }}
            />

            {!child.props.submit && (
              <InputLabel
                show={!_.isEmpty(values[name])} //when value is empty, show label like a placeholder
                avoidLabelFocus={child.props?.avoidSelectLabel} //when select label is focused, don't show label
              >
                {t(`form.${name}`)}
              </InputLabel>
            )}

            <InputError>
              {errors[name] && touched[name] && <span>{t(`yup_message.${errors[name]}`)}</span>}
            </InputError>
          </InputWrapper>
        );
      })}
    </FormWrapper>
  );
}

const Clone = ({ ...cloneProps }: CloneProps) => {
  let child = cloneProps.child;
  let childProps = getChildProps(cloneProps);

  return React.cloneElement(child, childProps);
};

const Form = withFormik({
  // adding initial values to the component
  mapPropsToValues: (prop: FormProps) => {
    let initialValues = handleInitialValues(prop.children);

    return initialValues;
  },

  // fields validation
  async validate(values, props: FormProps) {
    let errors = await handleErrors(values, props);
    return errors;
  },

  // submit handler
  async handleSubmit(values, { props, setSubmitting }) {
    setSubmitting(true);
    props.onSubmit(values);
  },
})(Basic);

export default Form;
