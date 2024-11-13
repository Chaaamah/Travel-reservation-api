import * as reservationController from '../controllers/reservation_controller.js'

import express from 'express'

const router = express.Router()

router.route("/").get(reservationController.getAllReservations)
                 .post(reservationController.addReservation)

router.route("/:id").get(reservationController.getReservationById)
                .delete(reservationController.deleteReservation)
                .patch(reservationController.updateReservation)

export default router;
    
