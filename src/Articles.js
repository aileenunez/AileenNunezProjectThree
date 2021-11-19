function Articles(props){

return(
    <>
    <div className='story'>
    <p>{props.title}</p>
    <img src={props.img} alt={props.alt} />
    <a href={props.url}>Article Link</a>
    <p>{props.description}</p>
    <p> By {props.author}</p>
  </div>
  
</>)


}

export default Articles