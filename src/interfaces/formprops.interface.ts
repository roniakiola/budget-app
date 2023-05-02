import { InputValues } from '../interfaces/inputvalues.interface';

export interface FormProps {
  formName: string;
  onSubmit: (inputData: InputValues) => void;
}
