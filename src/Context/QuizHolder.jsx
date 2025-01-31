import React, { useState } from 'react'
import { createContext } from 'react'

const QuizContext = createContext();

const quizzes = [
    {
        "question": "Which of the following are the advantages of React.js?",
        "a": "React.js can increase the application's performance with Virtual DOM.",
        "b": "React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.",
        "c": "React.js can render both on client and server side.",
        "d": "All of the above",
        "correct": "d"
    },
    {
        "question": "A class is a type of function, but instead of using the keyword function to initiate it, which keyword do we use?",
        "a": "Constructor",
        "b": "Class",
        "c": "Object",
        "d": "DataObject",
        "correct": "b"
    },
    {
        "question": "Which of the following acts as the input of a class-based component?",
        "a": "Class",
        "b": "Factory",
        "c": "Render",
        "d": "Props",
        "correct": "d"
    },
    {
        "question": "Which of the following keyword is used to create a class inheritance?",
        "a": "Create",
        "b": "Inherits",
        "c": "Extends",
        "d": "This",
        "correct": "c"
    },
    {
        "question": "What is the default port where webpack-server runs?",
        "a": "3000",
        "b": "5000",
        "c": "8080",
        "d": "3001",
        "correct": "c"
    },
    {
        "question": "How many numbers of elements a valid react component can return?",
        "a": "4",
        "b": "5",
        "c": "2",
        "d": "1",
        "correct": "d"
    },
    {
        "question": "What is the declarative way to render a dynamic list of components based on values in an array?",
        "a": "Using the reduce array method",
        "b": "Using the <Each /> component",
        "c": "Using the Array.map() method",
        "d": "With a for/while loop",
        "correct": "c"
    },
    {
        "question": " Which of the following function is used to change the state of the React.js component?",
        "a": "this.setChangeState",
        "b": "this.State{}",
        "c": "this.setState",
        "d": "None of the above",
        "correct": "c"
    },
    {
        "question": "How many ways of defining your variables in ES6?",
        "a": "2",
        "b": "4",
        "c": "3",
        "d": "5",
        "correct": "c"
    },
    {
        "question": "What is a state in React?",
        "a": "A permanent storage.",
        "b": "Internal storage of the component.",
        "c": "External storage of the component.",
        "d": "None of the above.",
        "correct": "b"
    },
    {
        "question": " Which of the following is used to pass data to a component from outside in React.js?",
        "a": "SetState",
        "b": "Render with arguments",
        "c": "Props",
        "d": "PropTypes",
        "correct": "b"
    },
    {
        "question": "What are the two ways to handle data in React?",
        "a": "State & Props",
        "b": "Services & Components",
        "c": "State & Services",
        "d": "State & Component",
        "correct": "a"
    }
]

export default function QuizHolder(props) {

    const [start, setStart] = useState(false);
    const [exit, setExit] = useState(false);
    const [correct,setCorrect] = useState(0);
    return (
        <QuizContext.Provider value={{
            start, exit, setStart, setExit, quizzes,correct,setCorrect
        }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export { QuizContext };
