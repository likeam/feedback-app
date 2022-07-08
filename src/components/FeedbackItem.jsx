
import {useStae} from 'react'

function FeedbackItem() {
    const rating = 7;
    const text = 'This is an example of Feedback item';

    return (
        <div className="card">
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
            
        </div>
    )
}

export default FeedbackItem