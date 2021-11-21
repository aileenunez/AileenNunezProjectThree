//Article Results from API Search 

function Articles(props){

return(
    <>
    <div className='story'>
    <img src={props.img} alt={props.alt} />
    <p>{props.date}</p>
    <p>{props.title}</p>
    <p>{props.content}</p>
    <button><a href={props.url}>Article Link</a></button>
  </div>
  
</>)


}

export default Articles