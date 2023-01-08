const HomeUi = ({data}) => {
    return ( 
        <div>
            {data.map(item => (
            <div key={item._id}>
            <h2>{item.title}</h2>
            </div>
        ))}
     </div>
     );
}
 
export default HomeUi;