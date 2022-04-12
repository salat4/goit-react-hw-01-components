import s from './FriendListItem.module.css'
const FriendList = ({friends }) => (
<ul className = {s.list}>
    {friends.map(friend =>(<li key = {friend.id} className = {s.item}>
<span className={friend.isOnline ? s.IsOnline:s.IsOffline} >.</span>
   

<img className = {s.image} src ={friend.avatar} width="48"></img>
<p className = {s.name}> {friend.name}</p>
</li>



))}

</ul>


)
  
export default FriendList

  