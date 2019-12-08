const noteroutes = require ('./notes_routes');
module.exports=function(app,db){
    noteroutes(app , db);

};