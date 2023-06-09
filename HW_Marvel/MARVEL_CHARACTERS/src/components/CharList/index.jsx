import { useEffect, useState } from "react"
import Loader from "../Loader";
import Card from "../Card";
import CharSearch from "../CharSearch";
import Pagination from "../Pagination";
import axios from 'axios'
import md5 from 'crypto-js/md5'



function CharList() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage ] = useState(1)
  const [itemsPerPage] = useState(20)

  const [query, setQuery] = useState('')
//
 // const hash = "ff1cab08b8ca8299e79865cf73a9d07f"
//https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=d8c8aeda32fd7df9b596f34f1971c713&hash=${hash}


//API URL
const publicKey = 'd8c8aeda32fd7df9b596f34f1971c713'
const privateKey = '365dbc80567eecc0bad3fc3d371b4c1fe72fa7ff'
const ts = Date.now().toString();
const hash = md5(ts+privateKey+publicKey);
  
//const accessToken = '6326176517461241'

  useEffect( () => {
    
    const fetch = async() =>{
      if (query===''){
        const result = await axios(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=d8c8aeda32fd7df9b596f34f1971c713&hash=${hash}`)
        console.log(result.data);
        setItems(result.data)
        setIsLoading(false);
      }else {
        const result = await axios(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=spider%20ma&ts=1&apikey=d8c8aeda32fd7df9b596f34f1971c713&hash=${hash}`)
        console.log(result.data.data.results);
        setItems(result.data.data.results)
        setIsLoading(false);
      }
      (error) => {
        setIsLoading(true);
        setError(error);
      } 
    }

    fetch()
  }, [query])


  const lastItemsIndex = currentPage * itemsPerPage // 20 = 1 * 20
  const firstItemsIndex = lastItemsIndex - itemsPerPage // 0 = 20 - 20 
  const currentItems = items.slice(firstItemsIndex, lastItemsIndex)
  const paginate = pageNumber => setCurrentPage(pageNumber)
  
  
  

  if (error) {
    return <>{error.message}</>;
  } else {
    return (
      <section className="dark:bg-black-800 ">
        <div className="container mx-auto dark:bg-black-800">
          <h2 className="mb-3" >MARVEL CHARACTERS LIST</h2>
          <CharSearch search={(q)=>setQuery(q)}/>
        </div>
        <div className="flex container mx-auto mb-10">
          {isLoading ? <Loader /> : <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
            {items.map(items =>
            <Card key={items.id} data = {items} />
              )}
  
          </div> }
        
        </div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={items.length}
          paginate={paginate}
          />
      </section>
    )
  }   

  
}

export default CharList



