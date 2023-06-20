const mongoose=require("mongoose");    

const channelSchema = new mongoose.Schema({
    todo:   {
        type:String,
        required:true,
        trim:true,
    }
});

const ChannelModel=mongoose.model("Channel",channelSchema)

module.exports=ChannelModel
