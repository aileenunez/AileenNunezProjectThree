//Individual article results rendered from catergory/keyword search 

function Articles(props) {

  return (
    <>
      <div className='individualArticle'>
        <img src={props.img} alt={props.alt} />
        <p>{props.date}</p>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <button><a href={props.url}>Article Link</a></button>
      </div>
    </>
  )
}

export default Articles