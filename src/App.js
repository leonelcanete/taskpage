import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Taskcontent from './components/Taskcontent'
import useLocalStorage from './hooks/useLocalStorage';
import {useState} from 'react';

function App() {
  const {addUsername, storage} = useLocalStorage('name')
  const [search, setSearch] = useState('')
  const [selected_cat, setCategories] = useState('')
  
  function searchTasks(e){
    const str = e.target.value.replace(/\s+/g, '')
    setSearch(str)
  }

  function searchCategories(value){
    setCategories(value)
  }

  return (
    <div className="App">
      <Sidebar searchCategories={searchCategories} addUsername= {addUsername} name = {storage}/>
      <Navbar searchTasks={searchTasks}  addUsername= {addUsername} name = {storage}/>
      <Taskcontent search={search} selected_cat={selected_cat} searchCategories={searchCategories}/>
    </div>
  );
}

export default App;
