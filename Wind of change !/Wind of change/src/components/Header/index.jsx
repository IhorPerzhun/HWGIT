import search from "../../assets/images/search.svg";
import { Link } from 'react-router-dom';


import './Header.css'

const Header = ({ handleSubmit, handleValidation, formValue, formError }) => {
    return (
        <>
        <section className="title">
            <img src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" alt="logo" />
            <p>with</p>
            <h1>Wind of change</h1>
        </section>
        <section className="SearchHeader">
            <form className="SearchForm" onSubmit={handleSubmit}>
                <input className="SearchInput" type="text" name="searchedLocation" onChange={handleValidation} value={formValue.searchedLocation} />
                <button className="SearchButton" type="submit"><img className="SearchIcon" onClick={handleSubmit} src={search} alt="" aria-hidden="true" /><span className="hidden-label">search</span></button>
            </form>
            <p>{formError.searchedLocation}</p>
            <div className='navmenu'>
            <h3>
              <Link to="/">
                сurrent forecast
              </Link>
            </h3>
            <h3>
              <Link to="fiveday">
                5 day forecast
              </Link>
            </h3>
            </div>
            
        </section>
        </>

    )
}

export default Header;