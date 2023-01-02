import { NextPage } from 'next'
import { useRouter } from 'next/router'

const Article: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  console.log(id)

  return <p>Article: {id}</p>
}

export default Article
