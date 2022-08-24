import { datas } from "src/data";
import Schedule from "../schedule/Schedule";

const Schedules = () => {
    return ( 
        <div className="max-w-sm mx-auto px-[10px] py-[18px] dark:text-white">
            <h1 className="text-2xl font-bold">Schedules</h1>
            {datas.map(data => (
                <Schedule data={data}/>
            ))}
        </div>
     );
}
 
export default Schedules;