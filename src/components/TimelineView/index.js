import {Chrono} from 'react-chrono'
import {Component} from 'react'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props

    return (
      <div className="MyJourney-containers">
        <h1 className="ccbp-description">MY JOURNEY OF CCBP 4.0</h1>
        <div className="MyJourney">
          <div className="chrono-journey">
            <Chrono mode="VERTICAL_ALTERNATING">
              {timelineItemsList.map(eachitem =>
                eachitem.categoryId === 'COURSE' ? (
                  <CourseTimelineCard key={eachitem.id} Course={eachitem} />
                ) : (
                  <ProjectTimelineCard key={eachitem.id} Project={eachitem} />
                ),
              )}
            </Chrono>
          </div>
        </div>
      </div>
    )
  }
}

export default TimelineView
