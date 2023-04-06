import { Container } from './components/Container/Container';
import Profile from './components/Profile/Profile';

import user from './data/user.json';

function App() {
  return (
    <>
      <Container bgColor={'#C0DBEA'}>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>
    </>
  );
}

export default App;
