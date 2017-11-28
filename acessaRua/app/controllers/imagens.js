module.exports = function (app) {
    var Imagem = app.models.Imagem;
    var controller = {};

    controller.create = function(req, res) {

        //criar
        Imagem.create(req.body,function(erro,imagem_banco){
            if(erro){
                res.status(500).json(erro);
            }else{
                res.json(imagem_banco);
            }
        });
    };
    //pesquisar todo mundo.
    controller.find_all = function (req, res) {
        //exec executa a função de pesquisa.
        Imagem.find().populate("usuario").exec().then(
            function (imagem) {
                return res.status(200).json(imagem)
            },
            function(err){
                return res.status(500).json(err);
            });
    };
    //
    controller.find_one = function (req, res) {
        Imagem.findById(req.params.id, function (err, imagem) {
            if(err){
                res.status(500).json(err);
            }else{
                if(!imagem){
                    res.json('empty');
                }
                res.json(imagem);
            };
        });
    };

    controller.update_one = function (req, res) {

        Imagem.findOneAndUpdate({_id:req.params.id},req.body,{upsert:true},function (err,imagem) {
            if(!err){
                res.json(imagem);
            }else{
                res.json('fail');
            }
        });
    };
    //deletando 
    controller.delete_one = function (req, res) {
    
        Imagem.deleteOne({ _id: req.params.id }, function (err) {
            if(err){
               
                res.status(500).json(err);
            }else{
                res.json('ok');
            };
        });
    };
    return controller;
};
