import { v4 as uuidv4 } from "uuid" 
import {BrowserRouter as  Route, Router, Routes} from "react-router-dom"
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import {FeedbackProvider} from './context/FeedbackContext'



function App(){

    // const [feedback, setFeedback] = useState(FeedbackData)

    // const addFeedback = (newFeedback) => {
    //     newFeedback.id = uuidv4()
    //     setFeedback([newFeedback, ...feedback])
    // }

    // const deleteFeedback = (id) => {
    //     if(window.confirm('Are You Soure You Want to Delete?')) 
    //         setFeedback(feedback.filter((item) => item.id !== id ))
    // }

    // return (
    //     // <Router>
    //     //     <Header />
    //     //     <div className="container">
    //     //         <Route exact path="/">
    //     //             <FeedbackForm handleAdd={addFeedback} />
    //     //             <FeedbackStats feedback={feedback} />
    //     //             <FeedbackList feedback={feedback} handleDelete= {deleteFeedback} />
    //     //         </Route>
    //     //         <Route path='/about' component={AboutPage} />
    //     //     </div>
    //     // </Router>
        
    //         )
        
    return(
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route
                        exact 
                        path='/'
                        element={
                            <>
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList />
                            </>
                        }
                        ></Route>
                        <Route path='about' element={<AboutPage />} />
                    </Routes>
                </div>
            </Router>
        </FeedbackProvider>
    )
    
}

export default App