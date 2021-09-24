const mongoose=require("mongoose");


//create book schema
const BookSchema=mongoose.Schema(
  {
  ISBN:String,
  title:String,
  pubDate:String,
  langauge:String,
  numPage:Number,
  author:[Number],
  publication:[Number],
  category:[String]
  }
);

const BookModel=mongoose.model("books",BookSchema);
module.exports=BookModel;
