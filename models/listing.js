const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");


const listingSchema = new Schema({
    title:{
        type:String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    image:{
        type:String,
        default: "https://www.istockphoto.com/photo/maldives-hotel-beach-resort-on-tropical-island-with-aerial-drone-view-gm1453462931-489427197?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fvilla-image&utm_medium=affiliate&utm_source=unsplash&utm_term=villa+image%3A%3Aad-balancing-template%3Acontrol",
        set: (v) => v===""? "https://www.istockphoto.com/photo/maldives-hotel-beach-resort-on-tropical-island-with-aerial-drone-view-gm1453462931-489427197?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fvilla-image&utm_medium=affiliate&utm_source=unsplash&utm_term=villa+image%3A%3Aad-balancing-template%3Acontrol" : v,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ], 
    owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }

});

listingSchema.post("findOneAndDelete", async(listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;