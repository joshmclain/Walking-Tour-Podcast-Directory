

const LocationInfoBox = ({info}) => {

  return (
    <div className="location-info">
      <h2>{info.title}</h2>
      <ul>
        <li>Length: {info.length}</li>
        <li>Start:  {info.start}</li>
        <li>End:  {info.end} </li>
        <li>Walkability: {info.walkability}</li>
        <li><a href={info.rss} target="_blank" rel="noreferrer"> RSS </a></li>
        <li><a href={info.link} target="_blank" rel="noreferrer">Link</a></li>
        

      </ul>
      
    </div>
  )
}

export default LocationInfoBox
