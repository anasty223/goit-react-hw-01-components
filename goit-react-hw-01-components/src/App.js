
import './App.css';
import Profile from './Components/Profile/Profile';
import user from '../src/Components/Profile/user.json';
import data from '../src/Components/Statistics/data.json';
import Statistics from './Components/Statistics/Statistics';

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
  
      
    </div>
  );
}

export default App;
