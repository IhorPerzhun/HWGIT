import { iconUrlFromCode } from '../../ApiData/ApiData'

const Forecast = ({title,items}) => {
  return (
    <div>
        <div className='forecastContainer '>
            <p className='forecastTitle'>{title}</p>
        </div>
        <hr className='my-2' />
        <div className='flex flex-grow items-center justify-between text-white '>
            {items.map(item =>(
                <div className='flex flex-col items-center justify-center pb-10'>
                  <p className='forecastItem'>{item.title}</p>
                  <img src={iconUrlFromCode(item.icon)} className='w-12 my-1' alt="" />
                  <p className='forecastTemp'>{`${item.temp.toFixed()}°`}</p>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Forecast