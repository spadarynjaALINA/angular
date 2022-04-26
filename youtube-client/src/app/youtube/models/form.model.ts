export interface IAdminForm {
  id: string;
  formControlName: string;
  messageError: {
    minLength?: string;
    maxLength?: string;
    required?: string;
    pattern?: string;
  };
}
