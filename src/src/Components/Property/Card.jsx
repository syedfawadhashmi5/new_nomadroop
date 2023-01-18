
import img from '../../images/card-01.jpg'
import PlaceIcon from '@mui/icons-material/Place';
import SingleBedIcon from '@mui/icons-material/SingleBed';


const itemCard = ({ data }) => {

    return(
        <div className="col-md-3 pt-2 pb-2">
            <div className="item-top-padding">
                <div className="itemcard">
                    <div className="top-img">
                        <div className='card-img' style={{ backgroundImage: `url(${img})` }}>
                            <div className="top-action">
                                <div className='row'>
                                    <div className="action">
                                         Featured
                                    </div>
                                    <div className="action">
                                        Verified
                                    </div>
                                </div>
                            </div>
                            <div className="itemprice">
                                USD 300
                            </div>
                        </div>
                    </div>

                    <div className="item-user">
                        <div className="property-img-user">
                            <img src={img}></img>
                        </div>
                    </div>

                    <div className="item-content">
                        <div className="item-name">
                            Address New Temers  Address New Temers  Address New Temers
                            Address New Temers
                        </div>

                        <div className="item-address">
                            <PlaceIcon className="itemIcon" /> Where do you want to go?
                        </div>

                        <div className="item-type">
                            <SingleBedIcon className="itemIcon" /> Apartment / Private Room
                        </div>
                    </div>
                
                </div>

            </div>
        </div>
    )
}

export default itemCard;