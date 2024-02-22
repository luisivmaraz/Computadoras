import mongoose from 'mongoose';
mongoose.connect(process.env.CONECTION_STRING_DB)
.then(db => console.log('Successful connection to database'))
.catch(err => console.log(err));
export default mongoose;