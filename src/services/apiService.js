import axios from"axios";

export const doApiGet=async(_url)=>{
  try{
    let resp = await axios.get(_url)
    return resp;
  }
catch(err){
  throw err;
}
}
