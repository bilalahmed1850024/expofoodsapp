import React,{useState, useEffect} from "react"
import yelp from "../api/yelp"


export default () => {
    const [result, setResult] = useState([]);
    const [errorMessage,setErrorMessage] = useState("")
  
    const searchApi = async searchTerm => {
      console.log("hi There")
      try {
        const responce = await yelp.get("/search", {
          params: {
            limit: 50,
            term : searchTerm ,
            location: "san jose",
          }
        });
        setResult(responce.data.businesses);
      } catch(err){
          setErrorMessage("Something went Wrong")
      }
    };
    useEffect(()=>{
      searchApi("pasta")
    }, [])
    return [searchApi, result, errorMessage]
}