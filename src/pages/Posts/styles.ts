import styled from 'styled-components'

export const PostContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const PostSectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.5rem 2rem;

  h2 {
    margin-top: 1.5rem;

    font-size: 1rem;
    font-weight: 400;

    color: ${(props) => props.theme.blue};

    text-align: left;
    text-decoration: underline;
  }
`
