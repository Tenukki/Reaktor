import React, { useState, useEffect } from "react"
import { Form, Button, Col, Row } from 'react-bootstrap'
import "../styles/newInfoStyle.css"
import sorting from "../sortingAlgorythm/sorting"
import { useSelector, useDispatch } from "react-redux"
import { getInfos, saveInfos } from "../store/infos/infoAction"

const Search = ({setFilter}) => {
    const infoSet = useDispatch()
    const data = useSelector(state => state.infoReducer);
    const [word, setWord] = useState("")

    const HandeChange = (event) => {
        setWord(event.target.value)
        setFilter(event.target.value)
        let clone = [...data]
        let newdata = sorting(clone, word)
        infoSet(saveInfos(newdata))
    }
    return (
        <div className="search">
            <Form.Group as={Row}>
                <Col sm="11">
                    <Form.Control type="text" onChange={HandeChange} placeholder="Search" />
                </Col>

                <Form.Label column sm="1">

                </Form.Label>
            </Form.Group>
        </div>
    )
}

export default Search