import { formatToLocalTime } from '../../ApiData/ApiData'

const TimeAndLocation = ({weather:{dt, timezone, name, country}}) => {
  return (
    <div>
        <div className='date'>
            <p className='dateText'>
                {formatToLocalTime(dt, timezone)}
            </p>
        </div>
        <div className='currentCity'>
            <p className='currentCityText'>
               {`${name}, ${country}`}
            </p>
        </div>
    </div>
  )
}

export default TimeAndLocation