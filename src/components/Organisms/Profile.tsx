import { NextPage } from 'next'
import HeadingH2 from '../Atoms/HeadingH2'
import ProfileArea1 from '../Molecules/ProfileArea1'
import ProfileArea2 from '../Molecules/ProfileArea2'

const Profile: NextPage = () => {
  return (
    <div id='profile'>
      <HeadingH2 title='ABOUT' subTitle='私のこと' />
      <ProfileArea1 />
      <ProfileArea2 />
    </div>
  )
}

export default Profile
