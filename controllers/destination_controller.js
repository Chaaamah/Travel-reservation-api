import * as DestinationService from '../services/destination_service.js'

export async function getAllDestinations(req, res){
    try{
        const destinations = await DestinationService.getAllDestinations();
        res.status(200).json(destinations);
    }catch(err){
        res.status(500).json({err});
    }
}

export async function getDestinationById(req, res){
    try{
        const destination = await DestinationService.getDestinationById(req.params.id);
        res.status(200).json(destination);
    }catch{
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function addDestination(req, res){
    try{
        const destination = await DestinationService.addDestination(req.body)
        res.status(201).json(destination);
    }catch{
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function updateDestination(req, res) {
    try{
        const Destination = await DestinationService.updateDestination(req.params.id, req.body);
        res.status(200).json(Destination);
    }catch(err){
        res.status(500).json({err});        
    }
}

export async function deleteDestination(req, res) {
    try{
        const Destination = await DestinationService.deleteDestination(req.params.id);
        res.status(200).send(Destination)
    }catch(err){
        res.status(500).json({err});        
    }
}