import './friendsStyles.css'
import PropTypes from 'prop-types';

const isActive = value => {
  if (value.isOnline) {
    return 'green';
  } else {
    return 'red';
  }
};

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(friend => (
      <li className="item" key={friend.id}>
        <span className="status" style={{ backgroundColor: isActive(friend) }}>
          {friend.isOnline}
        </span>
        <img
          className="avatar"
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};

export default FriendList;