import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from './FriendsList.module.css';
export const FriendList = ({ friends }) => {
  // console.log(FriendListItem);
  //
  return (
    <ul className={css.friendList}>
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
