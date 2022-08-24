import Schedules from "@features/components/content/Schedules";
import Footer from "@features/components/footer/Footer";
import Navbar from "@features/components/navbar/Navbar";

const Home = ({themeToggle, theme}) => {
    return ( 
        <div className="max-w-screen-md mx-auto">
            <Navbar themeToggle={themeToggle} theme={theme}/>
            <Schedules/>
            <Footer/>
        </div>
     );
}
 
export default Home;