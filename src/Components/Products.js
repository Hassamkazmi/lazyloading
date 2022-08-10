import React,{Suspense,useEffect,useState} from 'react'
import axios from 'axios';
import Loader from './Loader';

const Products = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://jsonplaceholder.typicode.com/photos',
        );
        setData(result.data);
          console.log(result);
      };
      fetchData();
    }, []);
    console.log("Data",data.data)
  return (
    <div>
    {
        data.map((item) => {
            return(
                <Suspense fallback={<>{<Loader/>}</>}>
                    <div key={item.id}>
                    <img src={item.url} alt="image"/>
                </div>
                </Suspense>
            )
        })
    }
    </div>
  )
}

export default Products
