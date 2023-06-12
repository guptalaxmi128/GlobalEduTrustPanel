import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import { HelmetProvider } from 'react-helmet-async';
import { store } from "./store/Store";
import Layout from "./component/layout/Layout";
import Profile from "./component/profile/Profile";
import Course from "./component/course/Course";
import Login from "./component/login/Login";
import Wallet from "./component/wallet/Wallet";
import SignUp from "./component/signup/SignUp";
import GetOtp from "./component/getotp/GetOtp";
import Students from "./component/students/Students";
import Donated from "./component/donated/Donated";
import StudentProfile from "./component/studentprofile/StudentProfile";
import ResendOtp from "./component/resendotp/ResendOtp";
import GetOtpLogin from "./component/getotplogin/GetOtpLogin";

function App() {
  return (
    <HelmetProvider>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Layout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/course" element={<Course />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/getotp" element={<GetOtp />} />
        <Route path="/getotplogin" element={<GetOtpLogin />} />
        <Route path="/donation-request" element={<Students />} />
        <Route path="/donated" element={<Donated />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/resend-register-otp" element={<ResendOtp />} />
      </Routes>
    </BrowserRouter>
    </Provider>
    </HelmetProvider>
  );
}

export default App;
