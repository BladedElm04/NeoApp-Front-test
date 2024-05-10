import { ResetCss } from "./styles/reset"
import { DefaultTemplate } from "./components/DefaultTemplate"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"
import { Banner } from "./components/Banner"

function App() {
  return (
    <>
      <ResetCss />
      <GlobalStyle />
      <Header />
      <DefaultTemplate>

      </DefaultTemplate>
      <Footer />
    </>
  )
}

export default App
