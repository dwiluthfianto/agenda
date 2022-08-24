const Schedule = ({data}) => {
    return ( 
        <div className="mt-2">
            <h1 className="text-[24px]">{data.day}</h1>
            {data.jadwal.map(item => (
                <div className="flex gap-2 items-center">
                    <span className={`w-[4px] h-[40px] bg-indigo-600 rounded-full`}></span>
                    <div>
                        <p className="text-[18px] font-bold">{item.matkul}</p>
                        <div className="flex gap-[5px] items-center">
                            <span className="w-[6px] h-[6px] bg-slate-800 rounded-full dark:bg-slate-400"></span>
                            <span className="text-[12px] text-slate-800 dark:text-slate-400">{item.jam}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default Schedule;