import { DeleteTodolist, UpdateTodolist } from "@redux/actions/todoAction";
import { useDispatch } from "react-redux";

const TodoSuccess = ({ item }) => {
  const dispatch = useDispatch();
  const clickToUnsuccess = () => {
    dispatch(UpdateTodolist(item));
  };

  const clickToDelete = () => {
    dispatch(DeleteTodolist(item));
  };

  if (item.isSuccess === true) {
    return (
      <div className="flex justify-between items-center bg-slate-100 rounded-md px-[10px] py-[18px] dark:bg-slate-600">
        <div className="flex items-center gap-2">
          <button
            onClick={clickToUnsuccess}
            className="flex justify-center items-center cursor-pointer"
          >
            <i className="ri-checkbox-circle-fill ri-xl cursor-pointer"></i>
          </button>

          <div>
            <p className="text-[18px] font-bold">{item.title}</p>
            <div className="flex gap-1 text-[12px] text-slate-800 items-center dark:text-slate-300">
              <p>{item.date}</p>
              <span className="w-[6px] h-[6px] border border-slate-800 rounded-full dark:border-slate-300"></span>
              <p>{item.time}</p>
            </div>
          </div>
        </div>
        <button
          onClick={clickToDelete}
          className="flex justify-center items-center text-red-600 cursor-pointer"
        >
          <i className="ri-delete-bin-line ri-xl"></i>
        </button>
      </div>
    );
  }
};

export default TodoSuccess;
