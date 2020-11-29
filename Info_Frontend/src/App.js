import React, { useEffect, useState } from 'react';
import NewInfo from "./components/newInfo"
import { Button } from 'react-bootstrap'
import Info from "./components/Info"
import InfoConnect from "./api/InfoConnect"
import "./styles/newInfoStyle.css"
import "./styles/button_styles.css"
import Search from "./components/search"
import Login from "./components/login"
import LoginConnect from "./api/loginConnect"
import {useSelector,useDispatch} from "react-redux"
import {saveUser,getUser,logOutUser} from "./store/user/userAction"
import {getInfos,saveInfos} from "./store/infos/infoAction"

function App() {

  const [word, setWord] = useState("")
  const userSet = useDispatch()
  const infoSet = useDispatch()
  const infoGet = useSelector(state => state.infoReducer)
  const userGet = useSelector(state => state.userReducer)


  useEffect(() => {
    async function start() {
      const loggedUserJSON = sessionStorage.getItem('LoggedInfoUser')
      if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON)
        userSet(saveUser(user))
        InfoConnect.setToken(user.token)
        let data = await InfoConnect.getAll()
        infoSet(saveInfos(data))
      }
    }
    start()
  }, [])


  const logOut = () => {
    userSet(logOutUser())
    sessionStorage.clear()
  }


  const allData = infoGet.map((data) =>
    <div key={data.id} className="shadowBackround2" >
      <Info word={word} title={data.title} category={data.category} text={data.text} id={data.id} link={data.link} pic={data.pic} />
    </div>
  )


  if (userGet === null) {
    return (
      <div>
        <h1 className="keskita2">Welcome to Codester</h1>
        <Login/>
      </div>
    )
  } else {
    return (
      <div>
        <Button className="logOut" onClick={logOut}>Log out username: {userGet.username}</Button>
        {userGet.admin === true && <NewInfo/>}
        <Search setFilter={setWord}/>
        {allData}
      </div>
    )
  }
}

export default App;
