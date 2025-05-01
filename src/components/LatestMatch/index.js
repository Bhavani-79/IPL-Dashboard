// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props

  const {
    competingTeam,
    competingTeamLogo,
    date,
    result,
    umpires,
    venue,
    firstInnings,
    secondInnings,
    manOfTheMatch,
  } = details
  const alt = `latest match ${competingTeam}`
  return (
    <li className="list">
      <div className="hide-match-details">
        <div className="match-details">
          <p className="team-heading">{competingTeam}</p>
          <p className="date-para">{date}</p>
          <p className="para">{venue}</p>
          <p className="para">{result}</p>
        </div>
        <img alt={alt} src={competingTeamLogo} className="latest-match-logo" />
      </div>
      <hr className="hr-line" />

      <div className="inning-container">
        <p className="para">First Innings</p>
        <p className="para">{firstInnings}</p>
        <p className="para">Second Innings</p>
        <p className="para">{secondInnings}</p>
        <p className="para">Man Of The Match</p>
        <p className="para">{manOfTheMatch}</p>
        <p className="para">Umpires</p>
        <p className="para">{umpires}</p>
      </div>
    </li>
  )
}

export default LatestMatch
