import { NextPage } from 'next'
import { client } from '../../libs/client'

type Props<T = string> = {
  body: any
  createdAt: T
  id: T
  publishedAt: T
  revisedAt: T
  title: T
  updatedAt: T
  // example
  // body:"<h2 id=\"h63ad3943f9\">テスト</h2><p>テスト投稿1テスト投稿1テスト投稿1テスト投稿1テスト投稿1テスト投稿1テスト投稿1テスト投稿1<br></p><h2 id=\"h0f9702d4fc\">テスト2</h2><p>テスト投稿1テスト投稿1テスト投稿1テスト投稿1テスト投稿1テスト投稿1テスト投稿1テスト投稿1テスト投稿1テスト投稿1テスト投稿1テスト投稿1テスト投稿1テスト投稿1テスト投稿1テスト投稿1<br></p><h2 id=\"h318e1fc6db\">テスト3</h2><p>テスト投稿1テスト投稿1テスト投稿1テスト投稿1テスト投稿1テスト投稿1テスト投稿1テスト投稿1</p>"
  // createdAt:"2021-04-04T13:39:40.457Z"
  // id:"dzukdxwju"
  // publishedAt:"2021-04-04T13:39:40.457Z"
  // revisedAt:"2021-04-04T13:39:40.457Z"
  // title:"テスト投稿1"
  // updatedAt:"2021-04-04T13:39:40.457Z"
}
const articles = ({ articles }: { articles: Props<String>[] }) => {
  console.log(articles)

  return (
    <>
      {articles.map((article, index) => (
        <div key={index}>
          <h2>{article.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: article.body }} />
        </div>
      ))}
    </>
  )
}

export async function getStaticProps() {
  const { contents } = await client.getList({
    endpoint: 'article',
  })

  return {
    props: { articles: contents }, // will be passed to the page component as props
  }
}

export default articles
