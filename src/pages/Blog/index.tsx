import { PostCard } from '../../components/PostCard'
import { ProfileCard } from './components/ProfileCard'

import {
  BlogContainer,
  BlogSectionContainer,
  FilterInput,
  PostCardContainer,
} from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <ProfileCard />

      <BlogSectionContainer>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </BlogSectionContainer>

      <FilterInput type="text" placeholder="Buscar conteúdo" />

      <PostCardContainer>
        <PostCard
          title="JavaScript data types and data structures"
          postExcerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor,
        adipisci quibusdam nam quia placeat accusamus magni vitae natus velit
        doloribus delectus non nobis perspiciatis at tempore voluptatem sunt
        amet?"
          publishDate={new Date()}
        />

        <PostCard
          title="JavaScript data types and data structures"
          postExcerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor,
        adipisci quibusdam nam quia placeat accusamus magni vitae natus velit
        doloribus delectus non nobis perspiciatis at tempore voluptatem sunt
        amet?"
          publishDate={new Date()}
        />
      </PostCardContainer>
    </BlogContainer>
  )
}
