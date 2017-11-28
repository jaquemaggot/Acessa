var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var mongoose = require('mongoose');
module.exports = function() {
    var UsuarioLogin = mongoose.model('UsuarioLogin');

    var strategy = new GoogleStrategy({
        clientID : '77907340371-bar0rcjinilvug9peei5e5ol57l3tumn.apps.googleusercontent.com',
        clientSecret : 'WrPj6dK7CHeL_4JytLvE8e_W',
        callbackURL : 'http://localhost:3000/auth/google/callback',
        scope : 'profile email' /*acrescentando*/
    },
        function(accessToken, refreshToken, profile, done){
            var userEmail = '';
            if(profile.emails && profile.emails.length > 0){
                userEmail = profile.emails[0].value
            }
            UsuarioLogin.findOrCreate(
                {login : profile.id},
                {nome: profile.displayName},
                {email: userEmail},
                function(erro, usuario){
                    if(erro){
                        console.log(erro);
                        return done(erro);
                    }
                    return done(null /*sem erros */, usuario);
                }
            );
        }
    );
    passport.use(strategy);
    //Serializa no cookie apenas o _id do usuário
    passport.serializeUser(function(usuario, pronto){
        pronto(null,usuario._id);
    });
    passport.deserializeUser(function(id,pronto){
        UsuarioLogin.findById(id).exec().then(
            function(usuario){
                pronto(null, usuario);
            }
        )
    });
}