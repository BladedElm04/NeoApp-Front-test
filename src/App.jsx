import { ResetCss } from "./styles/reset"
import { DefaultTemplate } from "./components/DefaultTemplate"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"
import { Banner } from "./components/Banner"
import { HqList } from "./components/HqList"
import { useState } from "react"


function App() {

  const [hqList, setHqList] = useState([]);

  return (
    <>
      <ResetCss />
      <GlobalStyle />
      <Header setHqList={setHqList}/>
      <Banner />
      {/* <DefaultTemplate> */}
        <HqList hqList={hqList} setHqList={setHqList}/>
      {/* </DefaultTemplate> */}
      <Footer />
    </>
  )
}

export default App
