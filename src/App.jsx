import Container from './components/Container';

import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

function App() {
  return (
    <>
      <Container bgColor={'#e7ecf2'}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>
      <Container bgColor={'#3c89e7'}>
        <Statistics title="Upload stats" stats={statisticalData} />;
      </Container>
      <Container bgColor={'#f1eeb8'}>
        <FriendList friends={friends} />,
      </Container>
      <Container bgColor={'#92e986'}>
        <TransactionHistory items={transactions} />
      </Container>
    </>
  );
}

export default App;
