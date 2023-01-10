const HomeUi = ({data}) => {
    return ( 
        <div>
            {data.map(item => (
            <div key={item._id}>
                    <h2 className='text-xs text-orange-400'>{item.title}</h2>
                    <p>{item.author}</p>
                    <pre>{item.publishedDDate}</pre>
            </div>
        ))}
     </div>
     );
}
 
export default HomeUi;