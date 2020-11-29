import React from "react"
import { Button } from 'react-bootstrap'
import Connect from "../api/InfoConnect"
import "../styles/newInfoStyle.css"
import Highlighter from "react-highlight-words";
import { useSelector, useDispatch } from "react-redux"
import { getInfos, saveInfos } from "../store/infos/infoAction"


const Info = ({ title, category, text, id, word, link, pic }) => {

    const infoSet = useDispatch()
    const userGet = useSelector(state => state.userReducer)

    const deletee = async () => {
        const del = await Connect.poista(id)
        const newData = await Connect.getAll()
        infoSet(saveInfos(newData))
    }
    let split = word.split(" ")
    console.log(split)


    return (
        <div >
            <h1>{title}</h1>
            <h3>{category}</h3>
            <pre className="pre">
                <Highlighter
                    highlightClassName="YourHighlightClass"
                    searchWords={split}
                    autoEscape={true}
                    textToHighlight={text} />
            </pre>

            {pic === false && <img src={link} alt="kuva" />}
            {pic === true && <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>}
            {userGet.admin === true && <Button variant="danger" onClick={deletee}>Delete</Button>}
        </div>
    )

}
export default Info