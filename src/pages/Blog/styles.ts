import styled from 'styled-components'

export const BlogContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const BlogSectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 4.5rem;

  h2 {
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
  }
`

export const FilterInput = styled.input`
  width: 100%;
  height: 50px;
  max-height: 50px;

  margin-top: 0.75rem;

  padding: 0.75rem 1rem;
  gap: 0.5rem;

  background: ${(props) => props.theme['base-input']};

  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;

  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.blue};
  }
`

export const PostCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;

  gap: 2rem;
`
