import Leftbar from "../../components/ui/Leftbar";
import { Routes, Route } from "react-router-dom";
import Patient from "../patient/Patient";
import LandingPage from "../landing/LandingPage";
import DoctorReference from "../doctor_reference/DoctorReference";

const Home = () => {
  return (
    <div className="cpanel-container">
      <Leftbar>
       
     <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/patients" element={<Patient />} />
        <Route path="/doctor_reference" element={<DoctorReference />} />
         
        </Routes>
       
      </Leftbar>
    </div>
  )
}

export default Home