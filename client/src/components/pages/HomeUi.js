const HomeUi = ({data}) => {
    return ( 
        <div>
            {data.map(item => (
                <div key={item._id} className="flex flex-col items-center">
                    <div className="flex flex-col w-1/4 border-b-2 pt-4 border-indigo-300">
                        <div className=" border-solid border-2 bg-slate-500 text-white">
                            <h2 className='flex h-48 justify-center items-center' >{item.title}</h2>
                        </div>
                        
                        <p>{item.author}</p>
                        <pre>{item.publishedDDate}</pre>
                    </div>
                    
            </div>
        ))}
     </div>
     );
}
 
export default HomeUi;