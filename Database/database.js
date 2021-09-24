const books=[
{
ISBN:"12345Book",
title:"Tesla!!!",
pubDate:"2021--08-05",
langauge:"en",
numPage:250,
author:[1,2],
publication:[1],
category:["tech","space","education"]
}
]
const author=[
{
  id:1,
  name:"vaibhavi",
  books:["12345Book","secretbook"]
},
{
  id:2,
  name:"kajal",
  books:["12345Book"]
}
]
const publication=[
  {
    id:1,
    name:"Nirali",
    books:["12345Book"]
  },
  {
    id:2,
    name:"Nirali2",
    books:[]
  }
]
module.exports={books,author,publication}
