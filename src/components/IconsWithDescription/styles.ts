import styled from 'styled-components'

export const IconsWithDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme['base-subtitle']};
  }

  svg {
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-label']};
  }
`
