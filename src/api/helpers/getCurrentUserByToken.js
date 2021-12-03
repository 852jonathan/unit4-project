import moment from 'moment'
import { AuthenticityToken } from '@/db/models'

const getCurrentUserByToken = async (req, res, next) => {
  const token = req.session.get('token')

  if (token) {
    const authToken = await AuthenticityToken.findOne({
      where: { token },
      include: AuthenticityToken.User
    })

    if (authToken) {
      const currentDate = moment()
      const expireDate = moment(authToken.createdAt).add(7, 'days')
      if (!currentDate.isAfter(expireDate)) {
        res.currentUser = authToken.User
      }
    }
  }

  if (res.currentUser === undefined) {
    res.currentUser = null
  }

  return next()
}

export default getCurrentUserByToken
