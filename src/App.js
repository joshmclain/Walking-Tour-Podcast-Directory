import { useState, useEffect} from 'react'
import Map from './components/Map'
import Loader from './components/Loader'
import Header from './components/Header'
import axios from 'axios'


function App() {
  
  const [loading, setLoading] = useState(false)
  const [podData, setPodData] = useState([])

  useEffect(() => {
    const fetchEvents = async() => {
      setLoading(true)


      try {
        const response = await axios.get('pods.json');
        console.log(response, "fetch");
        setPodData(response.data);
      } catch (error) {
        console.error(error);
      }
      
      setLoading(false)
    }
    fetchEvents()
    
  }, [])
  
  return (
    <div>
      <Header />
     {!loading ? <Map eventData={podData} /> :<Loader />}
         </div>
  );
}

export default App;
