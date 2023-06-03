import {Link} from 'react-router-dom'

import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {Project} = props
  const {
    id,
    categoryId,
    title,
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = Project
  const getProjectDetails = () => (
    <>
      <img className="Projects-Img" src={imageUrl} alt="title" />
      <div className="card-titile-section">
        <h1>{projectTitle}</h1>
        <div className="duration-seciton">
          <AiFillCalendar className="timeLine-icon" />
          <p>{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <Link className="nav-link" to={projectUrl}>
        <p className="visit">Visit</p>
      </Link>
    </>
  )

  return <div className="Course-CardItem">{getProjectDetails()}</div>
}

export default ProjectTimelineCard
