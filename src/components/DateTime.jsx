import DatePicker, { registerLocale} from "react-datepicker";
import { useRef, forwardRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import es from 'date-fns/locale/es';

registerLocale('es', es)

const DateTime = ({index, updateTask, time}) => {
    const [startDate, setStartDate] = useState(null);

    const ref = useRef();

    function dateHandler(date, e){
        setStartDate(date)
        const fullTime = date.toLocaleDateString('es-ES', {day:'numeric', year: 'numeric', month:'long'}) + ' a las ' + date.toLocaleTimeString('es-ES');
        updateTask(e, index, 'date', fullTime);
    };

    const CalendarIcon = forwardRef(({ onClick }, ref) => (
        <FontAwesomeIcon icon={faCalendarAlt}  className='fa-lg' onClick={onClick} forwardedRef={ref}/>
      )
  )

    return (
    <>
    <DatePicker selected={startDate} onChange={(date, ev) => dateHandler(date, ev)} locale="es"
     customInput={<CalendarIcon ref={ref}/>} timeCaption="Horario" dateFormat="dd/mm/yyyy h:mm" 
    popperModifiers={{preventOverflow: {enabled: true,},}} showTimeSelect/>
    <h4>{time}</h4>
    </>
    );
}
 
export default DateTime;