import { Services } from 'components/Services';
import './App.css';
import { Home, About, Events, Products, Contact } from 'pages'
import { Route, Routes } from "react-router-dom";
import Whoops404 from 'Whoops404';
import { History } from 'components/History';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} >
          <Route path='services' element={<Services />} />
          <Route path='history' element={<History />} />
        </Route>
        <Route path='events' element={<Events />} />
        <Route path='products' element={<Products />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<Whoops404 />} />

      </Routes>

    </div>
  );
}

export default App;
/*
import GitUserByFetch from 'components/GitUserByFetch';
<GitUserByFetch loginId={"nasms018"} />
*/