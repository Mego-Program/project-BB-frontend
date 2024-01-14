import axios from "axios";
import {api , token} from "../../api/posts";

const myToken = token
const jsonUrlDataBoard = `${api}/board/`;
const headers = {
  'Authorization': myToken,
  "Content-Type": "application/json; charset=utf-8",
};

// Read!
async function dataStartPage(idBoard) {
  const response = await axios.get(jsonUrlDataBoard + idBoard + "/read",
   {headers});
  return response.data;
}

//  Update
async function updateData(idBoard , theTitle, theDesc) {
  const response = await axios.patch(jsonUrlDataBoard + idBoard + "/update",
  { name: theTitle,
    description: theDesc,},
   {headers})
   return response.data
}


export { dataStartPage , updateData };