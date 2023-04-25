import PropTypes from 'prop-types';
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
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        {userStates.map(({ label, quantity }) => (
          <li key={label}>
            <span className="label">{label}</span>
            <span className="quantity">{quantity}</span>
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
