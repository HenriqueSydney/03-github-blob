import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconsWithDescriptionContainer } from './styles'

interface IconsWithDescriptionProps {
  icon: IconDefinition
  iconDescription: string
}

export function IconsWithDescription({
  icon,
  iconDescription,
}: IconsWithDescriptionProps) {
  return (
    <IconsWithDescriptionContainer>
      <FontAwesomeIcon icon={icon} />
      <span>{iconDescription}</span>
    </IconsWithDescriptionContainer>
  )
}
