const params = {
    method: "GET",
    headers: {
        Authorization: "Bearer " + import.meta.env.VITE_APP_STRIP_KEY
    }
};

export const fetchDataFromApi = async (url) => {
   try{
    const res = await fetch(import.meta.env.VITE_APP_URL + url, params); 
    const data = await res.json();
    return data;
   }
     catch (error){
        console.log("error occured ", error)
         return error
     }
};
