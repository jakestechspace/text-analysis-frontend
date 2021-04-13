import DOMPurify from 'dompurify';

export const FormInput = ({ setText }) => {
  return (
    <textarea
      onChange={(e) => setText(DOMPurify.sanitize(e.target.value))}
      rows="8"
    />
  )
}