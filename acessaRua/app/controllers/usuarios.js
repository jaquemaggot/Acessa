module.exports = function (app) {
    var Usuario = app.models.Usuario;
    var controller = {};

    controller.create = function(req, res) {
        //criar
        Usuario.create(req.body,function(err,usuario_banco){
            if(err){
                res.status(500).json('erro');
            }else{
                res.send(usuario_banco);
            }
        });
    };
    //pesquisar todo mundo.
    controller.find_all = function (req, res) {
        //exec executa a função de pesquisa.
        Usuario.find().exec().then(
            function (usuario) {
                res.json(usuario);
            },
            function (err) {
                res.status(500).json(err);
            });
    };
    //
    controller.find_one = function (req, res) {
        Usuario.findById(req.params.id, function (err, usuario) {
            if(err){
                res.status(500).json(err);
            }else{
                if(!usuario){
                    res.json('empty');
                }
                res.json(usuario);
            };
        });
    };

    controller.update_one = function (req, res) {

        Usuario.findOneAndUpdate({_id:req.params.id},req.body,{upsert:true},function (err,usuario) {
            if(!err){
                res.json(usuario);
            }else{
                res.json('fail');
            }
        });
    };
    //deletando 
    controller.delete_one = function (req, res) {
    
        Usuario.deleteOne({ _id: req.params.id }, function (err) {
            if(err){
               
                res.status(500).json(err);
            }else{
                res.json('ok');
            };
        });
    };



    return controller;
};
