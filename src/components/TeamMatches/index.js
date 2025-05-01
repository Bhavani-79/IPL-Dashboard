import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: {},
    recentMatches: [],
    bannerUrl: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    console.log(`https://apis.ccbp.in/ipl/${id}`)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const value = await response.json()

    const latestMatch = value.latest_match_details

    const updatedLatestMatches = {
      competingTeam: latestMatch.competing_team,
      competingTeamLogo: latestMatch.competing_team_logo,
      date: latestMatch.date,
      id: latestMatch.id,
      firstInnings: latestMatch.first_innings,
      manOfTheMatch: latestMatch.man_of_the_match,
      matchStatus: latestMatch.match_status,
      result: latestMatch.result,
      secondInnings: latestMatch.second_innings,
      umpires: latestMatch.umpires,
      venue: latestMatch.venue,
    }

    const recentMatchDetails = value.recent_matches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      id: each.id,
      firstInnings: each.first_innings,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))
    const url = value.team_banner_url
    this.setState({
      latestMatchDetails: updatedLatestMatches,
      recentMatches: recentMatchDetails,
      bannerUrl: url,
      isLoading: false,
    })
  }

  render() {
    const {bannerUrl, recentMatches, isLoading, latestMatchDetails} = this.state

    return (
      <div className="teamMatches-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" height={50} width={50} color="#ffffff" />
          </div>
        ) : (
          <>
            <img className="banner" src={bannerUrl} alt="team banner" />
            <p className="para">Latest Matches</p>
            <LatestMatch
              details={latestMatchDetails}
              key={latestMatchDetails.id}
            />
            <ul className="recent-matches">
              {recentMatches.map(each => (
                <MatchCard details={each} key={each.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
