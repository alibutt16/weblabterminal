var express=require('express');
var mongoose=require('mongoose');
var Schema = mongoose.Schema
mongoose.connect("mongodb+srv://ali:222@cluster0.lry3o.mongodb.net/cluster0?retryWrites=true&w=majority",{ useUnifiedTopology: true, useNewUrlParser: true  })

// Category schema 
const CategorySchema=new Schema({

        title:{
            type:String,
            required:true,
            trim: true
        },
        slug:{
            type:String,
            trim: true
        }, 
      
});
module.exports = CategorySchema;