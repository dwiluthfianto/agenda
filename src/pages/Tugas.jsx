import Assignments from "@features/components/content/Assignments";
import Footer from "@features/components/footer/Footer";
import Navbar from "@features/components/navbar/Navbar";
import AddTodo from "@features/components/todo/AddTodo";
import { useState } from "react";

const Tugas = ({themeToggle, theme}) => {
    const [addTodo, setAddTodo] = useState(false)

    const handleClick = () => {
        setAddTodo(!addTodo);
    }

    return ( 
        <div className="relative">
            <AddTodo closeAddTodo={handleClick} isClose={addTodo}/>
            <Navbar themeToggle={themeToggle} theme={theme}/>
            <Assignments openAddTodo={handleClick}/>
            <Footer/>
        </div>
     );
}
 
export default Tugas;