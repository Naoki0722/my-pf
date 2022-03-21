import { FontAwesomeIcon } from '　'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
type Props = {}

const NavIcon: React.VFC<Props> = () => {
  return (
    <>
      <FontAwesomeIcon icon={faEnvelope} className='text-4xl mr-4 nav-icon' />
      <FontAwesomeIcon icon={faTwitter} className='text-4xl nav-icon' />
    </>
  )
}

export default NavIcon
