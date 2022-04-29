export interface FormProps {
  submitText?: string;
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
  isSubmitting: boolean;
  errors: [];
}
