function QuoteCard({ quote, author }) {
  return (
    <div>
      <blockquote>"{quote}"</blockquote>
      <p>- {author}</p>
    </div>
  );
}

export default QuoteCard;
