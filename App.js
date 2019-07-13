const express = require ("express");
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const mongoUrl = 'mongodb+srv://admin:admin@cluster0-ejrqu.mongodb.net/test?retryWrites=true&w=majority';
const connectDB = () =>
    mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
        useCreateIndex: true,
    })
        .then(() => console.log('DB_cONNECTED'))
        .catch(() => console.log('Failed ye!!!!'));

connectDB();

app.use(bodyParser.json()); 
app.use(cors());
app.use(helmet());

const {
    userList,
    getUserById,
    addUser,
    editUser,
    deleteUser,
} = require('./modules/user');

const {
    login,
} = require('./modules/auth');

app.post('/login', login);
app.get('/users', userList);
app.get('/users/:id', getUserById);
app.put('/users/:id', editUser);
app.delete('/users/:id', deleteUser);
app.post('/users', addUser);
  
app.listen(process.env.Port||5000, () => {
    console.log('app running UP!');
});