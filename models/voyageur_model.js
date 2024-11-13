import mongoose from 'mongoose';

const voyageurSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    telephone:{
        type: String
    }
})

const VoyageurModel = mongoose.model('Voyageur', voyageurSchema);

export default VoyageurModel;