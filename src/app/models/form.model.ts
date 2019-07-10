import { Field } from './field.model';

export interface Form {
  id?: string;
  name: string;
  submissions: any[];
  fields?: Field[];
}