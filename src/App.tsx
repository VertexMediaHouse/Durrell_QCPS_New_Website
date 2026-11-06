import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import HowItWorksPage from './pages/HowItWorksPage'
import About from './pages/About'
import WhoWeHelp from './pages/WhoWeHelp'
import CashVsAgent from './pages/CashVsAgent'
import Areas from './pages/Areas'
import WhySellers from './pages/WhySellers'
import FaqPage from './pages/FaqPage'
import GetOffer from './pages/GetOffer'
import Legal from './pages/Legal'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/who-we-help" element={<WhoWeHelp />} />
        <Route path="/cash-vs-agent" element={<CashVsAgent />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/why-sellers-choose-us" element={<WhySellers />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/get-offer" element={<GetOffer />} />
        <Route path="/privacy-terms" element={<Legal />} />
      </Routes>
    </Layout>
  )
}
