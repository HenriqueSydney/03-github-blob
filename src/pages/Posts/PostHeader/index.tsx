import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

import {
  GoBackAndGitHubLink,
  IconsContainer,
  PostHeaderContainer,
  PostHeaderContent,
  PostHeaderLinks,
} from './styles'

import { IconsWithDescription } from '../../../components/IconsWithDescription'
import { useParams } from 'react-router-dom'
export function PostHeader() {
  const { postId } = useParams()

  console.log(postId)

  return (
    <PostHeaderContainer>
      <PostHeaderContent>
        <PostHeaderLinks>
          <GoBackAndGitHubLink href="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </GoBackAndGitHubLink>

          <GoBackAndGitHubLink href="https://github.com/HenriqueSydney?tab=repositories">
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </GoBackAndGitHubLink>
        </PostHeaderLinks>

        <h1>Cameron Williamson</h1>
      </PostHeaderContent>

      <IconsContainer>
        <IconsWithDescription iconDescription="cameronwll" icon={faBuilding} />
        <IconsWithDescription iconDescription="Há 1 dia" icon={faCalendarDay} />
        <IconsWithDescription
          iconDescription="5 comentários"
          icon={faComment}
        />
      </IconsContainer>
    </PostHeaderContainer>
  )
}
