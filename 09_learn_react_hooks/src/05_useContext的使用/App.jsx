import { memo, useContext } from 'react'
import { ThemeContext, UserContext } from './context'

function App() {
  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)

  console.log('user', user)
  console.log('theme', theme)

  return (
    <div>
      <h2>User: {user.name}-{user.level}</h2>
      <h2 style={{color: theme.color, fontSize: theme.size}}>Theme</h2>
    </div>
  )
}

export default memo(App)
