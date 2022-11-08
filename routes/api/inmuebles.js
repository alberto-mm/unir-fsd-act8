const router = require('express').Router();

const Inmueble = require('../../models/inmueble.model');

router.get('/', async (req, res) => {
    try {
        const inmuebles = await Inmueble.find();
        res.json(inmuebles);
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.get('/:inmuebleId', async (req, res) => {
    const { inmuebleId } = req.params;

    try {
        const inmueble = await Inmueble.findById(inmuebleId);
        res.json(inmueble);
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const inmueble = await Inmueble.create(req.body);
        res.json(inmueble);
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.put('/:inmuebleId', async (req, res) => {
    const { inmuebleId } = req.params;

    try {
        const inmueble = await Inmueble.findByIdAndUpdate(inmuebleId, req.body, { new: true });
        res.json(inmueble);
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.delete('/:inmuebleId', async (req, res) => {
    const { inmuebleId } = req.params;

    try {
        const inmueble = await Inmueble.findByIdAndDelete(inmuebleId);
        res.json(inmueble);
    } catch (err) {
        res.json({ error: err.message })
    }
});

module.exports = router;