import axios from "axios";

const myToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYS5jb20iLCJ0aW1lc3RhbXAiOjE3MDE1OTI1NjA5MjEsImlhdCI6MTcwMTU5MjU2MCwiZXhwIjo4NjU3MDE1OTI1NjB9.4o47zJ1r8215n0j8baBktRYqgMCMPlIBf-iSxRLkpII`
const jsonUrlDataBoard = `${import.meta.env.VITE_SERVER_URL}/board/`;
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
   {headers});
  console.log("Data updated successfully:", response.data);
}


export { dataStartPage , updateData };
