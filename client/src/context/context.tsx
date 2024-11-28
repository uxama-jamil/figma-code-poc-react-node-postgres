// FormContext.tsx  
import React, { createContext, useContext, useState, ReactNode } from 'react';  

// Define the shape of the form data  
// interface FormData {  
//     firstName: string;  
//     lastName: string;  
//     email: string;  
//     phoneNumber: string;  
//     specialisation: string;  
//     registrationNo: string;  
//     password?: string;
// }  

// Create a context  
const FormContext = createContext<{ formData: any; setFormData: React.Dispatch<React.SetStateAction<any>> | null }>({  
    formData: {  
        firstName: '',  
        lastName: '',  
        email: '',  
        phoneNumber: '',  
        specialisation: '',  
        registrationNo: '',  
        password: '',
    },  
    setFormData: null,  
});  

// Create a provider component  
export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {  
    const [formData, setFormData] = useState<any>({  
        firstName: '',  
        lastName: '',  
        email: '',  
        phoneNumber: '',  
        specialisation: '',  
        registrationNo: '',
        password: '',
    });  

    return (  
        <FormContext.Provider value={{ formData, setFormData }}>  
            {children}  
        </FormContext.Provider>  
    );  
};  

// Create a custom hook for easy access to context  
export const useFormData = () => {  
    const context = useContext(FormContext);  
    if (context === undefined) {  
        throw new Error('useFormData must be used within a FormProvider');  
    }  
    return context;  
};