const express=require("express")
const {NoteModel}=require("../model/Nft.model")
const noteRouter=express.Router()

noteRouter.get("/", async (req, res) => {
    const nftData = await NoteModel.find()
    res.send(nftData)
})

noteRouter.post("/",async (req,res)=>{
    try{
        const payload = req.body
        const note = new NoteModel(payload)
        await note.save()
        res.send({ "msg": "Nft Created" })

    }catch(err){
        res.send({ "msg": "cannot register nft", "error": err.message })
    } 
})
noteRouter.get("/:Id", async (req, res) => {
    const ID = req.params.Id 
    try {
        const nft =  await NoteModel.find({ _id: ID })
        res.send(nft)
    } catch(err) {
        res.send({ "msg": "cannot get all the data", "error": err.message })
    }
})

noteRouter.patch("/:Id",async(req,res)=>{
    const ID = req.params.Id 
    const payload=req.body
    try{
        await NoteModel.findByIdAndUpdate({_id:ID},payload)
        res.send({"msg":"nft has been updated"})
    }catch(err){
        res.send({ "msg": "cannot modify", "error": err.message })
    }
})
noteRouter.delete("/:Id",async(req,res)=>{
    const ID = req.params.Id 
    try{
        await NoteModel.findByIdAndDelete({_id:ID})
        res.send({"msg":"nft has been deleted"})

    }catch(err){
        res.send({ "msg": "cannot delete", "error": err.message })
    }
})



module.exports={
    noteRouter
}
