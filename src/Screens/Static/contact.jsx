import React from "react";
import Footer from "../../Components/Menu/Footer";

const contactUs = (props) => {
  console.log(props, "as");
  return (
    <div className="container-fluid form_main">
      <div className="container">
        <div className="form_contain">
          <p>SUPPORT</p>
          <h2>Tell us, how can we help you? We're here for you.</h2>
          <h3>Start your request and we'll find a solution together.</h3>
          <div className="form_box">
            <form>
                <p>Please provide us a clear message about your request. After carefully analysing your case, we will contact you via e-mail or phone call.</p>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                Tell us your name *
                </label>
                <input
                  type="Name"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                E-mail *
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Email Address"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                Phone number *
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                Are you a
                </label>
                <select class="form-select">
                <option value="Tenant">Tenant</option>
                <option value="Landlord">Landlord</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                Booking ID
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="If you have a Booking ID, please insert here!"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                Reason of the contact *
                </label>
                <select class="form-select">
                <option value="Tenant">Select your reason</option>
                <option value="Landlord">Request for more information on a property</option>
                <option value="Landlord">Doubt about Uniplaces services</option>
                <option value="Landlord">Discuss about your booking</option>
                <option value="Landlord">Request the Certificate of Accommodation document</option>
                <option value="Landlord">General topic</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                How can we help? *
                </label>
                <textarea class="form-control"></textarea>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                I authorize Uniplaces to contact me by email and by phone.
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="form_text_box mt-3">
            <h2>Do you need personalised help to find your next home?</h2>
            <p>Click here and let our special agents find you the best accommodation with all the amenities you need.</p>
            <a href="/">Talk to an agent</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default contactUs;
