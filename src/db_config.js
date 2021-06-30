import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/json-web-token-3', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{console.log('Conectado a la db')})
.catch((e)=>{console.log(e)});

export default mongoose;