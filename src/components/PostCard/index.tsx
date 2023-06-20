import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { PostCardContainer, PostCardExcerpt, PostCardHeader } from './styles'
import { dateDistanceFromNowFormatter } from '../../utils/formatter'

interface Post {
  url: string
  issueNumber: number
  title: string
  excerpt: string
  createdAt: string
}

interface PostCardProps {
  issue: Post
}

export function PostCard({
  issue: { title, issueNumber, excerpt, createdAt },
}: PostCardProps) {
  const formattedDate = dateDistanceFromNowFormatter(new Date(createdAt))

  return (
    <PostCardContainer href={`/post/${issueNumber}`}>
      <PostCardHeader>
        <h1>{title}</h1>
        <time>{formattedDate}</time>
      </PostCardHeader>

      <PostCardExcerpt>
        <ReactMarkdown components={{ p: 'div' }}>{excerpt}</ReactMarkdown>
      </PostCardExcerpt>
    </PostCardContainer>
  )
}
