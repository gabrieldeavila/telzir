import React from "react";
import { withFormik } from "formik";
import { CloneProps, FormProps } from "./interface";
import _ from "lodash";
import { FormWrapper, InputLabel, InputWrapper } from "./style";
import { useTranslation } from "react-i18next";
import schemas from "./schema";
import { ObjectType } from "typescript";

function Basic({
  errors,
  handleSubmit,
  isSubmitting,
  values,
  setFieldValue,
  setFieldTouched,
  children,
  setValues,
  ...props
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
              {...{ setValues, values, child, name, isSubmitting, errors }}
            />

            {/* when value is not empty, show label like a placeholder */}
            {!child.props.submit && (
              <InputLabel
                show={!_.isEmpty(values[name])}
                avoidLabelFocus={child.props?.avoidSelectLabel}
              >
                {t(`form.${name}`)}
              </InputLabel>
            )}
          </InputWrapper>
        );
      })}
    </FormWrapper>
  );
}

const Clone = ({
  setValues,
  values,
  child,
  name,
  isSubmitting,
  errors,
}: CloneProps) => {
  let button = {
    // disabled: isSubmitting || !_.isEmpty(errors),
    type: "submit",
  };

  let receiveValues = {
    onChange: (e: any) => {
      setValues({ ...values, [name]: e.target.value });
    },
    value: values[name] || "",
  };

  let childProps = child.props.submit ? button : receiveValues;

  return React.cloneElement(child, childProps);
};

const Form = withFormik({
  // adding initial values to the component
  mapPropsToValues: (prop: FormProps) => {
    let initialValues = {};

    let children = prop.children.length > 1 ? prop.children : [prop.children];

    children.forEach((child: any) => {
      if (!child.props.name) return;

      initialValues = {
        ...initialValues,
        [child.props.name]: "",
      };
    });

    return initialValues;
  },

  // fields validation
  async validate(values, props: FormProps) {},

  // submit handler
  handleSubmit(values, { props, setSubmitting }) {
    console.log(values);
    const { schema } = props;
    const keys = Object.keys(values);

    const validateSchema = schemas[schema];
    let teste = validateSchema.validateSync(values);
    console.log(teste);
    setSubmitting(false);
    return;
    setTimeout(() => {}, 400);
  },
})(Basic);

export default Form;
