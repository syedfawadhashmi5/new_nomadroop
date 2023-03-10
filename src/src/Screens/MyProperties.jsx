import { Component } from 'react'

import { connect } from "react-redux";
import { getAllProperties, deleteProperty } from "../actions/properties";

import SearchIcon from '@mui/icons-material/Search';

import MyPropertyCard from '../Components/MyPropertyCard';
import { Button } from '@mui/material';


class MyProperties extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllProperties();
  }

  async removeProperty(id) {
    await this.props.deleteProperty(id)
  }


  render() {
    const { loading , properties } = this.props;

    console.log(loading)
  
    return (
      <div>
          <div className='row'>
                <div className='col-md-7 col-12'>
                    <div className='search-form-div'>
                      <SearchIcon id="color-mistake" />
                      <input placeholder='Search listing' id='other-search' />
                      <Button label="Search" className='ms-3 round-border-button' variant="contained">Search</Button>
                    </div>
                </div>
            </div>    


            <div className='row'>
                { properties && properties.length > 0 ? properties.map((property, ind) => (
                  <div className='col-12' key={ind}>
                    <MyPropertyCard property={property} deleteAction={(id) => this.removeProperty(id)} />
                  </div>
                )) : <div className='text-center'>
                    <h2>You have no property available</h2>
                  </div>}
                
            </div>
      </div>
    )
 }
}

// export default MyProperties

const mapStateToProps = (state) => {
  return {
    loading: state.propertyData.loading, 
    properties: state.propertyData.properties,
  };
};

export default connect(mapStateToProps, { getAllProperties, deleteProperty })(MyProperties);

// export default connect(null, { getAllProperties })(MyProperties);
