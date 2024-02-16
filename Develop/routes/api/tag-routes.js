const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// get all tags
router.get('/', (req, res) => {
  try {
    Tag.findAll({
      include: Product,
    }).then(tags => {
      res.json(tags);
    });
  } catch (err) {
    res.status(500).json({ message: 'Error' });
  }
});

// get one tag by its `id` value
router.get('/:id', (req, res) => {
  try {
    Tag.findByPk(req.params.id, {
      include: Product,
    }).then(tag => {
      res.json(tag);
    });
  } catch (err) {
    res.status(500).json({ message: 'Error' });
  }
});

// create a new tag
router.post('/', (req, res) => {
  try {
    Tag.create({
      tag_name: req.body.tag_name
    }).then(tag => {
      res.json(tag);
    })
  } catch (err) {
    res.status(500).json({ message: 'Error' });
  }
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  try {
    Tag.update(
      {
        tag_name: req.body.tag_name
      },
      {
        where: {
          id: req.params.id
        }
      }).then(tag => {
        res.json(tag);
      })
  } catch (err) {
    res.status(500).json({ message: 'Error' })
  }
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  try {
    Tag.destroy({
      where: {
        id: req.params.id
      }
    }).then(tag => {
      res.json(tag);
    })
  } catch (err) {
    res.status(500).json({ message: 'Error' });
  }
});

module.exports = router;
