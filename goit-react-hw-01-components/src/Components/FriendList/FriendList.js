
function  FriendList({friends}) {
    return<ul>
        {friends.map(friend => (
            <li key={friend.id} className="item">
                <span className="status"></span>
                <img className="avatar" src="" alt="User avatar" width="48" />
                <p className="name"></p>
            </li>))}
   
        </ul>
}
export default FriendList;

