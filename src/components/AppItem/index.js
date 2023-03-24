import './index.css'

const AppItem = props => {
  const {appItemDetails} = props
  const {appName, imageUrl, category} = appItemDetails
  return (
    <li className="search-list">
      <img src={imageUrl} alt={appName} className="pic-edit" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
