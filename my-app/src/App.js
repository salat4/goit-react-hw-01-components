import './App.css';
import user from '../src/data/user.json';
import data from '../src/data/data.json';
import friends from '../src/data/friends.json';
import transactions from '../src/data/transactions.json';
import Statistics from '../src/components/Statistics/Statistics';
import Profile from '../src/components/Profile/Profile';
import FriendList from './components/FriendListItem/FriendListItem';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import './components/Profile/Profile.module.css'

function App() {
  return (
    <> 
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats = {user.stats}
/> 
<Statistics stats={data} />
<FriendList friends={friends} />
<TransactionHistory items={transactions} />;
</>
  );
}

export default App;
