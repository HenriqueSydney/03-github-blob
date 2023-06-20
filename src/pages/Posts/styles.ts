import styled from 'styled-components'

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
`

export const PostContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const PostSectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.5rem 2rem;

  h3,
  h3 {
    margin-top: 1.5rem;

    color: ${(props) => props.theme.blue};

    text-align: left;
    text-decoration: underline;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
  }

  a {
    font-weight: 700;
    color: ${(props) => props.theme.blue};
  }

  p + p {
    margin-top: 0.5rem;
  }
`
