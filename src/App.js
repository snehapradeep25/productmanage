import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Route,Routes}
from 'react-router-dom';
import ProductPage from './components6/ProductPage';
import AddProducts from './components6/AddProducts';
import Header from './components6/Header';



function App() {
  return (
  <>
  <Header/>
  
  <BrowserRouter>
  <Routes>
    <Route path='/AddProducts' element={<AddProducts/>}></Route>
  </Routes>
  </BrowserRouter>
  
  <ProductPage/>
  <AddProducts/>
  </>
  );
}

export default App;
