// Write your code here
import {Component} from 'react'

import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      umpires,
      venue,
      result,
    } = latestMatchDetails
    return (
      <div className="latest-match-card-container">
        <h1 className="heading">Latest Match</h1>
        <div className="latest-match-card">
          <div className="latest-match-logo-container">
            <div className="latest-match-logo-details">
              <p className="team-name">{competingTeam}</p>
              <p className="date">{date}</p>
              <p className="venue">{venue}</p>
              <p className="result">{result}</p>
            </div>
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="team-logo"
            />
          </div>
          <div className="latest-match-detail-info">
            <div className="info-item">
              <p className="label">firstInnings</p>
              <p className="venue">{firstInnings}</p>
            </div>
            <div className="info-item">
              <p className="label">second Innings</p>
              <p className="venue">{secondInnings}</p>
            </div>
            <div className="info-item">
              <p className="label">Man of The Match</p>
              <p className="venue">{manOfTheMatch}</p>
            </div>
            <div className="info-item">
              <p className="label">umpires</p>
              <p className="venue">{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LatestMatch
