import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {displayText, tabId} = tabDetails
  const onChangeTab = () => {
    clickTabItem(tabId)
  }
  const activeTabClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="list-item">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onChangeTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
