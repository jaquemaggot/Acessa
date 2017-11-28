module.exports = function(app) {
    var controller = app.controllers.comentarios;
    app.post('/comentarios', controller.create);
    app.get('/comentarios', controller.find_all);
    app.get('/comentarios/:id', controller.find_one);
    app.put('/comentarios/:id', controller.update_one);
    app.delete('/comentarios/:id', controller.delete_one);
    return app;
};