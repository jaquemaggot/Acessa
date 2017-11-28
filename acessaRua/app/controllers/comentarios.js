module.exports = function (app) {
    var Comentario = app.models.Comentario;
    var controller = {};

    controller.create = function(req, res) {

        //criar
        Comentario.create(req.body,function(erro,comentario_banco){
            if(erro){
                res.status(500).json('erro');
            }else{
                res.send(comentario_banco);
            }
        });
    };
    //pesquisar todo mundo.
    controller.find_all = function (req, res) {
        //exec executa a função de pesquisa.
        Comentario.find().populate("imagem").exec().then(
            function (comentario) {
                res.json(comentario);
            },
            function (err) {
                res.status(500).json(err);
            });
    };
    //
    controller.find_one = function (req, res) {

        Comentario.findById(req.params.id, function (err, comentario) {
            if(err){
                res.status(500).json(err);
            }else{
                if(!comentario){
                    res.json('empty');
                }
                res.json(comentario);
            };
        });
    };

    controller.update_one = function (req, res) {

        Comentario.findOneAndUpdate({_id:req.params.id},req.body,{upsert:true},function (err,comentario) {
            if(!err){
                res.json(comentario);
            }else{
                res.json('fail');
            }
        });
    };
    //deletando 
    controller.delete_one = function (req, res) {
        Comentario.deleteOne({ _id: req.params.id }, function (err) {
            if(err){ 
                res.status(500).json(err);
            }else{
                res.json('ok');
            };
        });
    };

    return controller;
};
