import styled from 'styled-components'

export const PostCardContainer = styled.a`
  display: flex;
  flex-direction: column;

  max-width: 26rem;

  padding: 2rem;

  background: ${(props) => props.theme['base-post']};

  border-radius: 10px;

  @media (max-width: 70rem) {
    max-width: 54rem;
    width: 100%;
  }
`

export const PostCardHeader = styled.div`
  display: flex;

  align-items: flex-start;
  justify-content: space-between;

  gap: 1rem;

  h1 {
    flex: 1;
    font-size: 1.25rem;
    font-weight: 700;
  }

  time {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
  }
`

export const PostCardExcerpt = styled.div`
  margin-top: 1.25rem;

  color: ${(props) => props.theme['base-text']};

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
