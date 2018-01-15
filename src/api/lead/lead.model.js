import model from '../../model'
import File from './file.model'
import checkit from 'checkit'

const Lead = model.extend({
  tableName: 'leads',
  hasTimestamps: ['createdAt', 'updatedAt'],
  initialize: function () {
    this.on('saving', this.validateSave)
  },
  validateSave: function () {
    return checkit(this.rules).run(this.attributes)
  },
  files: function () {
    return this.hasMany(File, 'userId')
  },
  rules: {
    name: ['required', 'string', 'maxLength:100'],
    email: ['required', 'string', 'maxLength:100'],
    pan: ['required', 'string', 'maxLength:100']
  }
})

module.exports = Lead
