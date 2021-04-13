import { sanitize } from 'dompurify';

export const FormInput = ({ setText }) => {
  return (
    <textarea
      onChange={(e) => setText(sanitize(e.target.value))}
      rows="8"
    />
  )
}