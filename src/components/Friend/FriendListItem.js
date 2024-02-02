import css from './friendsStyles.module.css';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
    const isActive = () => {
      if (isOnline==true) {
        return 'green';
      } else {
        return 'red';
      }
    };
    return (
      <li className={css.item} key={id}>
        <span
          className={css.status}
          style={ isOnline ? {backgroundColor: 'green'} : {backgroundColor: 'red'}
          }
        >
          {isOnline}
        </span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
};

export default FriendListItem;