import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { LOCAL_STORAGE_KEY } from "../constants/key";

const GoogleLoginRedirectPage = () => {


    const{setItem:setAccessToken} = useLocalStorage(LOCAL_STORAGE_KEY.accessToken,);
    const{setItem:setRefreshToken} = useLocalStorage(LOCAL_STORAGE_KEY.refreshToken,);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const accessToken = urlParams.get(LOCAL_STORAGE_KEY.accessToken);
        const refreshToken = urlParams.get(LOCAL_STORAGE_KEY.refreshToken);

        if (accessToken) { 
            setAccessToken(accessToken);
            if (refreshToken) {
                setRefreshToken(refreshToken);
            }
        window.location.href = "/my";
}
},[setAccessToken,setRefreshToken]);

    return (

        <div>
           
        </div>
    )
}

    export default GoogleLoginRedirectPage;