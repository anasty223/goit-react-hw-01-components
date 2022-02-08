
import './App.css';
import Profile from './Components/Profile/Profile';
import user from '../src/Components/Profile/user.json';
import data from '../src/Components/Statistics/data.json';
import Statistics from './Components/Statistics/Statistics';
import FriendList from './Components/FriendList/FriendList';
import friends from './Components/FriendList/friends.json';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';
import transactions from './Components/TransactionHistory/transactions.json';

function App() {
  return (
    <div className="App">

  <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      
 <Statistics title="Upload stats" stats={data} />
      
      <FriendList friends={friends} /> 
      <TransactionHistory items={transactions} />
  
 </div>
  );
}

export default App;
