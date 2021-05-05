import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import {faChevronCircleDown, faBriefcase, faHome, faGraduationCap, faRunning, faPaperPlane, faBars} from '@fortawesome/free-solid-svg-icons';
import useVisible from "../hooks/useVisible";

const Categories = ({updateTask, index, categories, color}) => {
    const {refVisible, isVisible, setIsVisible} = useVisible(false);

    function handleCategories(e, index, value, icon){
        setIsVisible(!isVisible);
        updateTask(e, index, 'categories', value, true, icon)
    }

    library.add(faHome, faBriefcase, faGraduationCap, faRunning, faPaperPlane, faBars)

    return (
        <div className='choose-categories' onClick={ () => setIsVisible(!isVisible)}>
            <FontAwesomeIcon icon={['fas', categories['icon']]}/>
            <h4>{categories['default']}</h4>
            <FontAwesomeIcon icon={faChevronCircleDown}/>
            {isVisible &&
                <div className='categories-container'ref={refVisible}>
                    <span onClick={(e) => handleCategories(e, index, 'Hogar', 'home')} className='category'><FontAwesomeIcon icon={faHome} className='category-icon'/>Hogar</span>
                    <span onClick={(e) => handleCategories(e, index, 'Trabajo', 'briefcase')}className='category'><FontAwesomeIcon icon={faBriefcase} className='category-icon'/>Trabajo</span>
                    <span onClick={(e) => handleCategories(e, index, 'Colegio', 'graduation-cap')}className='category'><FontAwesomeIcon icon={faGraduationCap} className='category-icon'/>Colegio</span>
                    <span onClick={(e) => handleCategories(e, index, 'Salud & Fitness', 'running')}className='category'><FontAwesomeIcon icon={faRunning} className='category-icon'/>Salud {'&'} Fitness</span>
                    <span onClick={(e) => handleCategories(e, index, 'Productividad', 'paper-plane')}className='category'><FontAwesomeIcon icon={faPaperPlane} className='category-icon'/>Productividad</span>
                </div>
            }
        </div>
     );
}
 
export default Categories;