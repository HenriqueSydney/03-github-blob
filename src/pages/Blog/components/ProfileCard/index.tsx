import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import { IconsWithDescription } from '../../../../components/IconsWithDescription'

import {
  Biography,
  GitHubLink,
  IconsContainer,
  ProfileCardContainer,
  ProfileCardContent,
  ProfileInfo,
  ProfileInfoHeader,
} from './styles'

import profileImg from '../../../../assets/foto.jpg'

interface ProfileCardProps {
  userName: string
  biography: string
  numberOfFollowers: number
}

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <ProfileCardContent>
        <img src={profileImg} alt="Profile Image" />
        <ProfileInfo>
          <div>
            <ProfileInfoHeader>
              <h1>Cameron Williamson</h1>

              <GitHubLink href="https://github.com/HenriqueSydney?tab=repositories">
                GITHUB
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </GitHubLink>
            </ProfileInfoHeader>

            <Biography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio tenetur, dicta omnis, vitae labore eveniet debitis fuga
              architecto eligendi facilis consectetur tempore, quaerat commodi?
              Quasi illo perspiciatis veniam harum facere?
            </Biography>
          </div>

          <IconsContainer>
            <IconsWithDescription
              iconDescription="cameronwll"
              icon={faBuilding}
            />
            <IconsWithDescription
              iconDescription="Rocketseat"
              icon={faBuilding}
            />
            <IconsWithDescription
              iconDescription="32 seguidores"
              icon={faUserGroup}
            />
          </IconsContainer>
        </ProfileInfo>
      </ProfileCardContent>
    </ProfileCardContainer>
  )
}
