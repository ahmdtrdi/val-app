import {Routes, Route} from 'react-router-dom'

import Home from './Pages/Home';
import Thankyou from './Pages/Thankyou';
import Old from './Pages/Fisrtflower';
import New from './Pages/Newflower';
import Pick from './Pages/Pickdate';
import Place from './Pages/Place';
import Tempat from './Pages/Tempat';
import End from './Pages/Tamat';

function App() {
  return (
    <div>
     <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/thankyou" Component={Thankyou} />
      <Route path="/thankyou/first-flower" Component={Old} />
      <Route path="/thankyou/first-flower/new-chapter" Component={New} />
      <Route path="/thankyou/first-flower/new-chapter/pick-date" Component={Pick} />
      <Route path="/thankyou/first-flower/new-chapter/pick-date/place" Component={Place} />
      <Route path="/thankyou/first-flower/new-chapter/pick-date/place/tempat" Component={Tempat} />
      <Route path="/thankyou/first-flower/new-chapter/pick-date/place/tempat/end" Component={End} />

      </Routes>
    </div>
  )
}

export default App;
