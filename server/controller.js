module.exports = {
  create: (req, res) => {
    const db = req.app.get('db')
    const {name, price, img} = req.body

    db.create_product([name, price, img])
    .then(() => res.sendStatus(200))
    .catch(err => {
      res.status(500).send('Create product did not work')
      console.log(err)
    })
  },

  read: (req, res, next) => {
    const dbInstance = req.app.get('db')

    dbInstance.read_products()
    .then(products => res.status(200).send(products))
    .catch(err => {
      res.status(500).send('Read products did not work')
      console.log(err)
    })
  },

  update: (req, res) => {
    const db = req.app.get('db')
    const {name, price, img} = req.body
    const {id} = req.params

    db.update_product([id, name, price, img])
    .then (() => res.sendStatus(200))
    .catch(err => {
      res.status(500).send('Update did not work')
      console.log(err)
    })
  },

  delete: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params

    db.delete_product(id)
    .then(() => res.sendStatus(200))
    .catch(err => {
      res.status(500).send('delete did not work')
      console.log(err)
    })
  }
}