export interface FormProps {
  submitText?: string;
  schema: "simulation";
  onSubmit: (values: any) => void;
  children: JSX.Element[];
}

export interface ButtonProps {
  submit: boolean;
}

export interface LabelProps {
  show: boolean;
  avoidLabelFocus: boolean;
}

export interface SelectProps {
  avoidSelectLabel?: boolean;
}

export interface CloneProps {
  setValues: (values: any) => void;
  values: [];
  child: React.ReactElement;
  name: any;
  setFieldTouched: (name: string, touched: boolean) => void;
  isSubmitting: boolean;
  errors: [];
}

export interface ValidateProps {
  validate: (fields: object, arg2: object) => any;
}
