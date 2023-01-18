// import * as React from "react";
import React from "react";

import { useEffect, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'


import { connect } from "react-redux";
import { getProperties } from "../../actions/properties";


import Footer from '../../Components/Menu/Footer';

import PropertiesCard from '../../Components/Property/Card';
import StMap from '../../Components/StMap';



const AllProperties = (props) => {

    // const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        console.log('checking Use Effect ')
        setLoading(false)
        console.log(props)
        props.getProperties()
        setLoading(true)
    },[])

  return (
    <> 
        <div className="container-fluid container-bg pd-40 ">
            <div className="row pt-5 pb-5">
                <div className="col-md-12 text-center">
                    <div className="st-title">
                        Properties 
                    </div>
                </div>
            </div>

            {/* Search and Map  */}
            <div className="row">

                <div className="col-md-6 text-center">
                    <div className="">
                        <div className="black-circle ">
                            {/* Search Maped */}
                        </div>
                    </div>
                </div>

                <div className="col-md-6 text-center">
                    <div className="">
                        <div className="white-circle ">
                            {/* Mapped Views */}
                            {/* <StMap data={data} center={{ lat: 59.339025, lng: 18.065818 }} zoom={4} /> */}
                        </div>
                    </div>
                </div>

                <div className="col-md-12 text-center pt-5">
                    <p style={{ color: 'red'}}> More Option </p>
                </div>
            </div>

            <hr />

            <div className="row pt-5 pb-5">
                <PropertiesCard properties={''} />
                <PropertiesCard properties={''} />
                <PropertiesCard properties={''} />
                <PropertiesCard properties={''} />
            </div>
            
        </div>
      
        <Footer />
    </>
  )
}





// export default MyProperties

const mapStateToProps = (state) => {
    console.log('stated called')
    console.log(state)
    console.log('state called')

    return {
      loading: state.loading, 
      properties: state.properties,
    };
  };
  
export default connect(mapStateToProps, { getProperties })(AllProperties);

