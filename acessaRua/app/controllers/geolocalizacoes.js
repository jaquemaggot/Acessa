module.exports = function (app) {
    var Geolocalizacao = app.models.Geolocalizacao;
    var controller = {};

    controller.create = function(req, res) {

        //criar
        Geolocalizacao.create(req.body,function(erro,geolocalizacao_banco){
            if(erro){
                res.status(500).json('erro');
            }else{
                res.send(geolocalizacao_banco);
            }
        });
    };
    //pesquisar todo mundo.
    controller.find_all = function (req, res) {
        //exec executa a função de pesquisa.
        Geolocalizacao.find().exec().then(
            function (geolocalizacao) {
                res.json(geolocalizacao);
            },
            function (err) {
                res.status(500).json(err);
            });
    };
    //
    controller.find_one = function (req, res) {

        Geolocalizacao.findById(req.params.id, function (err, geolocalizacao) {
            if(err){
                res.status(500).json(err);
            }else{
                if(!geolocalizacao){
                    res.json('empty');
                }
                res.json(geolocalizacao);
            };
        });
    };

    controller.update_one = function (req, res) {

        Geolocalizacao.findOneAndUpdate({_id:req.params.id},req.body,{upsert:true},function (err,geolocalizacao) {
            if(!err){
                res.json(geolocalizacao);
            }else{
                res.json('fail');
            }
        });
    };
    //deletando 
    controller.delete_one = function (req, res) {
    
        Geolocalizacao.deleteOne({ _id: req.params.id }, function (err) {
            if(err){
               
                res.status(500).json(err);
            }else{
                res.json('ok');
            };
        });
    };



    return controller;
};
