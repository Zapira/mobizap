// App.tsx
import './App.css'
import Content from './content/content'
import LeftBar from './shared/LeftBar'

function App() {
  return (
    <div className="flex">
      <LeftBar />
      <div className="flex-1 ml-64">
        <Content />
      </div>
    </div>
  )
}

export default App
