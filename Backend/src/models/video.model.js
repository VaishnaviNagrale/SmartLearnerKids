// import mongoose from "mongoose";
// import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

// const videoSchema = mongoose.Schema({
//     owner:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//     },
//     videoFile:{
//         type: String, // cloudinary URL
//         required: [true,'Video file is required']
//     },
//     thumbnail:{
//         type: String, // cloudinary URL
//         required: [true,'Thumbnail is required']
//     },
//     title:{
//         type: String,
//         required: [true,'Title is required']
//     },
//     description:{
//         type: String, 
//         required: [true,'Description is required']
//     },
//     duration:{
//         type: Number, // cloudinary URL
//         required: [true,'Duration is required']
//     },
//     views:{
//         type: Number,
//         default: 0
//     },
//     isPublished:{
//         type: Boolean,
//         default: true
//     }
// },{timestamps: true})

// videoSchema.plugin(mongooseAggregatePaginate)

// export const Videos = mongoose.model("Videos",videoSchema)