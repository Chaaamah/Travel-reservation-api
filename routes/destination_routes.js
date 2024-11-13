import * as destinationController from '../controllers/destination_controller.js'

import express from 'express'

const router = express.Router()

router.route("/").get(destinationController.getAllDestinations)
                 .post(destinationController.addDestination)

router.route("/:id").get(destinationController.getDestinationById)
                .delete(destinationController.deleteDestination)
                .patch(destinationController.updateDestination)

export default router;