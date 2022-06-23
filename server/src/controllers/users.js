const api = require('../services/user');

const router = require('express').Router();


router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await api.register(email, password);
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: err.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await api.login(email, password);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: err.message });
    }
});

router.get('/logout', (req, res) => {
    api.logout(req.user.token);
    res.status(204).end();
});

module.exports = router;
