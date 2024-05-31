import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({children}) => {
    const {user,loading}=useAuth();
    const [isAdmin,isAdminLoading]=useAdmin();
    const location=useLocation();


    if (loading || isAdminLoading) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-spinner text-success w-24 h-24"></span>
        </div>
      );
    }
  
    if (user && isAdmin) {
      return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>;
   
};

export default AdminRoute;