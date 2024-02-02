import css from './friendsStyles.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  const element = friends.map(({ avatar, id, name, isOnline }) => (
    <FriendListItem
      key={id}
      id={id}
      isOnline={isOnline}
      name={name}
      avatar={avatar}
    />
  ));
  return <ul className={css.friendList}>{element}</ul>;
}

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