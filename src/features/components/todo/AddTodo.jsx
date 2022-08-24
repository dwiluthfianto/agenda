import {SetTodolist} from "@redux/actions/todoAction";
import { useState } from "react";
import { useDispatch} from "react-redux";

const AddTodo = ({closeAddTodo, isClose}) => {
    const dispatch = useDispatch()
    const [tugas, setTugas] = useState({})
    const [alertNotification, setAlertNotification] = useState(false)

    const alert =() => {
        setAlertNotification(true)
        setInterval(()=> {
            setAlertNotification(false)
        }, 5000)
    }

    const handleChange = (e) =>{
        const value = e.target.value
        setTugas({
            ...tugas,
            id: new Date().getTime(),
            [e.target.name] : value,
            isSuccess: false
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(SetTodolist(tugas))
    }



    return ( 
        <div className={`${isClose ? "" : "hidden"} absolute p-[10px] w-full h-screen bg-white z-10`}>
            <div className="max-w-sm mx-auto">
                <div className="flex justify-between items-center">
                    <p className="text-[24px] font-bold">Add Asignment</p>
                    <div onClick={closeAddTodo} className="flex justify-center items-center w-9 h-9 border border-gray-300 rounded-md hover:bg-gray-100">
                        <i class="ri-subtract-fill ri-xl"></i>
                    </div>
                </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-[24px]">
                        <div className="flex flex-col text-[18px] ">
                            <span className="font-bold">Title</span>
                            <input name="title" onChange={handleChange} type="text" className="py-[12px] px-[10px] border-2 border-slate-800 rounded-xl"/>
                        </div>
                        <div className="flex flex-col text-[18px] ">
                            <span className="font-bold">Deadline</span>
                            <div className="flex justify-between items-center">
                                <input name="date" onChange={handleChange} type="date" className="w-[160px] py-[12px] px-[10px] border-2 border-slate-800 rounded-xl"/>
                                <span className="w-[9px] h-[9px] rounded-full border-2 border-slate-800"></span>
                                <input name="time" onChange={handleChange} type="time" className="w-[160px] py-[12px] px-[10px] border-2 border-slate-800 rounded-xl"/>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            {alertNotification ? <div className="py-[12px] px-3 bg-blue-500 text-white font-bold"> <p >Assingment Added!!</p> </div>  : <span></span>}
                            <div>
                                <button onClick={alert} className="px-10 py-[12px] bg-slate-800 text-white rounded-lg text-[18px] font-bold hover:bg-slate-700">Save</button>
                            </div>

                        </div>
                    </form>
            </div>
        </div>
     );
}
 
export default AddTodo;