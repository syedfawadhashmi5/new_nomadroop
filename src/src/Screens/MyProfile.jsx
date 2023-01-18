import * as React from "react";
import { useState } from "react";
import { useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';


import { connect } from "react-redux";
import { GetUser, UpdateUser, DeleteUser, UpdateImage, clearImage } from "../actions/users";
import DispatchContext from '../DispatchContext';
import StateContext from "../StateContext";

import Form from 'react-bootstrap/Form';
import { Button } from "@mui/material";

import MyAlert from "../Components/MyAlert";
import InputField  from "../Components/InputField";
import UserImage from '../Components/Image/userImage';

const MyProfile = (props) => {

  
  const navigate = useNavigate();
  const appState = useContext(StateContext);
  const [loading, setLoading] = useState(true); 
  const [validated, setValidated] = useState(false);
  const appDispatch = useContext(DispatchContext)

  const [alert, setAlert] = useState({  open: false, message: "", type: "success" });
 
  const setAlertOpen = (val) => {
    setAlert({ ...alert, open: val });
  };


  const handleImage = async (e) => {
    await props.clearImage()
    let reader = new FileReader();
    reader.onloadend = async function () {
      let arr = reader.result.split(",");
      let img = {
          name: e.target.files[0].name,
          type: arr[0],
          base64: arr[1],
      }
      await props.UpdateImage(appState.token, {image: img})
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setValidated(true);
      await props.UpdateUser(appState.token, appState.user.id, props.user)
      const { error } = props ; 
      if(!error){
        setAlert({ open: true, message: "Updated Succesfully", type: "success"});
      } 
    }

  };

  // Start User Effects 
  useEffect(() => {
    if(appState.loggedIn) {
      props.GetUser(appState.token)
      setLoading(false)
    } else {
      appDispatch({ type: "LOGOUT" });
      navigate("/");
    }
  },[])

  const onInputChanged = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;
    props.user[targetName] =  targetValue
  };

  const deleteAccount = async () => {
    if(appState.loggedIn){
      await props.DeleteUser(appState.token, props.user.id)
    }

    setAlert({ open: true, message: "You Account Deleted Succesfully", type: "success"});

    appDispatch({ type: "LOGOUT" });
    navigate("/");
  }

  return (
    loading ? <h1  className="profile-inner-title"> Loading..</h1> : (
        <>
          <MyAlert  open={alert.open}  type={alert.type}  message={alert.message} setOpen={setAlertOpen}/>

          <div className="title-div">
            <h2 className="profile-title">My Profile</h2>
          </div>

          <div className="profile-wrapper cnt-wrapper">
            <div>
              <h2 className="profile-inner-title p-15 p-sm-5">Your details</h2>
            </div>

            <Form  noValidate validated={validated} onSubmit={handleSubmit}>
              <div className="p-15">
                <div className="">
                  <div className="row px-0 mx-0 align-items-start reverse">

                    <div className="col-md-10  px-0 mx-0">
                      <div className="row px-0 mx-0 align-items-start">
                        <div className="col-md-6 ptb-15 lft-zero">
                            <div>
                              <InputField    name={"first_name"}  value={props.user?.first_name} 
                                    label={"*First Name"}  placeholder={"Type First Name"}
                                    required={true} action={onInputChanged}  />
                            </div>
                            <div>
                                <InputField    name={"email"}  value={props.user?.email} 
                                    label={"*Email"}  placeholder={"Type Email"}
                                    required={true} action={onInputChanged}  />
                            </div>
                            <div>
                              <InputField    name={"country"} value={props.user?.country} 
                                    label={"*Country"}  placeholder={"Type Country"}
                                    required={true} action={onInputChanged}  />
                            </div>
                        </div>

                        <div className="col-md-6 ptb-15">
                            <div>
                              <InputField    name={"last_name"}  value={props.user?.last_name}
                                    label={"*Last Name"}  placeholder={"Type Last Name"}
                                    required={true} action={onInputChanged}  />
                            </div>
                            <div>
                              <InputField    name={"phone_number"}  value={props.user?.phone_number}
                                    label={"*Phone Number"}  placeholder={"Type Phone Number"}
                                    required={true} action={onInputChanged}  />
                            </div>
                            <div>
                              <InputField    name={"education_major"}  value={props.user?.education_major}
                                    label={"*Profession"}  placeholder={"Type Profession"}
                                    required={true} action={onInputChanged}  />
                            </div>
                        </div>

                        <div className="col-md-12 lft-zero">
                          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>*About Me</Form.Label>
                            <Form.Control name="about_me" as="textarea" value={props.user?.about_me}  rows={3}  onChange={onInputChanged}/>
                          </Form.Group>
                        </div>

                        {appState.user.role === "Tenant" && (
                          <div className="row px-0 mx-0 align-items-start mt-0">
                              <div className="col-md-6 ptb-15 lft-zero">
                                  <InputField    name={"current_university"}  value={props.user?.current_university}
                                      label={"Current University"}  placeholder={"Type Current University"}
                                      required={false} action={onInputChanged}  />
                              </div>

                              <div className="col-md-6 ptb-15 lft-zero">
                                  <InputField    name={"aborad_unversity"}  value={props.user?.aborad_unversity}
                                      label={"Aborad University"}  placeholder={"Type Aborad University"}
                                      required={false} action={onInputChanged}  />
                              </div>

                              <div className="col-md-6  lft-zero">
                                  <InputField    name={"education_major"}  value={props.user?.education_major}
                                      label={"Education Major"}  placeholder={"Type Education Major"}
                                      required={false} action={onInputChanged}  />
                              </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="col-md-2 ptb-15 pr-right">

                      <UserImage url={props.user?.image_url} />

                      <div className="loadButton">
                        <div className="upload-btn-wrapper">
                          <button className="btn">Upload a file</button>
                          <input  type="file" name="myfile" accept="image/*" onChange={handleImage}/>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12 text-center">
                          <div className="u-content">
                            *Recomended Size: <br />
                            Minimum 550px
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="unverified-box">
                              <div className="un-content">
                                  Unverified 
                              </div>

                              <div className="un-text">
                                Your account is unverified. 
                              </div>

                              <div className="un-action">
                                <a> Click here to Verify </a>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                   
                  </div>

                  
                
                  
                  <div className="row px-0 mx-0 align-items-start mt-5 mt-sm-2" >
                    <div className="col-md-12 ptb-15 lft-zero">
                      <h2 className="profile-inner-title p-15">Social Media Links</h2>
                    </div>

                    <div className="col-md-6 ptb-15 lft-zero">
                        <div>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Twitter Url </Form.Label>
                            <Form.Control name="twitter" value={props.user?.twitter} type="url" placeholder="Type Twitter URL" required={false} onChange={onInputChanged}/>
                          </Form.Group>
                        </div>
                    </div>

                    <div className="col-md-6 ptb-15">
                        <div>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>LinkedIn Url </Form.Label>
                            <Form.Control name="linkedin"  value={props.user?.linkedin} type="url" placeholder="Type LinkedIn Url" required={false} onChange={onInputChanged}/>
                          </Form.Group>
                        </div>
                    </div>
                  </div>

                  <div className="row px-0 mx-0 align-items-start mt-5" >
                    <div className="col-md-12 lft-zero">
                      <h2 className="profile-inner-title p-15"> Language and TimeZone</h2>
                    </div>
                    <div className="col-md-6 ptb-15 lft-zero">
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> Language </Form.Label>
                            <Form.Select name="language" value={props.user?.language} aria-label="Select Language" onChange={onInputChanged}>
                              <option> Select Language </option>
                              <option value="en">English</option>
                              <option value="ar">Arabic</option>
                            </Form.Select>
                          </Form.Group>
                    </div>

                    <div className="col-md-6 ptb-15">
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> TimeZone </Form.Label>
                            <Form.Select name="timezone" value={props.user?.timezone}  aria-label="Select Time Zone" onChange={onInputChanged}>
                              <option> Select Language </option>
                              <option value="utc">UTC</option>
                              <option value="gtm">GTM</option>
                            </Form.Select>                          
                          </Form.Group>
                    </div>
                  </div>

                  <div className="flx-row mv" >

                    <div className="pt-0 left-zero">
                      <Button type="submit"  variant="contained" className="round-border-button mt-2">
                        Save user Profile
                      </Button>
                    </div>

                    <div className="pt-0 left-zero ml-3" style={{ marginLeft: '12px'}}>
                      <Button variant="contained" className="round-border-button mt-2 green-clr">
                        Change Password
                      </Button>
                    </div>

                  </div> 

                  <div className="row px-0 mx-0 align-items-start mt-5" >
                    <div className="col-md-12 lft-zero ptb-15 d-sm-flex align-items-sm-center">
                      <h2 className="profile-inner-title p-15"> Delete Account</h2>
                    </div>

                    <div className="col-md-12 ptb-15 lft-zero">
                       <p> Receive booking requests by SMS on your verified phone number. </p>
                    </div>

                    <div className="col-md-12 lft-zero">
                      <div className="pt-0 left-zero">
                        <Button onClick={deleteAccount} variant="contained" className="round-border-button mt-2 danger">
                          Delete Account 
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>   
          </Form>
        </div>
      </>
      )
    );
};

const mapStateToProps = (state) => {
  console.log(state.userData.image_url)
  return {
    loading: state.userData.loading, 
    user: state.userData.user,
    error: state.userData.error, 
    image: state.userData.image_url  
  };
};

export default connect(mapStateToProps, { GetUser, UpdateUser, DeleteUser, UpdateImage , clearImage })(MyProfile);
