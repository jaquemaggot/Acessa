module.exports = function(app) {
    var controller = app.controllers.imagens;
    app.post('/imagens', controller.create);
    app.get('/imagens', controller.find_all);
    app.get('/imagens/:id', controller.find_one);
    app.put('/imagens/:id', controller.update_one);
    app.delete('/imagens/:id', controller.delete_one);
    return app;
};