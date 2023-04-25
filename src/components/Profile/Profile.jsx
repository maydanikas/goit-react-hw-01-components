import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ username, tag, stats, location, avatar }) => {
  const userStates = [
    {
      label: 'followers',
      quantity: stats.followers,
    },
    {
      label: 'views',
      quantity: stats.views,
    },
    {
      label: 'likes',
      quantity: stats.likes,
    },
  ];
  return (
    <div className={css.profile}>
      <div className="description">
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        {userStates.map(({ label, quantity }) => (
          <li key={label} className={css.statItem}>
            <span className={css.label}>{label}</span>
            <span className={css.quantity}>{quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
  location: PropTypes.string,
  avatar: PropTypes.string,
};
