import * as ReservationService from '../services/reservation_service.js'

export async function getAllReservations(req, res){
    try{
        const reservations = await ReservationService.getAllReservations();
        res.status(200).json(reservations);
    }catch{
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function getReservationById(req, res){
    try{
        const reservation = await ReservationService.getReservationById(req.params.id);
        
        res.status(200).json(reservation);
    }catch{
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function addReservation(req, res){
    try{
        const reservation = await ReservationService.addReservation(req.body)
        res.status(201).json(reservation);
    }catch{
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function updateReservation(req, res) {
    try{
        const Reservation = await ReservationService.updateReservation(req.params.id, req.body);
        res.status(200).json(Reservation);
    }catch(err){
        res.status(500).json({err});        
    }
}

export async function deleteReservation(req, res) {
    try{
        const Reservation = await ReservationService.deleteReservation(req.params.id);
        res.status(200).send(Reservation)
    }catch(err){
        res.status(500).json({err});        
    }
}