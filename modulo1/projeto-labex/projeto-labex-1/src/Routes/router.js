import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage  from "../pages/AdminHomePage";
import  AplicationFormPage  from "../pages/ApplicationFormPage";
import  HomePage  from "../pages/HomePage";
import  ListTripPage  from "../pages/ListTripsPage";
import  LoginPage  from "../pages/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage";
import  CreateTripPage  from "../pages/CreateTripPage";

export const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"                     index element={<HomePage />} />
                <Route path="trips/list"            element={<ListTripPage />}/>
                <Route path="/trips/application/:id"    element={<AplicationFormPage />} />
                <Route path="/login"                element={<LoginPage/>}/>
                <Route path="/admin/trips/list"     element={<AdminHomePage />} />
                <Route path="/admin/trips/create/:id"   element={<TripDetailsPage />} />
                <Route path="/admin/trips/:id"      element={<CreateTripPage />} />
            </Routes>
        </BrowserRouter>
    )
}