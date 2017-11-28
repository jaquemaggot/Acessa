module.exports = function (app) {
    var Local = app.models.Local;
    var controller = {};

    controller.create = function(req, res) {
        //criar
        Local.create(req.body,function(err, local_banco){
            if(err){
                res.status(500).json(err);
            }else{
                res.status(200).send(local_banco);
            }
        });
    };
    //pesquisar todo mundo.
    controller.find_all = function (req, res) {
        //exec executa a função de pesquisa.
        Local.find().populate("usuario").populate("imagem").populate("localizacao").exec().then(
            function (local) {
                res.json(local);     
            },
            function (err) {
                res.status(500).json(err);   
            });
    };
    //
    controller.find_one = function (req, res) {
        Local.findById(req.params.id, function (err, local) {
            if(err){
                res.status(500).json(err);
            }else{
                if(!local){
                    res.json('empty');
                }
                res.json(local);
            };
        });
    };

    controller.update_one = function (req, res) {
        Local.findOneAndUpdate({_id:req.params.id},req.body,{upsert:true},function (err,local) {
            if(!err){
                res.json(local);
            }else{
                res.json('fail');
            }
        });
    };
   
    controller.delete_one = function (req, res) {
        Local.deleteOne({ _id: req.params.id }, function (err) {
            if(err){
               
                res.status(500).json(err);
            }else{
                res.json('ok');
            };
        });
    };
    return controller;
};
