import Thing from './thing.model'

exports.index = (req, res) => {
  Thing.findAll()
    .then((things) => {
      res.json(things)
    })
}

exports.create = (req, res) => {
  Thing.create(req.body)
    .then((thing) => {
      res.json(thing)
    })
}

exports.findOne = (req, res) => {
  Thing.findById(req.params.id, {
    require: true
  })
    .then((thing) => {
      res.json(thing)
    })
    .catch(Thing.NotFoundError, (err) => {
      res.status(404).json(err)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
}

exports.delete = (req, res) => {
  res.json('test')
}
