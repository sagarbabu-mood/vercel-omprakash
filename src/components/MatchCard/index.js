// Write your code here
import './index.css'

import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {teamMatchList} = this.props
    const {
      result,
      competingTeam,
      competingTeamLogo,
      matchStatus,
    } = teamMatchList

    return (
      <li className="list-card">
        <img
          src={competingTeamLogo}
          alt="competingTeam"
          className="match-image"
        />
        <p className="match-name">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className="status">{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
