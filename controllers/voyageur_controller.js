import * as VoyageurService from '../services/voyageur_service.js'

export async function getAllVoyageurs(req, res){
    try{
        const voyageurs = await VoyageurService.getAllVoyageurs();
        res.status(200).json(voyageurs);
    }catch{
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function getVoyageurById(req, res){
    try{
        const voyageur = await VoyageurService.getVoyageurById(req.params.id);
        res.status(200).json(voyageur);
    }catch{
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function addVoyageur(req, res){
    try{
        const voyageur = await VoyageurService.addVoyageur(req.body)
        res.status(201).json(voyageur);
    }catch{
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function updateVoyageur(req, res) {
    try{
        const Voyageur = await VoyageurService.updateVoyageur(req.params.id, req.body);
        res.status(200).json(Voyageur);
    }catch(err){
        res.status(500).json({err});        
    }
}

export async function deleteVoyageur(req, res) {
    try{
        const Voyageur = await VoyageurService.deleteVoyageur(req.params.id);
        res.status(200).send(Voyageur)
    }catch(err){
        res.status(500).json({err});        
    }
}