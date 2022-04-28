const send = async (req: any, res: any) => {
  // const { email, name, content } = req.body
  // console.log(content)
  if (req.method === 'POST') {
    const sgMail = require('@sendgrid/mail')

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
      to: req.body.email,
      from: 'mattu.nao722@gmail.com',
      subject: 'お問い合わせありがとうございました',
      text: `${req.body.name}様。お問合せを受け付けました。回答をお待ちください。${req.body.content}`,
      html: `${req.body.name}様。お問合せを受け付けました。回答をお待ちください。${req.body.content}`,
    }

    try {
      await sgMail.send(msg)
      res.status(200).send('Message sent successfully.')
    } catch (error: any) {
      console.error(error)
      if (error.response) {
        console.error(error.response.body)
        res.status(400).send('Message not sent.')
      }
    }
  }
}

export default send
