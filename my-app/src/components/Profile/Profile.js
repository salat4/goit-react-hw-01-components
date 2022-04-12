import  s from "./Profile.module.css";
const Profile = props => (
    <div className = {s.profile}>
    <div className = {s.description}>
      <img className={s.avatar} src={props.avatar} alt="User avatar"/>
      <p className={s.name}>{props.username}</p>
      <p className={s.tag}>@{props.tag}</p>
      <p className={s.location}>{props.location}</p>
      </div>

      <ul className={s.stats}>
          <li className={s.item}>
              <span className={s.label} >Followers</span>
            <span className={s.quantity}>{props.stats.followers}</span>  
          </li>
          <li className={s.item}>
          <span className={s.label}>Views</span>
            <span className={s.quantity}>{props.stats.views}</span>  
          </li>
          <li className={s.item}> 
          <span className={s.label}>Likes</span>
            <span className={s.quantity}>{props.stats.likes}</span>  
             
          </li>
      </ul>
      </div>    
  );
  export default Profile ;