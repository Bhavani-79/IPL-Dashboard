// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamCardList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamCard()
  }

  getTeamCard = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImgUrl: each.team_image_url,
    }))

    this.setState({teamCardList: updatedData, isLoading: false})
  }

  render() {
    const {teamCardList, isLoading} = this.state
    return (
      <div className="main-container">
        <div className="logo-container">
          <img
            className="logo"
            alt="ipl logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="card-unorder">
            {teamCardList.map(each => (
              <TeamCard details={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
