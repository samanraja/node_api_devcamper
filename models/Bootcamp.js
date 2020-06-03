const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
   name: {
       type: String,
       required: [true, 'please add a name'],
       unique: true,
       trim: true,
       maxlength: [50, 'Name can not be more than 50 character']
       
   },
   slug: String,
   description: {
    type: String,
    required: [true, 'please add description'],
    maxlength: [500, 'Description can not be more than 500 character']
   },
   website: {
       type: String,
       match: [
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        'Please use a valid URL with HTTP or HTTPS'
       ]
   },
   phone: {
       type: String,
       maxlength: [20, 'phone number can not be longer than 20character']
   },
   email: {
       type: String,
       match: [
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
        'please add a valid email'
       ]
   },
   address: {
       type: String,
       required: [true, 'please add an address']
   },
   location: {
       //GeoJSON Point 
       type: {
        type: String,
        enum: ['Point'],
        required: true
      },
      coordinates: {
        type: [Number],
        required: true,
        index: '2dsphere'
      },
      formattedAddress: String,
      street: String,
      city: String,
      state: String,
      zipcode: String,
      country: String,
   },
   // Array of strings
   type: [String],
   required: true,
   enum: [
       'Web Developement',
       'Mobile Development',
       'Unix',
       'Data Science',
       'Business',
       'Others'
   ],
   averageRating: {
     type: Number,
     min: [1, 'Rating must be at least 1'],
     max: [10, 'Rating must can not be more than 10']
   },
   averageCost: Number,
   photo: {
     type: String,
     default: 'no-photo.jpg'
   },
   housing: {
     type: Boolean,
     default: false
   },
   jobAssistance: {
     type: Boolean,
     default: false
   },
   jobGuarantee: {
     type: Boolean,
     default: false
   },
   acceptGi: {
     type: Boolean,
     default: false
   },
   createdAt: {
     type: Date,
     default: Date.now
   }
 

});