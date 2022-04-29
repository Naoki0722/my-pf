import type { NextApiHandler } from 'next'

const send: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    const sgMail = require('@sendgrid/mail')

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
      to: 'mattu.nao722@gmail.com',
      from: req.body.email,
      subject: 'お問い合わせがあります。',
      text: `${req.body.name}様からHPにお問い合わせがありました。お問い合わせ種別：${req.body.category}下記内容を確認ください。${req.body.content}`,
      html: `${req.body.name}様からHPにお問い合わせがありました。
            <br>お問い合わせ種別：${req.body.category}
            <br>下記内容を確認ください。
            <br>${req.body.content}`,
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
