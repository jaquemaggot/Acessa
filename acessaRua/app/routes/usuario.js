module.exports = function(app) {
    var controller = app.controllers.usuarios;
    app.post('/usuarios', controller.create);
    app.get('/usuarios', controller.find_all);
    app.get('/usuarios/:id', controller.find_one);
    app.put('/usuarios/:id', controller.update_one);
    app.delete('/usuarios/:id', controller.delete_one);
    return app;
};