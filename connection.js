require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = "mongodb+srv://eshop:Vhy7UWOcm8Vs1jKB@cluster0.4cg3z.mongodb.net/eshop?retryWrites=true&w=majority";

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})

mongoose.set('strictQuery', true);
