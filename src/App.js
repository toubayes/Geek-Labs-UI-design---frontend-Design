
import { useState } from 'react';
import './App.css';
import { Filter } from './Component/Filter';
import { Header } from './Component/Header';
import { SideBar } from './Component/Sidebar';
import { Main } from './Component/main';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showAside, setShowAside] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    
  };
  const toggleAside = () => {

    setShowAside(!showAside);
  };
  return (
    <div className="App">
    <div className='container'>
      <main className='fullpage'>
    <Header toggleSidebar={toggleSidebar} toggleAside={toggleAside} />
    <Main />
    </main>
    <SideBar showSidebar={showSidebar}/>
    <Filter showAside={showAside}/>
    </div>
</div>
  );
}

export default App;
