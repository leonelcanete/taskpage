import useVisible from '../hooks/useVisible'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle as farCircle} from '@fortawesome/free-regular-svg-icons'

const Urgencies = ({index, updateTask, state, color}) => {

    const {refVisible, isVisible, setIsVisible} = useVisible(false)

    function handleUrgency(e, index, value){
        setIsVisible(!isVisible)
        updateTask(e, index, 'state', value)
        updateTask(e, index, 'color', e.target.getAttribute('data-color'))
    }

    return (
        <>
        <FontAwesomeIcon icon={farCircle} className='circle-icon-state fa-3x' style={{color: color==='#0466c8' ? 'black' : color}}/>
        <h1 style={{color: color==='#0466c8' ? 'black' : color}} onClick={ () => setIsVisible(!isVisible)}>{state}</h1>
        {isVisible &&
        <div className='urgencies-list' ref = {refVisible}>
            <span className='urgency' style={{color: 'red'}} data-color='red' onClick={e => handleUrgency(e, index, 'URGENTE')}>URGENTE</span>
            <span className='urgency' style={{color: '#0466c7'}} data-color='#0466c7' onClick={e => handleUrgency(e, index, 'EN PROGRESO')}>EN PROGRESO</span>
            <span className='urgency' style={{color: 'green'}} data-color='green' onClick={e => handleUrgency(e, index, 'COMPLETADO')}>COMPLETADO</span>
        </div>}
        </>
      );
}
 
export default Urgencies;