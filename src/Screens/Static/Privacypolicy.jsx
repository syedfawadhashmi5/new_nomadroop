import React from "react";
// Icons
import SearchIcon from "@mui/icons-material/Search";
// React BootStrap
import { Form, InputGroup } from "react-bootstrap";
import Footer from "../../Components/Menu/Footer";


function Privacypolicy() {

  return (
    <div className="Privacypolicy">
      <div id="main-containe">
        <div className="container">
          <div className="col-12" id="bear-pic">
            <h1 className="banner-heading white-color fontWeight textAlign marginTop75pxz">
              Get to live in our <br></br> Exclusives Student Housing
            </h1>
            <div className="alignSelf withFull isMobile">
              <InputGroup id="inputss">
                <InputGroup.Text
                  className="backgroundColor"
                  style={{
                    borderEndStartRadius: "33px",
                    borderTopLeftRadius: "33px",
                  }}
                >
                  <SearchIcon id="searchicooons" />
                </InputGroup.Text>
                <Form.Control
                  value=""
                  type="text"
                  placeholder="Search by city, neighborhood or university"
                  aria-label="Search"
                />
                <input type="date" className="mainDateField" value="" />
                <InputGroup.Text
                  className="banner-search-btn fontSize fontWeight backgroundColor"
                  style={{
                    borderTopRightRadius: "33px",
                    borderEndEndRadius: "33px",
                    cursor: "pointer",
                  }}
                >
                  Search
                </InputGroup.Text>
              </InputGroup>
            </div>
            <div className="row showMobile">
              <div className="white-mb-box">
                <div className="col-md-12 col-12 mb-1">
                  <div className="row">
                    <div className="col-1 icon-search">
                      <InputGroup.Text
                        className="backgroundColor"
                        style={{
                          borderEndStartRadius: "33px",
                          borderTopLeftRadius: "33px",
                        }}
                      >
                        <SearchIcon id="searchicooons" />
                      </InputGroup.Text>
                    </div>
                    <div className="col-11 p2">
                      <Form.Control
                        className="mb-fonts"
                        value=""
                        type="text"
                        placeholder="Start Your Search Here ..."
                        aria-label="Search"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <input
                    placeholder="Date"
                    className="mainDateField"
                    type="date"
                    onfocus="(this.type='date')"
                    value=""
                  />
                </div>

                <div className="col-12">
                  <hr />
                </div>
                <div className="col-md-12">
                  <InputGroup.Text
                    className="banner-search-btn fontSize fontWeight backgroundColor"
                    style={{ cursor: "pointer" }}
                  >
                    Search
                  </InputGroup.Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="privacy_text_one">
        <div className="container">
          <h2>
            This Privacy Policy governs the manner in which Nomadroof collects,
            uses, maintains and discloses information collected from users
            (each, a “User”) of the http://www.nomadroof.com/ website (“Site”).
            This privacy policy applies to the Site and all products and
            services offered by Nomadroof.
          </h2>
          <div className="row">
            <div className="col-md-12 mt-3">
              <div className="privacy_contain_one mt-3">
                <h2>Personal identification information</h2>
                <p>
                  We may collect personal identification information from Users
                  in a variety of ways in connection with activities, services,
                  features or resources we make available on our Site.. Users
                  may visit our Site anonymously. We will collect personal
                  identification information from Users only if they voluntarily
                  submit such information to us. Users can always refuse to
                  supply personally identification information, except that it
                  may prevent them from engaging in certain Site related
                  activities.
                </p>
              </div>
              <div className="privacy_contain_one mt-3">
                <h2>Non-personal identification information</h2>
                <p>
                  We may collect personal identification information from Users
                  in a variety of ways in connection with activities, services,
                  features or resources we make available on our Site.. Users
                  may visit our Site anonymously. We will collect personal
                  identification information from Users only if they voluntarily
                  submit such information to us. Users can always refuse to
                  supply personally identification information, except that it
                  may prevent them from engaging in certain Site related
                  activities.
                </p>
              </div>
              <div className="privacy_contain_one mt-3">
                <h2>Web browser cookies</h2>
                <p>
                  Our Site use “cookies” to enhance User experience. User’s web
                  browser places cookies on their hard drive for record-keeping
                  purposes and sometimes to track information about them. User
                  may choose to set their web browser to refuse cookies, or to
                  alert you when cookies are being sent. If they do so, note
                  that some parts of the Site may not function properly
                </p>
              </div>
              <div className="privacy_contain_one mt-3">
                <h2>How we protect your information</h2>
                <p>
                  We adopt appropriate data collection, storage and processing
                  practices and security measures to protect against
                  unauthorized access, alteration, disclosure or destruction of
                  your personal information, username, password, transaction
                  information and data stored on our Site..
                </p>
              </div>
              <div className="privacy_contain_one mt-3">
                <h2>Your personal information</h2>
                <p>
                  The information we collect may be use when legally required to
                  do so at the request of governmental authorities conducting an
                  investigation to verify or enforce compliance with the
                  policies governing our Site and Application and applicable
                  laws or to protect against misuse or unauthorized use of our
                  Site and Application to a successor entity in connection with
                  a corporate merger consolidation sale of assets or other
                  corporate change respecting the Site and Application.
                </p>
                <p>
                  Persons who supply us with their telephone numbers on-line
                  will only receive telephone contact from us with information
                  regarding orders they have placed on-line and verification of
                  account and/or accommodation listing. Please provide us with
                  your name and phone number.
                </p>
                <p>
                  With respect to Ad Servers. We do not partner with or have
                  special relationships with any ad server companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="privacy_text_two">
        <div className="container">
          <h2>Data Policy</h2>
          <div className="row">
            <div className="col-md-12">
              <div className="privacy_contain_two mt-2">
                <h2>Data Policy Disclaimer</h2>
                <p>
                  At Nomadroof we are commited to transparency regarding the
                  data that you trust us with.
                </p>
                <p>
                  Our policies are therefore public and available for you to
                  read and be aware of how we deal with data within Nomadroof.
                </p>
              </div>
              <div className="privacy_contain_two mt-3">
                <h2>Nomadroof Limited: Retention Policy</h2>
                <p>
                  <span>1.1</span>Nomadroof Limited (the “Company”) must, in
                  respect of its processing of personal data, comply with the
                  Data Pro tection Act 2018, the General Data Protection
                  Regulation 2016/679, and related legislation (together, “Data
                  Protection Laws”)
                </p>
                <p>
                  <span>1.2</span>This Retention Policy should be read in
                  conjunction with the Company’s Data Protection Policy, which
                  sets out the Company’s overall approach to data protection
                  matters and sets out the rationale for why a Retention Policy
                  is required for personal data.
                </p>
                <p>
                  <span>1.3</span>Nomadroof is under a legal obligation only to
                  keep personal data for as long as the Company needs it. Once
                  the Company no longer needs personal data, the Company must
                  securely delete it. The Company recognizes that the correct
                  and lawful treatment of data will maintain confidence in the
                  Company and will provide for a successful working environment.
                </p>
                <p>
                  <span>1.4</span>This Policy applies to all Company employees,
                  consultants, contractors and temporary personnel hired to work
                  on behalf of the Company (“Company Personnel”).
                </p>
                <p>
                  <span>1.5</span>All Company Personnel with access to personal
                  data must comply with this Retention Policy at all times.
                </p>
                <p>
                  <span>1.6</span>Please read this Retention Policy carefully.
                  If you have any queries regarding this Retention Policy,
                  please consult your manager and/ or the Data Protection
                  Representative. You are advised that any breach of this
                  Retention Policy will be treated seriously and may result in
                  disciplinary action being taken against you.
                </p>
                <p>
                  <span>1.7</span>Company Personnel will receive a copy of this
                  Policy when they start and may receive periodic revisions of
                  this Policy. This Policy does not form part of any Company
                  Personnel’s contract of employment and the Company reserves
                  the right to change this Policy at any time. All Company
                  Personnel are obliged to comply with this Policy at all times.
                </p>
              </div>
              <div className="privacy_contain_two mt-3">
                <h2>ABOUT THIS POLICY</h2>
                <p>
                  This Retention Policy explains how the Company complies with
                  our legal obligation not to keep personal data for longer than
                  we need it and sets out when different types of personal data
                  1 will be deleted. In particular, it sets out details of the
                  Company’s policies for the retention of Special Category
                  personal data
                </p>
              </div>
              <div className="privacy_contain_two mt-3">
                <h2>DATA RETENTION PERIODS</h2>
                <p>
                  Nomadroof has assessed the types of personal data that
                  Nomadroof holds and the purposes the Company use it for. The
                  table below sets out the retention periods that the Company
                  has set for the different departments within the Company, and
                  the different types of data that they each hold.
                </p>
                <p>
                  If any member of Nomadroof Personnel considers that a
                  particular piece of personal data needs to be kept for more or
                  less time than the period set out in this policy, please
                  contact the Data Protection Officer for guidance.
                </p>
              </div>
              <div className="privacy_contain_two mt-3">
                <h2>RETENTION PERIODS FOR DIFFERENT CATEGORIES OF DATA</h2>
                <div className="table_box mt-5 table-responsive">
                  <table className="table table_td align-top">
                    <tbody>
                      <tr>
                        <td>Type of Data</td>
                        <td>When will the company delete (if manual)</td>
                        <td>When will the company delete (if electronic)</td>
                        <td>How will the company delete (if manual)</td>
                        <td>How will the company delete (if electronic)?</td>
                      </tr>
                      <tr>
                        <td>Employee records</td>
                        <td>5 years (please check Nomadroof Employee Privacy Statement)</td>
                        <td>5 years(please check Nomadroof Employee Privacy Statement)</td>
                        <td>documentation shredding</td>
                        <td>delete records wherever they’re. stored</td>
                      </tr>
                      <tr>
                        <td>Customer (Tenant) details</td>
                        <td>2 years</td>
                        <td>2 years</td>
                        <td>documentation shredding</td>
                        <td>In an automated manner via a job that runs every day</td>
                      </tr>
                      <tr>
                        <td>Customer (Host) details</td>
                        <td>2 years</td>
                        <td>2 years</td>
                        <td>documentation shredding</td>
                        <td>In an automated manner via a job that runs every day</td>
                      </tr>
                      <tr>
                        <td>Supplier details</td>
                        <td>2 years</td>
                        <td>2 years</td>
                        <td>documentation shredding</td>
                        <td>In an automated manner via a job that runs every day</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="privacy_contain_two mt-3">
                <h2>When can I request a data deletion?</h2>
                <p>
                  You can request a data deletion at any time from within the
                  app. Please note that this request is irreversible – once you
                  have requested for your data to be deleted you will not be
                  able to access your account again
                </p>
              </div>
              <div className="privacy_contain_two mt-3">
                <h2>How do I request a data deletion?</h2>
                <p>
                  Please contact us through our customersupport@nomadroof email
                  and request data to be deleted. you will be asked to provide
                  email address used to generate account in question and some
                  other inquiries in our verification process. Once we complete
                  our assessment your data will be deleted in 48 hours.
                </p>
                <h2>Changes to this privacy policy</h2>
                <p>
                  Nomadroof has the discretion to update this privacy policy at
                  any time. When we do, we will revise the updated date at the
                  bottom of this page. We encourage Users to frequently check
                  this page for any changes to stay informed about how we are
                  helping to protect the personal information we collect. You
                  acknowledge and agree that it is your responsibility to review
                  this privacy policy periodically and become aware of
                  modifications.
                </p>
                <h2>Your acceptance of these terms</h2>
                <p>
                  By using this Site and/or Application, you signify your
                  acceptance of this policy. If you do not agree to this policy,
                  please do not use our Site. Your continued use of the Site
                  following the posting of changes to this policy will be deemed
                  your acceptance of those changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Privacypolicy;
