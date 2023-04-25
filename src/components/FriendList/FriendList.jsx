import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
export const FriendList = ({ friends }) => {
  // console.log(FriendListItem);
  //
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        const { avatar, name, isOnline, id } = friend;
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
