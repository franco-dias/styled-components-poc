import styled from 'styled-components';
import { media, styles, truncate } from '../globals/utils/style';

const { handheld, tablet, desktop } = media;

const Row = styled.div`
  display: flex;
  color: var(--white);
  background: ${({ background }) => background};

  /* h4 { */
    /* ${truncate('100px')} */
  /* } */
`;

const JustifyCenter = styled(Row)`
  justify-content: center;
`;

const RowWithVariables = styled(Row)`
  color: var(--fontColor);
  /* color: ${({ fontColor }) => fontColor}; */
`;

const RowWithMedia = styled(JustifyCenter)`
  h4 {
    color: lightpink;
    ${desktop`
      color: lightblue;
    `}
    ${tablet`
      color: lightgreen;
    `}
    ${handheld`
      color: orange;
    `}
  }
`;

const GreenRow = styled(Row).attrs({
  background: 'lightgreen',
  // $fontSize: 24,
})`
  /* font-size: ${({ $fontSize }) => $fontSize}px; */
  color: #666;
`;

function Extending() {
  return (
    <>
      <Row>
        <h4>
          This is a normal row
        </h4>
      </Row>
      <JustifyCenter>
        <h4>This should be at center</h4>
      </JustifyCenter>
      <RowWithVariables {...styles({ fontColor: 'orange' })}>
        This should be orange
      </RowWithVariables>
      <GreenRow>
        <h4>This row should be green</h4>
      </GreenRow>
      <RowWithMedia>
        <h4>This should change color based on screen size</h4>
      </RowWithMedia>
    </>
  )
}

export default Extending;