import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import form from 'pages/form';
import Listing from 'pages/Listing';
import Navbar from  'componets/navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
        <Route path=":movieId" element={<form/>} />
        </Route>
      </Routes>
      </BrowserRouter>
  );
}
         
         
              
        
      
    
  


export default App;