type Props = {
  title: string
  subTitle: string
}

const HeadingH2: React.VFC<Props> = ({ title, subTitle }) => {
  return (
    <div className='py-12 text-center sm:py-16'>
      <h2 className='mb-4 text-4xl tracking-widest'>{title}</h2>
      <h3>{subTitle}</h3>
    </div>
  )
}

export default HeadingH2
