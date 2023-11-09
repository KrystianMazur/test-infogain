import { TransactionItem } from '../TransactionItem'
import styles from './TransactionList.module.css'
import { useTransactionsQuery } from '../../hooks/useTransactionsQuery'
import { Spinner } from '../Spinner'

export const TransactionList = () => {
  const { loading, data, error } = useTransactionsQuery()

  if (loading) return <Spinner />
  if (!data) return <div>NO DATA</div>
  if (error) return <div>ERROR</div>

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <span>Amount</span>
        <span>Points</span>
      </header>
      <ul className={styles.list}>
        {data.transactions.map((transaction) =>
          <TransactionItem key={transaction.id} transaction={transaction} />
        )}
      </ul>
    </section>
  )
}
