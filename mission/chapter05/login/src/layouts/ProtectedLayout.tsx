import{useAuth} from"../context/AuthContext";
import{Navigate, Outlet, useLocation}from"react-router-dom";

const ProtectedLayout= ()=>{
    const {accessToken}=useAuth();
    const location = useLocation();
    if(!accessToken){
        return <Navigate to={"/login"}state={{location}} replace/> // 로그인 페이지로 이동
    }

    
        return(
            <Outlet/>
        )
}
export default ProtectedLayout;