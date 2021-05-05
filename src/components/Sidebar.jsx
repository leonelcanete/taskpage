import { faUser, faHome, faBriefcase, faRunning, faGraduationCap, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
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
                    <span onClick={() => props.searchCategories('HOGAR')} className='sidebar-select-categories'><FontAwesomeIcon icon={faHome} className='category-icon fa-2x'/>HOGAR</span>
                    <span onClick={() => props.searchCategories('TRABAJO')} className='sidebar-select-categories'><FontAwesomeIcon icon={faBriefcase} className='category-icon fa-2x'/>TRABAJO</span>
                    <span onClick={() => props.searchCategories('HEALTH & FITNESS')} className='sidebar-select-categories'><FontAwesomeIcon icon={faRunning} className='category-icon fa-2x'/>HEALTH {'&'} FITNESS</span>
                    <span onClick={() => props.searchCategories('COLEGIO')} className='sidebar-select-categories'><FontAwesomeIcon icon={faGraduationCap} className='category-icon fa-2x'/>COLEGIO</span>
                    <span onClick={() => props.searchCategories('PRODUCTIVIDAD')} className='sidebar-select-categories'><FontAwesomeIcon icon={faPaperPlane} className='category-icon fa-2x'/>PRODUCTIVIDAD</span>
                </section>
            </div>
        </div>
    );
}
 
export default Sidebar;