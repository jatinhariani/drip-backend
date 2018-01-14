import { Router } from 'express'
import multer from 'multer'

import controller from './lead.controller'

const upload = multer({ dest: 'uploads/' })

export default () => {
  let thing = Router()

  thing.get('/', controller.index)
  thing.post('/', controller.create)
  thing.post('/:id/singleDocument', upload.single('file'), controller.uploadDocument)
  thing.post('/:id/document', upload.array('files', 12), controller.uploadDocument)

  return thing
}
