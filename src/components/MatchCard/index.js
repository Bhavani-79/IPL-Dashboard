// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props

  const {
    competingTeam,
    competingTeamLogo,

    result,

    matchStatus,
  } = details

  const alt = `competing team ${competingTeam}`

  const className = matchStatus === 'Won' ? 'win' : 'loss'
  return (
    <li className="match-list">
      <img src={competingTeamLogo} alt={alt} className="match-logo" />
      <p className="team1-heading">{competingTeam}</p>
      <p className="para1">{result}</p>
      <p className={className}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
