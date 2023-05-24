import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import { validationSchema } from "./validSkhema";


function Form() {

  const { register, handleSubmit, reset, formState: { errors } } = useForm ({
    resolver: yupResolver(validationSchema)
    });


  const handleSubmitForm = () => {
    reset();
  }

  return (
    <form className="p-5 flex flex-col wrap gap-10 container mx-auto w-2/3 w-[620px]" onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="flex justify-between items-center">
            <input type="text"  {...register('name')}  placeholder="Імя та прізвище" className="outline-0  focus:border-green-500 w-[280px]" /> 
            <input type="text"  {...register('email')} placeholder="Email" className="outline-0  focus:border-green-500 w-[280px]" />
        </div>
        
        <input type="tel"  {...register('tel')} placeholder="Телефон у форматі (+380)" className="outline-0  focus:border-green-500 " />
        <textarea type="text" {...register('message')} placeholder="Повідомлення" className="outline-0  focus:border-green-500" />
        <div className="flex gap-3"> 
            <input type="checkbox" name="checkbox" id="checkbox" className="bg-green"/>
            <label className="text-green" htmlFor="checkbox">Надсилати мені оновлення про академію</label>
        </div>
        <button className=" focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-big px-5 py-5 mr-2" type="submit">Надіслати</button>
    </form>
  )
}



export default Form 

