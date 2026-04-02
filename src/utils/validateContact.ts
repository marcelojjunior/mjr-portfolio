export type ContactFormState = {
  name: string
  email: string
  message: string
}

export type ContactErrors = Partial<Record<keyof ContactFormState, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContact(values: ContactFormState): ContactErrors {
  const errors: ContactErrors = {}
  if (!values.name.trim()) errors.name = 'required'
  if (!values.email.trim() || !EMAIL_RE.test(values.email.trim())) {
    errors.email = 'invalid'
  }
  if (!values.message.trim()) errors.message = 'required'
  return errors
}
