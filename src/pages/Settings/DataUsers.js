import axios from "axios";

const myToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ijc3MGRuNzcwQGdtYWlsLmNvbSIsInRpbWVzdGFtcCI6MTcwMzA2MzAxMzQ3MSwiaWF0IjoxNzAzMDYzMDEzLCJleHAiOjg2NTcwMzA2MzAxM30.AI1aNemkNW6m8kb18smfk7gKssP-KHi6cYP37Sy2jis`
const urlGeneral = `${import.meta.env.VITE_SERVER_URL}/`
const urlUsers = urlGeneral + `users/`
const urlBoard = urlGeneral + `board/`


async function dataUsersIn (idBoard) {
    const response = await axios.post(urlUsers + "in",
       { "boardID": idBoard },
       {headers: { 'authorization': myToken }});
    return response.data.result
}

async function dataUsersEx (idBoard) {
  const response = await axios.post(urlUsers + "ex",
     { "boardID": idBoard },
     {headers: { 'authorization': myToken }});
  return response.data.result
}

async function usersAdd ( idBoard , idUser ) {
   const response = await axios.patch( urlBoard + idBoard + '/update/users/add',
      { "userId": idUser },
      {headers: { 'authorization': myToken }});
   console.log("Data updated successfully:", response.data.id);
 }

 async function usersDelete ( idBoard , idUser ) {
   const response = await axios.patch( urlBoard + idBoard + '/update/users/remove',
      { "userId": idUser },
      {headers: { 'authorization': myToken }});
   console.log("Data updated successfully:", response.data.id);
 }

export { dataUsersIn , dataUsersEx , usersAdd , usersDelete }