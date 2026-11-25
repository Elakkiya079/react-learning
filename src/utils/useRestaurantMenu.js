import { useEffect,useState } from "react"
import { MENU_API } from "./constants";
const restaurantMenu = (resId) =>{
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[resId])

    const fetchData = async()=>{
        const targetUrl = MENU_API + resId;
        const data = await fetch(
            "https://corsproxy.io/?key=3fbb2639&url=" + encodeURIComponent(targetUrl)
        );
        const text = await data.text();
        if (!text) {
            console.error("Menu API returned an empty response", data.status);
            return;
        }
        const json = JSON.parse(text);
        //console.log("json----",json)
        setResInfo(json?.data)
    }

    return resInfo;
}

export default restaurantMenu