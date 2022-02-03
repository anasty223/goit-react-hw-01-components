import defaultImage from './default.jpg';
import s from './Profile.module.css';
import PropTypes from 'prop-types';

function Profile({avatar=defaultImage, username, tag, location, stats}) {
    return <div className={s.Profile}  key={username}>
  <div className={s.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={s.avatar}
    />
        <p className={s.name}>{username}Petra Marica</p>
        <p className={s.tag}>{tag} @pmarica</p>
     <p className={s.location}>{location} Salvador, Brasil</p>
  </div>

<ul className={s.stats}>
    <li className={s.statsItem}>
    <span className={s.label}>Followers</span>
    <span className={s.quantity}>{stats.followers}</span>
    </li>
    <li className={s.statsItem}>
      <span className={s.label}>Views</span>
      <span className={s.quantity}>{stats.views}</span>
    </li>
    <li className={s.statsItem}>
      <span className={s.label}>Likes</span>
      <span className={s.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
}

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
   tag:PropTypes.string.isRequired,
location:PropTypes.string.isRequired,
// stats:PropTypes.node,
}

// username — имя пользователя
// tag — тег в социальной сети без @
// location — город и страна
// avatar — ссылка на изображение
// stats — объект с информацией об активности

// followers, views, likes