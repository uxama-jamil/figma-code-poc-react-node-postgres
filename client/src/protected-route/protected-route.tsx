import React from 'react';  
import { Route, Navigate, RouteProps } from 'react-router-dom';  
import { useFormData } from '../context/context';


type ProtectedRouteProps = RouteProps & {  
    element: React.ReactNode; // Changed from 'component'  
};  

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {  
    const {formData} = useFormData();
    const isVerified = formData?.isAuthenticated || formData?.accessToken || false;

    if (!isVerified) {  
        return <Navigate to="/" replace />;  
    }  

    return <>{element}</>; 
};  

export default ProtectedRoute; 