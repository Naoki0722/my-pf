import { NextPage } from 'next'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '　'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const ReturnButton: NextPage = () => {
  return (
    <AnchorLink href='#top' offset='50' className='flex justify-between items-center mx-4'>
      <div className='fixed right-5 bottom-8 z-20 py-3 px-4 bg-black rounded-[50%] lg:right-24'>
        <FontAwesomeIcon icon={faArrowUp} className='text-3xl text-white' />
      </div>
    </AnchorLink>
  )
}

export default ReturnButton
