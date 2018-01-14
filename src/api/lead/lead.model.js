import model from '../../model'
<<<<<<< HEAD
import File from './file.model'
=======
>>>>>>> 2c9ec90... cors and capture basic lead details
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
<<<<<<< HEAD
  files: function () {
    return this.hasMany(File, 'userId')
  },
=======
>>>>>>> 2c9ec90... cors and capture basic lead details
  rules: {
    name: ['required', 'string', 'maxLength:100'],
    email: ['required', 'string', 'maxLength:100'],
    pan: ['required', 'string', 'maxLength:100']
  }
})

module.exports = Lead
