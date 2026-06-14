import styles from './QuoteCard.module.css';

export default function QuoteCard({ arabic, english, source }) {
  return (
    <blockquote className={styles.card}>
      <span className={styles.quoteSymbol}>❝</span>
      {arabic && (
        <p className={styles.arabicQuote}>{arabic}</p>
      )}
      <p className={styles.englishQuote}>&ldquo;{english}&rdquo;</p>
      {source && (
        <div className={styles.attribution}>
          <span className={styles.attributionLine} />
          <span className={styles.attributionName}>{source}</span>
        </div>
      )}
    </blockquote>
  );
}
