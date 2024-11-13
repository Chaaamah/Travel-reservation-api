import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
    destinationId:{
        type: mongoose.Types.ObjectId,
        ref: "Destination"
    },
    voyageurId:{
        type: mongoose.Types.ObjectId,
        ref: "Voyageur"
    },
    dateDebut:{
        type: Date,
        required: true
    },
    dateFin:{
        type: Date,
        required: true
    },
    nombrePersonnes: {
        type: Number,
        required: true
    },
    prixTotal: {
        type: Number,
        required: true
    }
})

reservationSchema.pre('save', async function (next) {
    const destination = await mongoose.model('Destination').findById(this.destinationId);
    if (destination) {
        const stayDuration = (new Date(this.dateFin) - new Date(this.dateDebut)) / (1000 * 60 * 60 * 24);
        this.prixTotal = stayDuration * destination.prixParNuit * this.nombrePersonnes;
    }
    next();
});




const ReservationModel = mongoose.model("Reservation", reservationSchema)

export default ReservationModel;