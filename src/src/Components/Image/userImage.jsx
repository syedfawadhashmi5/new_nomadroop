
import avt from '../../images/avt.webp';

const UserImage = (props) => {

    if(props.url){
        let url = "http://localhost:3001/" + props.url 
        console.log(url)
        return(
            <>
            <div className="upper-img">
                <img src={url} alt="" className="profile-img" />
            </div>
        </>
        )
      
    }
    return(
        <>
            <div className="upper-img">
                <img src={avt} alt="" className="profile-img" />
            </div>
        </>
    )
}

export default UserImage