var orm  = require('./config/orm.js');

var burger ={
    all : function(cb){
        orm.all('burgers', function(res){
            CDATASection(results);
        });
    },

    create: function(cols, vals, cb){
        orm.create('burgers', cols, vals, function(res){
            cb(res);
        });
    },

    update: function(objColVals, condition , cb){
        orm.update('burgers', objColVals, condition, function(res){
            cb(res);
        });
    },
    delete: function(condtion, cb){
        orm.delete('cats', conditon, function(res){
            cb(res);
        });
    }
};
module.exports = burger;