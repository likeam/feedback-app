import { v4 as uuidv4 } from "uuid" 
import {BrowserRouter, Routes, Route, } from "react-router-dom"
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import  ReactDOM  from "react-dom/client"


function App(){

    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are You Soure You Want to Delete?')) 
            setFeedback(feedback.filter((item) => item.id !== id ))
    }

    return (
        
        <BrowserRouter>
                <Header/>
                <div className="container">
                
                        <Routes>
                            <Route path="/" element={<App />}>

                                <Route path= "teams" element={<FeedbackForm />} />
                                <Route path= "teams" element={<FeedbackForm />} />
                                <Route path= "teams" element={<FeedbackForm />} />
                                <Route path= "teams" element={<FeedbackForm />} />
{/*                                 
                                <FeedbackForm  handleAdd={addFeedback}  />
                                <FeedbackStats feedback = {feedback} />
                                <FeedbackList  feedback = {feedback}   handleDelete =  {deleteFeedback}  />  */}
                                
                            </Route>
                        </Routes>
              
                
                
                </div>
                </BrowserRouter>
        
            )
        
    
}

export default App