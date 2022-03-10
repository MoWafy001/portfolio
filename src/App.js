import { useState } from 'react'


import Welcome from "./Welcome";
import Info from './Info';
import Navigate from './Navigate';
import Links from './Links';

function App() {

  const [windows, setWindows] = useState({
    welcome: true, navigate: false, info: false,
    links: false, skills: false, projects: false,
    education: false, experience: false
  })

  const updateWindows = newWindows => (
    () => {
      setWindows(o => {
        const nw = { ...o, ...newWindows }
        if (!Object.values(nw).includes(true)) nw.welcome = true
        return nw
      })
    }
  )

  return (
    <div style={{ overflowX: 'auto' }}>

      <Welcome show={windows.welcome}
        handelClose={updateWindows({ welcome: false })}
        buttons={{
          handelNext: updateWindows({ welcome: false, info: true })
        }} />

      <Info show={windows.info}
        handelClose={updateWindows({ info: false })}
        buttons={{
          handelNext: updateWindows({ info: false, links: true }),
          handelNavigate: updateWindows({ info: false, navigate: true })
        }} />

      <Navigate show={windows.navigate}
        handelClose={updateWindows({ navigate: false })}
        buttons={{
          handelNext: updateWindows({ navigate: false }),
          info: updateWindows({ info: true }),
          links: updateWindows({ links: true }),
          skills: updateWindows({ skills: true }),
          projects: updateWindows({ projects: true }),
          education: updateWindows({ education: true }),
          experience: updateWindows({ experience: true }),
        }} />

      <Links show={windows.links}
        handelClose={updateWindows({ links: false })}
        buttons={{
          handelNext: updateWindows({ links: false }),
          handelBack: updateWindows({ links: false, info: true })
        }} />

    </div>
  );
}

export default App;

/*
  Windows:
    - Welcome #
    - Info #
    - Skills
    - Education
    - Certificates
    - Projects
    - Links
*/