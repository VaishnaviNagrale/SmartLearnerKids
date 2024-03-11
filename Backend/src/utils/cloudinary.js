// import {v2 as cloudinary} from 'cloudinary';
// import { response } from 'express';
// import fs from "fs"
          
// cloudinary.config({ 
//   cloud_name: 'dxdylictw', 
//   api_key: '688913548937132', 
//   api_secret: 'UFw1hd78IiCKr3dVIKWBq9YsO4M' 
// });
          
// // cloudinary.config({ 
// //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
// //   api_key: process.env.CLOUDINARY_API_KEY, 
// //   api_secret: process.env.CLOUDINARY_API_SECRET, 
// // });

// const uploadOnCloudinary = async (localFilePath)=>{
//         try {
//             if (localFilePath) {
//                 //upload       
//                 const uploadResult = await cloudinary.uploader.upload(localFilePath,{
//                     resource_type: "auto"
//                 })         
//                 //success
//                 //console.log('File is successfully uploaded on Cloudinary', uploadResult.secure_url);
//                 fs.unlinkSync(localFilePath);
//                 return uploadResult;
//             } else {
//                 return null
//             }
//         } catch (error) {
//             fs.unlinkSync(localFilePath) // remove loaclly saved file as file upload failed
//             console.error('Error uploading to Cloudinary:', error);
//             return null;
//         }
// }

// export {uploadOnCloudinary}