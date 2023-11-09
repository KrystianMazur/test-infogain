import { useMemo } from 'react'
import PropTypes from 'prop-types'
import { computeRewardPoints } from '../../utils/computeRewardPoints'
import styles from './TransactionItem.module.css'

export const TransactionItem = (props) => {
  const { transaction } = props

  const rewardPoints = useMemo(
    () => computeRewardPoints(transaction.amount),
    [transaction.amount]
  )

  return (
    <li className={styles.item}>
      <span>{transaction.amount}</span>
      <span>{rewardPoints}</span>
    </li>
  )
}

TransactionItem.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired
  }),
}
