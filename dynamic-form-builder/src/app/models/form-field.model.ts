

export interface FormField {
  type: string;
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean; 
  options?: { label: string; value: string }[];
}

