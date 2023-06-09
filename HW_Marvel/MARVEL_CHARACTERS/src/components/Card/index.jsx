
const Card = ( {data, ...props}) => {
  //console.log(`data ${data}`);

  if (!data) {
    return null
  }



  return (
    
    <div className="flex-col flex max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" {...props}>
        <a href="#">
            <img className="rounded-t-lg" src={data.thumbnail.path + "/portrait_uncanny.jpg"} alt="chatacter_icon" />
        </a>
        <div className="p-5 flex flex-col aligne-start flex-auto">
            <a href="#">
                <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
            </a>
            <a href="#" className=" inline-flex mt-auto items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-green-700 dark:focus:ring-red-800">
                Read more
            </a>
        </div>
    </div>

  )
}

export default Card

//{item.thumbnail.path + "/portrait_xlarge.jpg"}