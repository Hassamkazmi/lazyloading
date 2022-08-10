import './App.css';
import React,{Suspense} from 'react';
import Loader from './Components/Loader';
const Products = React.lazy(() => import('./Components/Products'))
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>{<Loader/>}</div>}>
      <Products/>
      </Suspense>
      
    </div>
  );
}

export default App;
