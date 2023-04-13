// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickButton = () => {
    updateTabId(tabId)
  }

  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item-container">
      <button onClick={onClickButton} type="button" className={tabBtnClassName}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
