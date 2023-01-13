import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {v4 as uuidv4} from 'uuid';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackData from "./data/FeedbackData";
import Feedbackform from "./components/Feedbackform";
import AboutPage from "./Pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";




function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback,...feedback]);
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    }
    
    return(
        <Router>
          <Header/>
            <div className="container">
                <Routes>
                    <Route exact path="/" element={
                        <>
                        <Feedbackform handleAdd={addFeedback}/>
                        <FeedbackStats feedback={feedback}/>
                        <FeedbackList feedback= {feedback} handleDelete = {deleteFeedback}/>
                        </>
                    }/>

                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/post/*" element={<Post/>}/>
                </Routes>
                <AboutIconLink/>

            </div>            
        </Router>
    )
}

export default App;