import mongoose from 'mongoose';
import {connectionString} from '../credentials.js';
const { Schema } = mongoose;

mongoose.connect(connectionString, {
    dbName: 'sccprojects',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
    console.log('Mongoose connected.');
  });

  const coffeeMachineSchema = new Schema({
    name: { type: String, required: true },
    manufacturer: String,
    price: Number,
    feature: Array
   });

   export const Machine = mongoose.model('Machine', coffeeMachineSchema);