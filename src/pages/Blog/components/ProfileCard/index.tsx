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

type UserProfile = {
  profileUrl: string
  avatarUrl: string
  userName: string
  name: string
  biography: string
  followers: number
  company: string
}

interface ProfileCardProps {
  userProfile: UserProfile
}

export function ProfileCard({ userProfile }: ProfileCardProps) {
  if (userProfile.userName === undefined) {
    return (
      <ProfileCardContainer>
        <span>Carregando</span>
      </ProfileCardContainer>
    )
  }

  return (
    <ProfileCardContainer>
      <ProfileCardContent>
        <img src={userProfile.avatarUrl} alt="Profile Image" />
        <ProfileInfo>
          <div>
            <ProfileInfoHeader>
              <h1>{userProfile.name}</h1>

              <GitHubLink href={userProfile.profileUrl}>
                GITHUB
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </GitHubLink>
            </ProfileInfoHeader>

            <Biography>{userProfile.biography}</Biography>
          </div>

          <IconsContainer>
            <IconsWithDescription
              iconDescription={userProfile.userName}
              icon={faBuilding}
            />
            <IconsWithDescription
              iconDescription={userProfile.company}
              icon={faBuilding}
            />
            <IconsWithDescription
              iconDescription={`${userProfile.followers} seguidores`}
              icon={faUserGroup}
            />
          </IconsContainer>
        </ProfileInfo>
      </ProfileCardContent>
    </ProfileCardContainer>
  )
}
