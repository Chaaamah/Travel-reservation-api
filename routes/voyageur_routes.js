import * as voyageurController from '../controllers/voyageur_controller.js'

import express from 'express'

const router = express.Router()

router.route("/").get(voyageurController.getAllVoyageurs)
                 .post(voyageurController.addVoyageur)

router.route("/:id").get(voyageurController.getVoyageurById)
                .delete(voyageurController.deleteVoyageur)
                .patch(voyageurController.updateVoyageur)

export default router;