module.exports = function(app) {
    var controller = app.controllers.geolocalizacoes;
    app.post('/geolocalizacoes', controller.create);
    app.get('/geolocalizacoes', controller.find_all);
    app.get('/geolocalizacoes/:id', controller.find_one);
    app.put('/geolocalizacoes/:id', controller.update_one);
    app.delete('/geolocalizacoes/:id', controller.delete_one);
    return app;
};