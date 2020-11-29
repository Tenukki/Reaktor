import React, { useState, useEffect } from "react"
import { Form, Button, Col, Row, Modal } from 'react-bootstrap'
import "../styles/newInfoStyle.css"
import { useSelector, useDispatch } from "react-redux"
import { saveUser, getUser } from "../store/user/userAction"
import { getInfos, saveInfos } from "../store/infos/infoAction"
import InfoConnect from "../api/InfoConnect"
import LoginConnect from "../api/loginConnect"

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const userSet = useDispatch()
    const infoSet = useDispatch()

    const handeLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await LoginConnect.login({ username, password })
            sessionStorage.setItem('LoggedInfoUser', JSON.stringify(user))
            InfoConnect.setToken(user.token)
            userSet(saveUser(user))
            setUsername('')
            setPassword('')
            let data = await InfoConnect.getAll()
            infoSet(saveInfos(data))
        } catch (exception) {
            console.log(exception)
        }
    }



    return (
        <div className="loginTable">
            <Form.Group as={Row} >
                <Form.Label column sm="4">
                    Username:
                </Form.Label>
                <Col sm="8">
                    <Form.Control type="text" onChange={({ target }) => setUsername(target.value)} placeholder="username" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} >
                <Form.Label column sm="4">
                    Password:
                </Form.Label>
                <Col sm="8">
                    <Form.Control type="password" onChange={({ target }) => setPassword(target.value)} placeholder="Password" />
                </Col>
            </Form.Group>
            <Button className="primary" onClick={handeLogin}>Log in</Button>
        </div>
    )

}

export default Login