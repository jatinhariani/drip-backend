import model from '../../model'
import checkit from 'checkit'

const File = model.extend({
  tableName: 'files',
  hasTimestamps: ['createdAt', 'updatedAt'],
  initialize: function () {
    this.on('saving', this.validateSave)
  },
  validateSave: function () {
    return checkit(this.rules).run(this.attributes)
  },
  rules: {
  }
})

module.exports = File
