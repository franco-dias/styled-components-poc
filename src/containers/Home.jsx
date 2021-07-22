import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Link = styled.button`
  height: 40px;
  padding: 8 12px;
  font-size: 18px;
  color: var(--white);
  border: none;
  background-color: transparent;
`;

function Home({ history }) {
  return (
    <Container>
      <img src="https://styled-components.com/nav-logo.png" alt="styled-components" />
      <Link onClick={() => history.push('/extending')}>Extending</Link>
      <Link onClick={() => history.push('/hierarchy')}>Hierarchy</Link>
    </Container>
  )
}

export default Home;