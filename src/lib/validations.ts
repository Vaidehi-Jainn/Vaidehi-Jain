export type ContactFormState = {
  email: string;
  subject: string;
  message: string;
};

export function validateContactForm(values: ContactFormState) {
  const errors: Partial<Record<keyof ContactFormState, string>> = {};

  if (!values.email.trim()) errors.email = "Email is required";
  else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Enter a valid email";
  if (!values.subject.trim()) errors.subject = "Subject is required";
  if (!values.message.trim()) errors.message = "Message is required";

  return errors;
}
