import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Taskcontent from './components/Taskcontent'
import useLocalStorage from './hooks/useLocalStorage';
import {useState} from 'react';

function App() {
  const {addUsername, storage} = useLocalStorage('name')
  const [search, setSearch] = useState('')
  
  function searchTasks(e){
    const str = e.target.value.replace(/\s+/g, '')
    setSearch(str)
  }

  return (
    <div className="App">
      <Sidebar addUsername= {addUsername} name = {storage}/>
      <Navbar searchTasks={searchTasks}  addUsername= {addUsername} name = {storage}/>
      <Taskcontent search={search}/>
    </div>
  );
}

export default App;
