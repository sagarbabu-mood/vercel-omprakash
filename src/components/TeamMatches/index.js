// Write your code here
import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {teamMatchList: [], isLoading: true}

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedMatch = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        id: data.id,
        umpires: data.umpires,
        result: data.result,
        manOfTheMatch: data.man_of_the_match,

        date: data.date,
        venue: data.venue,
        competingTeam: data.competing_team,
        competingTeamLogo: data.competing_team_logo,
        firstInnings: data.first_innings,
        secondInnings: data.second_innings,
        matchStatus: data.match_status,
      },
      recentMatches: data.recent_matches.map(each => ({
        umpires: each.umpires,
        result: each.result,
        manOfTheMatch: each.man_of_the_match,
        id: each.id,
        date: each.date,
        venue: each.venue,
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        firstInnings: each.first_innings,
        secondInnings: each.second_innings,
        matchStatus: each.match_status,
      })),
    }
    this.setState({teamMatchList: updatedMatch, isLoading: false})
  }

  renderTeamMatches = () => {
    const {teamMatchList} = this.state
    const {teamBannerUrl, latestMatchDetails} = teamMatchList
    return (
      <div className="team-match-container">
        <img src={teamBannerUrl} alt="team banner" className="banner-image" />
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        {this.renderRecentMatches()}
      </div>
    )
  }

  renderLoader = () => (
    <div className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderRecentMatches = () => {
    const {teamMatchList} = this.state
    const {recentMatches} = teamMatchList
    return (
      <ul className="ul-container">
        {recentMatches.map(each => (
          <MatchCard key={each.id} recentMatches={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`app-team-container ${id}`}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
