// React Router
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';

// React BootStrap
import { Form, InputGroup } from 'react-bootstrap';

// Custom Component
import SMbuttons from '../Components/SMButton'; 

// Images
import Image from '../images/rounded.png'
import SecondImg from '../images/net.png'
import BedImg from '../images/rest.png'
import t1 from '../images/t1.jpg'
import t2 from '../images/t2.jpg'
import t3 from '../images/t3.jpg'
import Heart from '../images/heart-icon.png'
import Star from '../images/star.png'
import Like from '../images/like.png'
import Posta from '../images/frontImg.png'
import Falg1 from '../images/flag1.png'
import Falag2 from '../images/falg2.png'
import HomeIcon from '../images/home.png'
import Building from '../images/Buiding.png'
import handSake from '../images/handshake.png'
import Arrow from '../images/arrow.png'
import applogo from '../images/flogoz.png'
import Axios from 'axios'
import StateContext from '../StateContext';
import Footer  from '../Components/Menu/Footer';

// Icons
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {

    const [date, setDate] = useState();
    const [search, setSearch] = useState('');
    const appState = useContext(StateContext)
    const navigate = useNavigate()
    const handleDate = (e) => {
        setDate(e.target.value);
    }

    const handleSubmit = async () => {
        console.log('submission')
        try {
            const {data} = await Axios.post(`${appState.apiEndPoint}/api/searches`, {
                search: {
                    text: search,
                    start_date: '12/12/2022'
                }
            })
            navigate('/properties', {
                state:data
            })
            console.log(data)
            
        } catch (error) {
            console.log(error)   
        }
    }

  return (
    
        <section id='Home'>
            <div className='rowz' id='main-containe'>
                <div className='container'>
                    <div className='col-12' id='bear-pic' >
                        <h1 className='banner-heading white-color fontWeight textAlign marginTop75pxz'>Get to live in our <br></br> Exclusives Student Housing</h1>

                        <div className='alignSelf withFull isMobile'>
                            <InputGroup id='inputss' >
                                <InputGroup.Text className='backgroundColor' style={{ borderEndStartRadius: "33px", borderTopLeftRadius: "33px" }}>
                                    <SearchIcon id="searchicooons" />
                                </InputGroup.Text>
                                <Form.Control onChange={e => setSearch(e.target.value)} value={search} type='text' placeholder="Search by city, neighborhood or university" aria-label="Search" />
                                <input type="date" className="mainDateField" onChange={handleDate} value={date} />
                                <InputGroup.Text onClick={handleSubmit} className='banner-search-btn fontSize fontWeight backgroundColor' style={{ borderTopRightRadius: "33px", borderEndEndRadius: "33px", cursor: "pointer" }}>Search</InputGroup.Text>
                            </InputGroup>
                        </div>
                        
                        <div className='row showMobile'>
                            <div className='white-mb-box'>

                                    <div className='col-md-12 col-12 mb-1'>
                                        <div className='row'>
                                            <div className='col-1 icon-search' >
                                                <InputGroup.Text className='backgroundColor' style={{ borderEndStartRadius: "33px", borderTopLeftRadius: "33px" }}>
                                                    <SearchIcon id="searchicooons" />
                                                </InputGroup.Text>
                                            </div>

                                            <div className='col-11 p2'>
                                                <Form.Control className='mb-fonts' onChange={e => setSearch(e.target.value)} value={search} type='text' placeholder="Start Your Search Here ..." aria-label="Search" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-12 col-12'>
                                        <input placeholder="Date" className="mainDateField" type="date" onfocus="(this.type='date')"  onChange={handleDate} value={date}/>
                                    </div>
                                    
                                    <div className='col-12'>
                                        <hr />
                                    </div>
                                    <div className='col-md-12'>
                                        <InputGroup.Text onClick={handleSubmit} className='banner-search-btn fontSize fontWeight backgroundColor' style={{ cursor: "pointer" }}>Search</InputGroup.Text>
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='rowz' id="wrow">
                <div className='container'>
                <div className='row' >
                    <div className='col-12 mb-4' >
                        <h2 className='bigfont fontWeight white-color'>Best co-living experience for your <br></br> exchange semester in south America</h2>
                    </div>
                    <div className='row' id="next-row">
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={SecondImg} className='' alt="" />
                                <h4>Worldwide Roommates</h4>
                                <p>Live,travel and make <br></br> friends with roornmates <br></br> frorn all over the world </p>
                            </div>
                            <div className='col-md-6'>
                                <img src={Image} className='' alt="" />
                                <h4>Community Experience</h4>
                                <p>Be part of the Social <br></br> activities within our Nomadroof <br></br> Community</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={BedImg} className='' alt="" />
                                <h4>Quality Properties</h4>
                                <p>Enjoy the fully furnished <br></br> and confortable private rooms <br></br> plus the social areas</p>
                            </div>
                            <div className='col-md-6'>
                                <img src={Image} className='' alt="" />
                                <h4>Strategic Location</h4>
                                <p>Live close to your Unic or by the <br></br> pacific Ocean; all of our properties <br></br> are at the safest and best areas</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className='container-fluid'>
                <div className='col-12 ' >
                    <div className='row'>
                        {/* <video poster={Posta} className="marrrgin paddiing" width="100%" height="100%" controls>
                            <source src={Player} />
                        </video> */}
                    </div>
                </div>
            </div>

            <section id='how-works'>
                <div className='container newColor' >
                    <div className='row'>
                        <div className='col-12'>
                            <h1 className='bigfont fontWeight textAlign newcolr'>HOW DOES NOMADROOF WORKS?</h1>
                            <p className='newcolr textAlign textJustify'>Nomadroof is the perfect platform for exchange students, professionals <br></br> and expats looking for mid to long-term accommodation.</p>
                        </div>
                    </div>
                    <div className='row textAlign '>
                        <div className='col-md-4'>
                            <div>
                                <div className='rowz new-bgcolor borderRaduis boxshaodow'>
                                    <div>
                                        <img src={HomeIcon}  />
                                        <div className='numbz'>
                                            <p>1</p>
                                        </div>
                                    </div>
                                    <h3 className='color-black fontfamily01 fontWeight marginTOp25 ' >Search For A Verified Roof</h3>
                                    <p className='marginBottom30 white-color   textAlign textJustify fontfamily01' >
                                        Search Through multiple flats, <br></br>rooms, appartments all verified<br></br> by our Nomadroof Team.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='rowz new-bgcolor borderRaduis boxshaodow'>
                                <div>
                                    <img src={Building}  />
                                    <div className='numbz'>
                                            <p>2</p>
                                        </div>
                                </div>
                                <h3 className='color-black fontfamily01 fontWeight marginTOp25'>Send A Booking Request</h3>
                                <p className='marginBottom30 white-color  textAlign textJustify fontfamily01'>
                                    When you find a match, send a <br></br>booking request and Host will <br></br> give you a respond within 48  <br></br>hour. We have also a Live Chat  <br></br>Center to guide you.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='rowz width50z height125z new-bgcolor borderRaduis boxshaodow'>
                                <div>
                                    <img src={handSake}  />
                                    <div className='numbz'>
                                            <p>3</p>
                                        </div>
                                </div>
                                <h3 className='color-black fontfamily01 fontWeight marginTOp25'>All  Set! Go Nomad</h3>
                                <p className='marginBottom30 white-color textAlign textJustify fontfamily01'>
                                    Search Through multiple flats, <br></br>rooms, appartments all verified<br></br> by our Nomadroof Team.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                
            <section id='testimonials'>
            <div className='container'>
            <div className='row' >
                <div className='col-12'>
                    <h1 className='bigfont'>TESTIMONIALS</h1>
                    <p>What same of our Namadroof students tenants are saying</p>
                </div>
            </div>
                <div className='row' >
                    <div className='col-md-4'>
                        <img src={t1} alt='' />
                    </div>
                    <div className='col-md-4' >
                        <img src={t2} alt='' />
                    </div>
                    <div className='col-md-4'>
                        <img src={t3} alt='' />
                    </div>
                </div>
            </div>
            </section>

            <div className='rowz' id='SIMPLE-ROW'>
                <div className='container'>
                <div className='row'>
                    <h2 className='bigfont fontWeight textAlign marginTop-65' >OTHER LISTINGS</h2>
                </div>
                <div className='row' id='second-row'>
                    <p className='second-text'>
                        Check the listings from independent verified host, there are awesome as well and  you still will get the same benefits like 24 hours tenant'sprotection that let you  confirm within this time period of your check in date that everything is ok with your new home
                    </p>
                </div>
                <div className='row' style={{ marginTop: "36px", textAlign: "center" }}>
                    <div className='col-12'>
                        <SMbuttons label="See All" id="seee-all-button" />
                    </div>
                </div>
                </div>
            </div>
            
            <div className='rowz' id='secondLast-image'>
                <div className='col-12'>

                    <h2 className='bigfont scecondLast-title'>A WHOLE NETWORK DEDICATED <br></br> TO STUDENTS AND YOUNG PROFESSSIONALS</h2>
                </div>
                <div className='blackback'>
                <div className='container'><div className='gradbroder'></div>
                <div className='row' id='blur-row'>
                    <div className='col-sm-4' style={{ textAlign: "center" }}>
                        <img src={Heart} style={{ marginTop: "35px" }} alt="" />
                        <h2 className='bigfont calltoaction-heading'>1,250</h2>
                        <p className='font-white'>More Than Students <br></br> and young Professionals</p>

                    </div>
                    <div className='col-sm-4' style={{ textAlign: "center" }}>
                        <img src={Star} style={{ marginTop: "32px" }} alt="" />
                        <h2 className='bigfont calltoaction-heading'>250</h2>
                        <p className='font-white'>More verified Flats, <br></br>Rooms, and Apartments</p>
                    </div>
                    <div className='col-sm-4' style={{ textAlign: "center" }}>
                        <img src={Like} style={{ marginTop: "32px" }} alt="" />
                        <h2 className='bigfont calltoaction-heading'>800</h2>
                        <p className='font-white'>More Than Booking<br></br> Transactions Through <br></br> Our Platform</p>
                    </div>
                </div>
                <br />
                
                <div className='gradbroder'></div>
                </div>
                </div>
            </div>
  
     <Footer />
    </section>
  )
}

export default Home