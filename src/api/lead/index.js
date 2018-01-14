import { Router } from 'express'

import controller from './lead.controller'

export default () => {
  let thing = Router()

  thing.get('/', controller.index)
  thing.post('/', controller.create)

  return thing
}
