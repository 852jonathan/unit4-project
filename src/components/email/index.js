const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email
    this.url = url
    this.fromEmail = 'jonleefswdiunit4project@protonmail.com'
    this.fromName = 'Jonathan Lee - MahaBurger FSWDI'
  }

  async sendEmail() {
    const emailOptions = {
      to: this.to,
      from: {
        email: this.fromEmail,
        name: this.fromName
      },
      templateId: 'd-ca0807824e6b4c08946ecca7c1f9aa44',
      dynamic_template_data: {
        url: this.url
      }
    }

    await sgMail.send(emailOptions).then(() => {}, console.error)
  }
}
