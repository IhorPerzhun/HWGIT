import { Button } from "../Button";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  
  const pageNumber = []  
  
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumber.push(i)
  }

  return (
    <div className="flex gap-2 justify-center">
        {
            pageNumber.map(number => (<Button  key={number} onClick={() => paginate(number)} appearance={number === pageNumber ? 'success' : undefined} >{number}</Button>))
        }
        
    </div>
  )
}

export default Pagination