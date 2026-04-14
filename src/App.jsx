import AnalyzerPage from './pages/AnalyzerPage'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <AnalyzerPage />
      <Footer />
    </div>
  )
}

export default App