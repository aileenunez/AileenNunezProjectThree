//Individual article results rendered from catergory/keyword search 

function Articles(props) {


  return (
      <div className='individualArticle'>
        <img src={props.img} alt={props.content} />
        <p className="date">{props.date}</p>
        <p><span>Source:</span> {props.source}</p>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <button><a target="blank" href={props.url}>Article Link</a></button>
      </div>
  )
}

export default Articles