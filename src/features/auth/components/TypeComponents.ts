import { type RegisterFormSchema } from "../forms/register";

export type RegisterFormInnerProps = {
    onRegisterSubmit: (data: RegisterFormSchema) => void
};
