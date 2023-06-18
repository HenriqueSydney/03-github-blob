import styled from 'styled-components'

export const ProfileCardContainer = styled.header`
  margin-top: -5.5rem;

  width: 100%;
  display: flex;

  padding: 2rem 2rem 2rem 2.5rem;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  background: ${(props) => props.theme['base-profile']};
`

export const ProfileCardContent = styled.div`
  display: flex;

  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;

    border-radius: 8px;

    object-fit: cover;
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 0.5rem;
`
export const ProfileInfoHeader = styled.div`
  display: flex;

  align-items: flex-start;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
  }
`

export const GitHubLink = styled.a`
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

export const Biography = styled.p`
  margin-top: 0.5rem;

  color: ${(props) => props.theme['base-text']};

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const IconsContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 42.75rem) {
    display: none;
  }
`
