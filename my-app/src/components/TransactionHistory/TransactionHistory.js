import s from './TransactionHistory.module.css'
const Transaction = ({items}) => (
<div className = {s.box}>
    <table className = {s.transaction}>
         <thead className = {s.head}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
        {items.map(item => (
            <tbody key={item.id} >
            <tr className = {s.line}>
              <td className = {s.item}>{item.type}</td>
              <td className = {s.item}>{item.amount}</td>
              <td className = {s.item}>{item.currency}</td>
            </tr>
          </tbody>
            
        ))}

    </table>
    </div>
)
export default Transaction;