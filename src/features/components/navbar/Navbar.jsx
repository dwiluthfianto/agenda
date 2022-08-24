import { Link } from "react-router-dom";

const Navbar = ({ themeToggle, theme }) => {
  return (
    <div className="max-w-sm mx-auto flex justify-between p-[10px] items-center">
      <h1 className="text-[32px] font-bold dark:text-white">agenda.</h1>
      <div className="flex gap-2">
        <Link to="/">
          <div
            name="jadwal"
            className="flex justify-center items-center w-9 h-9 border border-gray-300 rounded-md hover:bg-gray-100 dark:text-white dark:hover:bg-gray-50 dark:hover:text-black"
          >
            <i className="ri-file-list-line ri-xl"></i>
          </div>
        </Link>
        <Link to="/tugas">
          <div className="flex justify-center items-center w-9 h-9 border border-gray-300 rounded-md hover:bg-gray-100 dark:text-white dark:hover:bg-gray-50 dark:hover:text-black">
            <i className="ri-calendar-todo-line ri-xl"></i>
          </div>
        </Link>
        <button onClick={themeToggle}>
          <div className="flex justify-center items-center w-9 h-9 bg-slate-800 text-white rounded-md hover:bg-slate-600 dark:bg-orange-500 dark:hover:bg-orange-300">
            {theme === "dark" ? (
                <i class="ri-sun-line ri-xl"></i>
                ) : (
                <i className="ri-moon-line ri-xl"></i>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
