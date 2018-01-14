import Lead from './lead.model'
<<<<<<< HEAD
import File from './file.model'
import checkit from 'checkit'

exports.index = (req, res) => {
  Lead.findAll({}, {
    withRelated: ['files']
  })
=======
import checkit from 'checkit'

exports.index = (req, res) => {
  Lead.findAll()
>>>>>>> 2c9ec90... cors and capture basic lead details
    .then((leads) => {
      res.json(leads)
    })
}

exports.create = (req, res) => {
  Lead.create(req.body)
    .then((lead) => {
      res.json(lead)
    })
    .catch(checkit.ValidationError, (err) => {
      res.status(422).json(err)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
<<<<<<< HEAD
}

exports.uploadDocument = (req, res) => {
  let file = req.file
  delete file.fieldname
  file.type = req.query.type ? req.query.type : 'other'
  file.userId = req.params.id
  File.create(file)
    .then((file) => {
      res.json(file)
    })
    .catch(checkit.ValidationError, (err) => {
      res.status(422).json(err)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
}
=======
}
>>>>>>> 2c9ec90... cors and capture basic lead details
