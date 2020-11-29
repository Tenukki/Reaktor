import React, { useState, useEffect } from "react"
import { Form, Button } from 'react-bootstrap'
import "../styles/newInfoStyle.css"
import Connect from "../api/InfoConnect"
import {useSelector,useDispatch} from "react-redux"
import {getInfos,saveInfos} from "../store/infos/infoAction"

const NewInfo = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [text, setText] = useState("");
    const [link, setLink] = useState("");
    const [pic, setPic] = useState(true);
    const infoSet = useDispatch()
    
    const postData = async (event) => {
        event.preventDefault()
        if (title !== "" && category !== "" && text !== "") {
            let data = {
                title,
                category,
                text,
                link,
                pic
            }
            const response = await Connect.create(data)
            const newData = await Connect.getAll()
            infoSet(saveInfos(newData))
        } else {
            console.log("Dont send empty data")
        }
    }

    return (

        <div className="shadowBackround">
            <Form onSubmit={postData}>
                <Form.Group >
                    <Form.Label>Title:</Form.Label>
                    <Form.Control onChange={event => setTitle(event.target.value)} type="text" placeholder="Enter the title of info" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Category:</Form.Label>
                    <Form.Control onChange={event => setCategory(event.target.value)} type="text" placeholder="Enter the Category ex.Factory" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Write the info conserning the title</Form.Label>
                    <Form.Control onChange={event => setText(event.target.value)} as="textarea" rows="7" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>add a link to a picture (Leave empty not to add link)</Form.Label>
                    <Form.Control onChange={event => setLink(event.target.value)} type="text" placeholder="Link here www.slush.org" />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
                Show as photo
                <input type="radio" onClick={() => setPic(false)} name="gender" value="male"></input>
                add as a Link
                <input type="radio" onClick={() => setPic(true)} name="gender" value="male"></input>
            </Form>
        </div>

    )
}

export default NewInfo;