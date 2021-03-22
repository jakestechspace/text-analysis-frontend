export const SentimentText = ({ text, sentiment }) => {
  return (
    <>
      <p className="text">{text}</p>
      <span>is</span>
      <p className="sentiment">{sentiment}</p>
    </>
  )
}
