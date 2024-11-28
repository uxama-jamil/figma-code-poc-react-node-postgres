import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import EmailSent from "./pages/EmailSent";
import SIgnInV from "./pages/SIgnInV";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import SignUpIndividualCreatePa from "./pages/SignUpIndividualCreatePa";
import SignUp from "./pages/SignUp";
import SignUpClinicHospitalCr from "./pages/SignUpClinicHospitalCr";
import SignUpClinicHospitalAc from "./pages/SignUpClinicHospitalAc";
import SignUpClinicHospitalCl from "./pages/SignUpClinicHospitalCl";
import SignUpIndividualAccountO from "./pages/SignUpIndividualAccountO";
import {  FormProvider } from "./context/context";
import Home from "./pages/SignInSuccess";
import ValidateOtp from "./pages/ValidateOtp";
import ProtectedRoute from "./protected-route/protected-route";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/reset-password":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-individual-create-passwrd-step2":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-clinic-hospital-create-password-step3":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-clinic-hospital-account-owner-step2":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-clinic-hospital-clinic-information-step1":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-individual-account-owner-step1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
      <FormProvider> 
    <Routes>
      <Route path="/" element={<SIgnInV />} />
      <Route path="/" element={<EmailSent />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route
        path="/sign-up-individual-create-passwrd-step2"
        element={<SignUpIndividualCreatePa />}
      />
      <Route path="/sign-up" element={<SignUp />} />
      <Route
        path="/sign-up-clinic-hospital-create-password-step3"
        element={<SignUpClinicHospitalCr />}
      />
      <Route
        path="/sign-up-clinic-hospital-account-owner-step2"
        element={<SignUpClinicHospitalAc />}
      />
      <Route
        path="/sign-up-clinic-hospital-clinic-information-step1"
        element={<SignUpClinicHospitalCl />}
      />
      <Route 
        path="/sign-up-individual-account-owner-step1"
        element={<SignUpIndividualAccountO />}
      />
      <Route
        path="/validate-otp"
        element={<ProtectedRoute element={<ValidateOtp/>}/>}
      />
      
      <Route path="/home" element={<ProtectedRoute element={<Home/>}/>} />
    </Routes>
      </FormProvider>
  );
}
export default App;
