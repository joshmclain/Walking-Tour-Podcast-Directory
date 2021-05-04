import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/podcast'

const Header = () => {
  return (
    <header className="header">
      <h1><Icon icon={locationIcon} /> Walking Tour Podcasts</h1>
      
    </header>
  )
}

export default Header
