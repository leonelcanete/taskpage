import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = (props) => {
    return ( 
        <div className="sidebar-container">
            <div className='sidebar-content'>
                <section className='sidebar-title'>
                    <FontAwesomeIcon icon={faUser} className='fa-2x'/>
                    <h2>{props.name}</h2>
                    <h3>Mis tareas</h3>
                </section>
                <section className='sidebar-categories-container'>
                </section>
            </div>
        </div>
    );
}
 
export default Sidebar;