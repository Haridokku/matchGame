import './index.css'

const Header = props => {
  const {score, seconds} = props
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="logo"
          />
        </li>
      </ul>

      <div className="score-card">
        <p className="score">
          Score:<span className="seconds">{score}</span>
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
          className="time"
        />
        <p className="seconds">{seconds} sec</p>
      </div>
    </nav>
  )
}

export default Header

