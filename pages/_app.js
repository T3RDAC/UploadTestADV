import MainHeader from '@/components/MainHeader'
import MainMenu from '@/components/MainMenu'
import MainNav from '@/components/MainNav'


import '@/styles/normalize.css'

import '@/styles/globals.css'


/* Here we add th main components for tha main page */
function App({ Component, pageProps }) {
  return (
  <>
    {/*Import Main Menu Componet*/}
    <MainHeader/>
    {/*Import Main Menu Componet*/}
    <MainMenu/>

    <div style={{ display: 'flex' }}>
        {/*Import Main Nav Componet*/}
        <MainNav/>
        {/*Import every page content*/}
        <Component {...pageProps} />
    </div>
  
  </>
  )
}


export default App