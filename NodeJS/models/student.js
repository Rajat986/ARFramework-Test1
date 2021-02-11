const mongoose=require('mongoose');

var Student=mongoose.model('Student' , {
    name:{type:String, required:true},
    student_emailID:{type:String, required:true},
    USN:{type:String},
    repoID:{type:String, required: true}
});
module.exports={Student};