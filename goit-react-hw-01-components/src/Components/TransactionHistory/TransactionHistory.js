import s from './TransactionHistory.module.css'

function TransactionHistory({items}) {
    return <table className={s.transactionHistory}>
  <thead className={s.container}>
    <tr>
      <th className={s.title}>Type</th>
      <th className={s.title}>Amount</th>
      <th className={s.title}>Currency</th>
    </tr>
  </thead>
        
        <tbody>
    {items.map(item => {
          return (
            <tr className={s.row} key={item.id}>
              <td className={s.cell}>{item.type}</td>
              <td className={s.cell}>{item.amount}</td>
              <td className={s.cell}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
 
</table>
}

export default TransactionHistory;