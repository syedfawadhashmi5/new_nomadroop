
import avt from '../../images/avt.webp';

const UserImage = (props) => {

    if(props.url){
        let url = "http://localhost:3001/" + props.url 
        console.log(url)
        return(
            <>
                <img src={url} alt="Avatar" className="img-fluid full-round avt-image" />
            </>
        )
      
    }
    return(
        <>
            <img src={avt} alt="Avatar" className="img-fluid full-round avt-image" />
        </>
    )
}

export default UserImage