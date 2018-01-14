import Lead from './lead.model'
import checkit from 'checkit'

exports.index = (req, res) => {
  Lead.findAll()
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
}