const router = require('express').Router();

const Inmueble = require('../../models/inmueble.model');

router.get('/', (req, res) => {
    res.send('Obtención de los inmuebles');
});

router.post('/', (req, res) => {
    res.send('Creación de un inmueble');
});

router.put('/:inmuebleId', (req, res) => {
    const { inmuebleId } = req.params;

    res.send('Actualización del inmueble con ID ' + inmuebleId);
});

router.delete('/:inmuebleId', (req, res) => {
    const { inmuebleId } = req.params;

    res.send('Borrado del inmueble con ID ' + inmuebleId);
});

module.exports = router;