import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {Course} = props
  const {categoryId, courseTitle, description, duration, id, tagsList} = Course

  const getCourses = () => (
    <ul className="courses-section">
      {tagsList.map(eachitem => (
        <li className="course-item" key={eachitem.id}>
          {eachitem.name}
        </li>
      ))}
    </ul>
  )

  const getCourseDetails = () => (
    <>
      <div className="card-titile-section">
        <h1>{courseTitle}</h1>
        <div className="duration-seciton">
          <AiFillClockCircle className="timeLine-icon" />
          <p>{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      {getCourses()}
    </>
  )

  return <div className="Course-CardItem">{getCourseDetails()}</div>
}

export default CourseTimelineCard
