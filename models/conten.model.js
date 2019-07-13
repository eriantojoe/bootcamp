const mongoes =require ('mongoose');
const schema = new mongoes.schema ({
Title : {
    type : String,
    require: true,
},
Body : {
    type : String,
    require: true,
},


},{ collection: 'Contents',
timestamps: true,
});

module.exports =mongoose. model ('Contents', schema);
