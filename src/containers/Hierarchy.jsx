import styled from 'styled-components';

// this is some kind of core, reusable component
const Text = styled.span`
  font-weight: bold;
  color: lightgreen;
`;

const Card = styled.div`
  color: #fff;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  &:hover > ${Text} {
    color: orange;
    &:hover {
      font-size: 24px;
    }
  }
`;

const CardTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
`;

const CardImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 75px;
`;

const NotFoundCard = styled.div`
  color: #fff;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  > h4 {
    font-size: 18px;
    font-weight: bold;
  }

  > img {
    width: 150px;
    height: 150px;
    border-radius: 75px;
  }

  &:hover ${Text} {
    color: lightblue;
  }
`;

const CardButton = styled.button`
  height: 40px;
  border: none;
  font-size: 18px;
  margin-top: 24px;
  padding: 8px 40px;
  font-weight: bold;
  color: var(--white);
  border-radius: 20px;
  text-decoration: none;
  ${Card} & {
    background-color: #7300ff;
  }

  ${NotFoundCard} & {
    background-color: orange;
  }
`;

function Hierarchy() {
  return (
    <>
      <div style={{ width: 400, textAlign: 'center' }}>
        <Text>This is a core Text component</Text>
      </div>
      <Card>
        <CardImage src="https://dogtowndogtraining.com/wp-content/uploads/2012/06/300x300-03.jpg" alt="card" />
        <CardTitle>This is a card</CardTitle>
        <Text>This color changes on card hover</Text>
        <CardButton>I'm a button</CardButton>
      </Card>
      <NotFoundCard>
        <img src="https://memegenerator.net/img/images/300x300/15060710.jpg" alt="doggo" />
        <h4>Not found</h4>
        <Text>This content could not be loaded</Text>
        <CardButton as="a" href="https://www.google.com" target="_blank">
          I can also be a anchor tag
        </CardButton>
      </NotFoundCard>
    </>
  )
}

export default Hierarchy;