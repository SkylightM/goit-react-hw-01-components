import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from 'components/Profile/Profile';
import './index.css';
import user from 'user.json';
import Statistics from 'components/Statistics/Statistics';
import data from 'data.json';
import FriendList from 'components/Friend/FriendList';
import friends from 'friends.json';
import TransactionHistory from 'components/Transactions/TransactionHistory';
import transactions from 'transactions.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />;
  </React.StrictMode>
);