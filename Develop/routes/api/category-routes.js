const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    // find all categories
    try {
        Category.findAll({
            include: Product
        }).then(categories => {
            res.json(categories);
        });
    } catch (err) {
        res.status(500).json({ message: 'Error' });
    }
});

router.get('/:id', (req, res) => {
    // find one category by its `id` value
    try {
        Category.findByPk(req.params.id, {
            include: Product
        }).then(category => {
            res.json(category);
        });
    } catch (err) {
        res.status(500).json({ message: 'Error' });
    }
});

router.post('/', (req, res) => {
    // create a new category
    try {
        Category.create({
            category_name: req.body.category_name
        }).then(category => {
            res.json(category);
        })
    } catch (err) {
        res.status(500).json({ message: 'Error' });
    }
});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
    try {
        Category.update(
            {
                category_name: req.body.category_name
            },
            {
                where: {
                    id: req.params.id
                }
            }).then(category => {
                res.json(category);
            })
    } catch (err) {
        res.status(500).json({ message: 'Error' });
    }
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    try {
        Category.destroy({
            where: {
                id: req.params.id
            }
        }).then(category => {
            res.json(category);
        });
    } catch (err) {
        res.status(500).json({ message: 'Error' });
    }
});


module.exports = router;