export const FormInput = ({ setText }) => {
  return (
    <textarea
      onChange={(e) => setText(e.target.value)}
      rows="5"
      cols="33"
    />
  )
}