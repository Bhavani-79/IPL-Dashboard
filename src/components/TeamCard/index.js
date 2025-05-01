// Write your code here
import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {details} = props

  const {id, name, teamImgUrl} = details
  return (
    <Link className="link" to={`/team-matches/${id}`}>
      <li className="card-list">
        <img src={teamImgUrl} alt={name} className="teamCard-image" />
        <p className="teamCard-heading">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
