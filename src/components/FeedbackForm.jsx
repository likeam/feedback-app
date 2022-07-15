import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

function FeedbackForm ({handleAdd})  {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtndisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {

        if(text === ''){
            setBtndisabled(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length <= 10){
            setBtndisabled(true)
            setMessage('Text must be less than 10 Chraters')
        }else{
            setBtndisabled(false)
            setMessage(null)
        }



        setText(e.target.value);
    }

    const handleSubmit = (e) => {

        

        e.preventDefault()

        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating,
            }
            handleAdd(newFeedback)
            setText('')
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit} >
                <h2> How you rate your Services with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder="Write a review " value={text} />
                    <Button type="submit" version='secondary' isDisabled= {btnDisabled}>Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}
export default FeedbackForm
