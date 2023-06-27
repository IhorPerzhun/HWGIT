
const TopButtons = ({setQuery}) => {

    const cities = [
        {
            id:1,
            title:'Lviv'
        },
        {
            id:2,
            title:'Ternopil'
        },
        {
            id:3,
            title:'Chernivtsi'
        },
        {
            id:4,
            title:'Ivano-Frankivsk'
        },
        {
            id:5,
            title:'Lutsk'
        }
    ]
  return (
    <div className='defaultCity'>
        {cities.map((city) =>(
            <button key={city.id} className='cityText text-white  font-medium hover:text-blue-400 ease-in-out duration-300'
            onClick={()=> setQuery({q: city.title})}>
                {city.title}</button>
        ))}
    </div>
  )
}

export default TopButtons