import logo from './logo.svg';
import './App.css';
import Profile from './Components/Profile/Profile';
import user from '../src/Components/Profile/user.json'

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
    </div>
  );
}

export default App;
