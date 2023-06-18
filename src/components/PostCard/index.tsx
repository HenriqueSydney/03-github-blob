import { PostCardContainer, PostCardExcerpt, PostCardHeader } from './styles'

interface PostCardProps {
  title: string
  publishDate: Date
  postExcerpt: string
}

export function PostCard({ title, publishDate, postExcerpt }: PostCardProps) {
  return (
    <PostCardContainer>
      <PostCardHeader>
        <h1>{title}</h1>
        <time>{publishDate.toDateString()}</time>
      </PostCardHeader>

      <PostCardExcerpt>{postExcerpt}</PostCardExcerpt>
    </PostCardContainer>
  )
}
