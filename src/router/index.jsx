import { useRoutes } from "react-router-dom"
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import LessonsHug from "./Lessons/LessonsHug";
import Layout from "./layout/Layout";
import SingleLesson from "./singleLesson/SingleLesson";
import Quizzes from "./quizzes/Quizzes";
import QuizResults from "./quizzes/QuizResults";
import Pronunciation from "./pronunciation/Pronunciation";
import PronunciationResults from "./pronunciation/PronunciationResults";
import SpeakingMock from "./speaking/SpeakingMock";

const RouteController = () => {

    return useRoutes([
        {
            path: '/',
            element: (
                <Layout>
                    <Home/>
                </Layout>
            )
        },
        {
            path: 'profile',
            element: <Profile/>
        },
        {
            path: '/lessons',
            element: (
                <Layout>
                    <LessonsHug/>
                </Layout>
            )

        },
        {
            path: '/lessons/:id',
            element: <SingleLesson/>
        },
        {
            path: '/quizzes',
            element: <Quizzes/>
        },
        {
            path: '/quizzes/results',
            element: <QuizResults/>
        },
        {
            path: '/pronunciation',
            element: <Pronunciation/>
        },
        {
            path: '/pronunciation/results',
            element: <PronunciationResults/>
        },
        {
            path: '/speaking',
            element: (
                <Layout>
                    <SpeakingMock/>
                </Layout>
            )

        }

    ])
}

export default RouteController;