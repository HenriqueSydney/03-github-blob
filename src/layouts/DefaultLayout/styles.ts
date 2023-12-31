import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 54rem;
  height: calc(100vh);
  margin: auto;
  margin-bottom: 1rem;

  background: ${(props) => props.theme['base-background']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media (max-width: 70rem) {
    padding: 0 2rem;
  }
`
