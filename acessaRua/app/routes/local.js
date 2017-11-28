module.exports = function(app) {
    var controller = app.controllers.locais;
    app.post('/locais', controller.create);
    app.get('/locais', controller.find_all);
    app.get('/locais/:id', controller.find_one);
    app.put('/locais/:id', controller.update_one);
    app.delete('/locais/:id', controller.delete_one);
    return app;
};