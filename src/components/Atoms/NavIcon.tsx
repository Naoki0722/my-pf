import { FontAwesomeIcon } from '　'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
type Props = {}

const NavIcon: React.VFC<Props> = () => {
  return (
    <>
      <a href='mailto:mattu.nao722@gmail.com'>
        <FontAwesomeIcon icon={faEnvelope} className='mr-4 text-4xl nav-icon' />
      </a>
      <a href='https://twitter.com/mattu_da' target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faTwitter} className='text-4xl nav-icon' />
      </a>
    </>
  )
}

export default NavIcon
