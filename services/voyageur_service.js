import VoyageurModel from "../models/voyageur_model.js";

export async function getAllVoyageurs(){
    return await VoyageurModel.find();
}

export async function getVoyageurById(id){
    return await VoyageurModel.findById(id);
}

export async function createVoyageur(voyageur){
    return await VoyageurModel.create(voyageur);
}

export async function updateVoyageur(id, voyageur){
    return await VoyageurModel.findByIdAndUpdate(id, voyageur, {new: true});
}

export async function deleteVoyageur(id){
    return await VoyageurModel.findByIdAndDelete(id);
}

