import { Button, Menu, MenuItem } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { Link, useLocation } from 'react-router-dom';

import Axios from 'axios'
import StateContext from "../StateContext";

import BookingTableCard from "../Components/BookingTableCard";

// Icons
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeIcon from '@mui/icons-material/AccessTime';



const MyBookings = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState("Today");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setValue(e.target.innerText);
    setAnchorEl(null);
  };
  const appState = useContext(StateContext)
  const [reservations, setReservations] = useState([])

  const getReservations = async () => {
    try {
        const {data} = await Axios.get(`${appState.apiEndPoint}/api/reservations/my_reservations`, {
            headers: {
                Authorization: `Bearer ${appState.token}`
            }
        })
        if(data.success) {
            setReservations(data.reservations)
        }
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(() => {
    getReservations();
  },[])

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1><strong>My Bookings</strong></h1>
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            variant="outlined"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            {value ? value : "Today"}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
      <div className="row m-0 justify-content-between align-items-center">
        <div className="w-20 book_king">
          <div className="pr_info_card">
            <div className="row m-0 align-items-center">
              <div className="col-4 p-0">
                <div className="pr_icon_bck">
                  <AttachMoneyIcon />
                </div>
              </div>
              <div className="col-8 p-0 ps-2 booking_btn">
                <h5> 12345 </h5>
                <div className="cnt-item"> 
                  Total & Booking
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w-20 book_king">
          <div className="pr_info_card">
            <div className="row m-0 align-items-center">
              <div className="col-4 p-0">
                <div className="pr_icon_bck">
                  <CloseIcon />
                </div>
              </div>
              <div className="col-8 p-0 ps-2 booking_btn">
                <h5> 0  </h5>
                <div className="cnt-item"> 
                  Requests Rejected 
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w-20 book_king">
          <div className="pr_info_card">
            <div className="row m-0 align-items-center">
              <div className="col-4 p-0">
                <div className="pr_icon_bck">
                  <AccessTimeIcon />
                </div>
              </div>
              <div className="col-8 p-0 ps-2 booking_btn">
                <h5> 3 </h5>
                <div className="cnt-item"> 
                  <Link to={"/profile/booking/inbox"} id="booking-pending">Pending</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w-20 book_king">
          <div className="pr_info_card">
            <div className="row m-0 align-items-center">
              <div className="col-4 p-0">
                <div className="pr_icon_bck">
                  <AttachMoneyIcon />
                </div>
              </div>
              <div className="col-8 p-0 ps-2 booking_btn">
                <h5> 0 </h5>
                <div className="cnt-item"> 
                  Pending Tanent Payout 
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w-20 book_king">
          <div className="pr_info_card">
            <div className="row m-0 align-items-center">
              <div className="col-4 p-0">
                <div className="pr_icon_bck">
                  <AttachMoneyIcon />
                </div>
              </div>
              <div className="col-8 p-0 ps-2 booking_btn">
                <h5> 0 </h5>
                <div className="cnt-item"> 
                  Booking Confirmed 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="latest_requests" className="mt-4">
        <div className="d-flex align-items-center justify-content-between booking_btn">
          <div>
            <h5 className="m-0"><strong>Latest Requests</strong></h5>
          </div>
          <div className="src_bar">
            <input type="search" placeholder="search" />
            <SearchIcon />
          </div>
        </div>
        <hr />
        <div className="cst_table">

          <div className="row m-0 m_row">
            <div className="w-35 px-1">
              <h5>Property  </h5>
            </div>
            <div className="w-30 px-1">
              <h5>Other Details</h5>
            </div>
            <div className="w-15 px-2">
              <h5>Request No.</h5>
            </div>
            <div className="w-20 px-1">
              <h5>Actions</h5>
            </div>
          </div>
          
          {reservations.map( (reservation, index) => <BookingTableCard key={index} reservation={reservation} />)}
         
        </div>
      </section>
    </div>
  );
};




// const mapStateToProps = (state) => {

//   console.log("state")
//   console.log(state)
//   console.log("state")

// return {
//   loading: state.userData.loading, 
//   user: state.userData.user,
//   error: state.userData.error, 
//   image: state.userData.image 
// };
// };

// export default connect(mapStateToProps, { GetUser, UpdateUser, DeleteUser, UpdateImage })(MyProfile);

export default MyBookings;
