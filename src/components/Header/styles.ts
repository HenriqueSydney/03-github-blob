import styled from 'styled-components'

import backgroundCover from '../../assets/cover.svg'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;

  background-image: url(${backgroundCover});
  background-repeat: no-repeat;
  background-size: cover;

  justify-content: center;
  img {
    margin-top: 4rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`
