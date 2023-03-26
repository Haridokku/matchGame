import './index.css'

const ProjectItem = props => {
  const {projectDetails, checkingImage} = props
  const {thumbnailUrl, imageUrl} = projectDetails
  const onChecking = () => {
    checkingImage(imageUrl)
  }
  return (
    <li className="list-item">
      <button type="button" onClick={onChecking}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}
export default ProjectItem
