import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faArrowUpRightFromSquare,
  faBuilding,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

import { dateDistanceFromNowFormatter } from '../../../utils/formatter'

import { IconsWithDescription } from '../../../components/IconsWithDescription'

import {
  GoBackAndGitHubLink,
  IconsContainer,
  PostHeaderContainer,
  PostHeaderContent,
  PostHeaderLinks,
} from './styles'

type PostType = {
  user: string
  title: string
  createdAt: string
  comments: number
  html_url: string
}

interface PostHeaderProps {
  postInfo: PostType
}

export function PostHeader({ postInfo }: PostHeaderProps) {
  const formattedDate = dateDistanceFromNowFormatter(
    new Date(postInfo.createdAt),
  )

  return (
    <PostHeaderContainer>
      <PostHeaderContent>
        <PostHeaderLinks>
          <GoBackAndGitHubLink href="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </GoBackAndGitHubLink>

          <GoBackAndGitHubLink href={postInfo.html_url} target="_blank">
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </GoBackAndGitHubLink>
        </PostHeaderLinks>

        <h1>{postInfo.title}</h1>
      </PostHeaderContent>

      <IconsContainer>
        <IconsWithDescription
          iconDescription={postInfo.user}
          icon={faBuilding}
        />
        <IconsWithDescription
          iconDescription={formattedDate}
          icon={faCalendarDay}
        />
        <IconsWithDescription
          iconDescription={`${postInfo.comments} comentários`}
          icon={faComment}
        />
      </IconsContainer>
    </PostHeaderContainer>
  )
}
