module.exports = (api) => async (req, res, next) => {
    const id = req.params.id;

    const item = await api.getById(id);
    if (item) {
        res.locals.item = item;
        next();
    } else {
        res.status(404).json({ message: `Item ${id} not found` });
    }
};