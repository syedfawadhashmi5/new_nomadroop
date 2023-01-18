
import './App.css';
// sass
import "./sass/App.scss";

import "./Responsive.css"; 

// React Functionns
import { useEffect, useReducer,useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Axios from "axios";

// Cookie utils
import { getCookie, setCookie, erase } from "./utils/cookies";
import Home from './Screens/Home';
import Navbar from './Components/Navbar';
import StateContext from './StateContext';
import DispatchContext from './DispatchContext';
import MyProperties from './Screens/MyProperties';
import MyProfile from './Screens/MyProfile';
import NewProperty from './Screens/NewProperty';
import Otherlisting from './Screens/OtherListing';
import OtherlistingMap from './Screens/OtherListingMap';
import AccountVerification from './Screens/AccountVerification';
import SingleListing from './Screens/SingleListing';
import TenantReservations from './Screens/TenantReservations';
import HostReservations from './Screens/HostReservations';

import MyBookings from './Screens/MyBookings';
import Inbox  from './Screens/Host/Inbox';

import ProfileLayout from './Layout/ProfileLayout';

import PropertiesList from './Screens/Static/properties';
import ContactUs from './Screens/Static/contact';
import Terms from './Screens/Static/terms';
import Faqs from './Screens/Static/faq';
import Privacypolicy from './Screens/Static/Privacypolicy';
import Detail from './Screens/Detail';



function App() {
  // let url = "http://localhost:3001"
  let url = "https://ror-nomadroof.herokuapp.com"

  const initialState = {
    apiEndPoint: url,
    loggedIn: (getCookie("token") !== 'undefined' && getCookie('token') ) ? true : false,
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    token: getCookie("token") ? getCookie("token") : null,
    roles: localStorage.getItem("roles") ? JSON.parse(localStorage.getItem("roles")) : [],
  };

  const [drawerOpen, setDrawerOpen] = useState(true);

  
  const ourReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          loggedIn: true,
          user: action.payload,
          token: action.token,
        };
        case "UPDATE_USER":
        return {
          ...state,
          user: action.payload
        }
        case "UPDATE_ROLES":
          return {
            ...state,
            roles: action.payload,
          };
      
      case "LOGOUT":
        return {
          ...state,
          loggedIn: false,
          user: {},
          token: "",
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(ourReducer, initialState);

  
  useEffect(()=> {
    
    const getRoles = async () => {
      try {
        const response = await Axios.get(`${state.apiEndPoint}/api/roles`);
        if (response.status === 200) {
          dispatch({type: "UPDATE_ROLES", payload: response.data.roles});
        }
      } catch (e) {
        console.log(e);
      }
    }
    getRoles();
  },[])
  
  useEffect(()  => {
    if(state.loggedIn) {
      localStorage.setItem("user", JSON.stringify(state.user));
      setCookie("token", state.token, 7);
      return;
    }
    localStorage.removeItem("user");
    erase("token");
  },[state.loggedIn, state.user,state.token])

  useEffect(() => {
    if(state.roles) {
      localStorage.setItem("roles", JSON.stringify(state.roles));
    }
  },[state.role])
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>

        <BrowserRouter>
          <Navbar />
          
          <Routes>
            <Route exact path="/" element={<Home />} />    
            <Route path="/properties" element={<Otherlisting />} />
            <Route path="/properties/:id" element={<SingleListing />} />

            // Routes Static Pages
            <Route path="/nomad/properties"  element={<PropertiesList />} />
            <Route path="/terms-condition"  element={<Terms />} />
            <Route path="/contact-us"  element={<ContactUs />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/privacy-policy" element={<Privacypolicy />} />
            // Routes Static Pages

            {state.loggedIn && (
            <>
              <Route path="/profile" element={<ProfileLayout drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />}>
                <Route path="" element={<MyProfile />} />
                
                <Route path="my-bookings" element={<MyBookings />} />
                <Route path="booking/inbox" element={<Inbox />} />

                <Route path="reservations" element={<HostReservations />} />
                <Route path='my-properties' element={<MyProperties />}/>
                <Route path="add-property" element={<NewProperty />} />
                <Route path="account-verification" element={<AccountVerification />} />
                <Route path="invoice-detail" element={<Detail />} />
              </Route>

              <Route path="/other-listing-map" element={<OtherlistingMap />} />
            
            </>
            )}
          </Routes>
        </BrowserRouter>
    </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
