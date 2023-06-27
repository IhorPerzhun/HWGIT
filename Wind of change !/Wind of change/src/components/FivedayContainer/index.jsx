import ClipLoader from "react-spinners/ClipLoader";
import NotFound from "../../assets/images/not-found.png";

import "./FivedayContainer.css"




const FivedayContainer = ({ loading, noData }) => {
  return (
    <>
        {loading ?<ClipLoader
                className="loader"
                color="black"
                loading={loading}
                size={190}
                aria-label="Loading Spinner"
                data-testid="loader"
            /> : noData ?           <section className="CenterContainerBlock"><img src={NotFound} alt="" aria-hidden="true"/> <p>No such country found! Please try again </p></section> :
                <section className="CenterContainerBlock">
                   
                </section>}
    </>
    
  )
}

export default FivedayContainer