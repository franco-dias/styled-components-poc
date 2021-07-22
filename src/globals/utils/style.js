import { css } from 'styled-components';

const breakpoints = {
  handheld: '767px',
  tablet: '1023px',
  desktop: '1365px',
}

const media = Object
  .keys(breakpoints)
  .reduce(
    (prev, key) => {
      return {
        ...prev,
        [key]: (...props) => css`
          @media(max-width: ${breakpoints[key]}) {
            ${css(...props)}
          }
        `,
      }
    },
    {}
  );

/*
 {
   handheld: props => css`
      @media(max-width: 767px) {
        ${css(...props)}
      }
   `,
    tablet: props => css`
      @media(max-width: 1023px) {
        ${css(...props)}
      }
   `,
    handheld: props => css`
      @media(max-width: 1365px) {
        ${css(...props)}
      }
   `,
 }
*/

const styles = stylesObject => ({
  style: Object.keys(stylesObject).reduce((acc, key) => {
    return {
      ...acc,
      [`--${key}`]: stylesObject[key]
    }
  }, {})
})

const truncate = width => css`
  width: ${width};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export {
  media,
  styles,
  truncate
}