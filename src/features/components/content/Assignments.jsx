import { useSelector } from "react-redux";
import Todo from "../todo/Todo";
import TodoSuccess from "../todo/TodoSuccess";

const Assignments = ({openAddTodo}) => {
    const {todoList} = useSelector(state => state.todoReducer)


    return todoList && ( 
        <div className="relative max-w-sm mx-auto px-[10px] py-[18px] dark:text-white">
            <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                    <h1 className="text-[24px] font-bold">Assignments</h1>
                    <div onClick={openAddTodo} className="flex justify-center items-center w-9 h-9 border border-gray-300 rounded-md hover:bg-gray-100">
                        <i class="ri-add-fill ri-xl"></i>
                    </div>
                </div>
                {todoList.map(item => (
                    <Todo key={Math.random()} item={item} />
                )) || <div className="p-2 bg-green-500 text-white text-center"><p>Take a break 😄</p></div>}
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-[24px] font-bold">Completed</h1>
                {todoList.map(item => (
                        <TodoSuccess key={Math.random()} item={item} /> 
                ))}
            </div>
        </div>
     );
}
 
export default Assignments;