import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import './Navbar.css';

const Navbar = () => {


  
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch('');
  };

  return (
    <div>
      <nav id="navbar">
        <div className='navnav'>
          <h2>
            <Link to="/">
              <BiCameraMovie />
              Popcorn TV
            </Link>
          </h2>
          <div className='navmenu'>
            <h3>
              <Link to="/">
                HOME
              </Link>
            </h3>
            <h3>
              <Link to="/">
               ABOUT
              </Link>
            </h3>
          </div>
          
        </div>

        <div className='navsearch'>

          <form onSubmit={handleSubmit}>
            
            <select>
              <option value="">Select a genre</option>
            </select>
            <select>
              <option value="">Select a year</option>
            </select>
            <select>
              <option value="">Select a rating</option>
            </select>   
            <input
              type="text"
              placeholder="Search a movie by title..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button type="submit">
              <BiSearchAlt2 />
            </button>
            
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
