import { Router } from 'express'

import main from './main'
import thing from './thing'
import lead from './lead'
import auth from './auth'

export default () => {
  const api = Router()
  api.use('/', main())
  api.use('/auth', auth())
  api.use('/thing', thing())
  api.use('/lead', lead())
  return api
}
