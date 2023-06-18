import { PostHeader } from './PostHeader'

import { PostContainer, PostSectionContainer } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostHeader />

      <PostSectionContainer>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
          velit suscipit, amet ducimus, minima ipsum incidunt assumenda porro
          autem fugit facere et repudiandae est aut adipisci aspernatur hic non
          ullam?
        </p>

        <h2>Dynamic typing</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
          velit suscipit, amet ducimus, minima ipsum incidunt assumenda porro
          autem fugit facere et repudiandae est aut adipisci aspernatur hic non
          ullam?
        </p>
      </PostSectionContainer>
    </PostContainer>
  )
}
