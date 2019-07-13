const mongoose =require ('mongoose');

const schema = new mongoose.Schema ({
username: {
    type : String,
    require: true,
},
password: {
    type : String,
    require: true,
},
name: String,
salt: {
    type : String,
    require: true,
}
},{ collection: 'users',
timestamps: true,
});

module.exports =mongoose. model ('Users', schema);
