import styled from 'styled-components'

export const PostHeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: -5.5rem;

  width: 100%;

  padding: 2rem 2rem 2rem 2.5rem;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  background: ${(props) => props.theme['base-profile']};
`

export const PostHeaderContent = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
  }
`
export const PostHeaderLinks = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  margin-bottom: 1.25rem;
`

export const GoBackAndGitHubLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;

  font-size: 0.75rem;
  font-weight: 700;
  color: ${(props) => props.theme.blue};

  @media (max-width: 32.125rem) {
    display: none;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  margin-top: 0.5rem;

  @media (max-width: 42.75rem) {
    display: none;
  }
`
