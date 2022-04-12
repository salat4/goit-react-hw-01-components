import s from './Statistics.module.css'

const Statistics = ({stats }) => (
  <section className = {s.statistics}>
    <ul className = {s.list}>
      {stats.map(stat => (
        <li className = {s.item}>
       <span key={stat.id}>
       {stat.label}
           </span> 
           <b> </b>
        <span>
            {stat.percentage}%
            </span>
        
        </li>
      ))}
    </ul>
    </section>
  );
  
export default Statistics

  