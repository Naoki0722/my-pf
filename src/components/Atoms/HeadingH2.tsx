type Props = {
  title: string
  subTitle: string
}

const HeadingH2: React.VFC<Props> = ({ title, subTitle }) => {
  return (
    <div className='text-center py-12 sm:py-16'>
      <h2 className='text-4xl mb-4 tracking-widest'>{title}</h2>
      <h3>{subTitle}</h3>
    </div>
  )
}

export default HeadingH2
