const mongoose=require("mongoose")

const noteSchema=mongoose.Schema({
    
    "name":String,
    "description":String
        
})
const NoteModel=mongoose.model("nftdata",noteSchema)
module.exports={
    NoteModel
}