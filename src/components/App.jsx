import user from '../constants/user.json';
import { Profile } from './Profile';

export const App = () => {
  // console.log(user);
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};
