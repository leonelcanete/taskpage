import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Navbar = (props) => {

    return (
      <header id='navbar-container'>
        <div className='navbar-search'>
            <FontAwesomeIcon icon={faSearch} className='search-icon'/>
            <div className='navbar-input'>
              <input onChange={e => props.searchTasks(e)}type='text'></input>
              <div className="underline-input"></div>
              <label>Search</label>
            </div>
        </div>
        <div id='navbar-title'>
          <p>Bienvenido/a, {props.name ? null : 'ingresa tu nombre'}
            <input className='navbar-name' type='text' placeholder='aquí.' value={props.name} onChange= {e => props.addUsername(e)}/>
          </p>
        </div>
      </header>
    );
}
 
export default Navbar;