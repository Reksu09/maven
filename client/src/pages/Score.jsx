import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

function Score() {
    const [enumCorrectAnswer, setEnumCorrectAnswer] = useState([]);
    const [idCorrectAnswer, setIdCorrectAnswer] = useState([]);
    const [fillCorrectAnswer, setFillCorrectAnswer] = useState([]);
    const [enumAnswer, setEnumAnswer] = useState([]);
    const [idAnswer, setIdAnswer] = useState([]);
    const [fillAnswer, setFillAnswer] = useState([]);
    const { subject } = useParams();
    const [loc, setLoc] = useState(0)
    const [subjects, setSubjects] = useState(["Identification", "Enumeration", "Fill"])

    useEffect(() => {
        axios.get(`http://localhost:${process.env.PORT}/subjects/${subject}/identification`)
            .then(data => setIdCorrectAnswer(data.data))
            .catch(error => console.log(error));
        axios.get(`http://localhost:${process.env.PORT}/subjects/${subject}/enumeration`)
            .then(data => setEnumCorrectAnswer(data.data))
            .catch(error => console.log(error));
        axios.get(`http://localhost:${process.env.PORT}/subjects/${subject}/fill`)
            .then(data => setFillCorrectAnswer(data.data))
            .catch(error => console.log(error));

        setIdAnswer(JSON.parse(window.sessionStorage.getItem('identification')))
        setEnumAnswer(JSON.parse(window.sessionStorage.getItem('enum')))
        setFillAnswer(JSON.parse(window.sessionStorage.getItem('fill')))
    }, [])

    const next = () => {
        setLoc(loc+1)
    }
    const back = () => {
        setLoc(loc-1)
    }

  return (
    <div>
        <div className='mt-24'>
            <div className='flex justify-center items-center '>
                {loc > 0 ?
                    <button onClick={back} className='w-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 24 24" version="1.1">
                            <g id="arrow-left" fill="hsl(var(--bc))">
                                <polygon id="Shape" points="15 4 17 6 11 12 17 18 15 20 7 12"/>
                            </g>
                        </svg>
                    </button> 
                :
                    <div className='w-10'>
                        <svg className='hidden' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 24 24" version="1.1">
                            <g id="arrow-left" fill="hsl(var(--bc))">
                                <polygon id="Shape" points="15 4 17 6 11 12 17 18 15 20 7 12"/>
                            </g>
                        </svg>
                    </div> 
                }
                <div className='w-[300px]'>
                    <h1 className='text-center text-3xl mx-10'>{subjects[loc]}</h1>
                </div>
                {loc < 2 ?
                    <button onClick={next} className='w-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 24 24" version="1.1">
                            <g id="arrow-right" fill="hsl(var(--bc))">
                                <polygon id="Shape" points="9.0047481 4 17.0047481 12 9.0047481 20 7 18 13.0047481 12 7 6"/>
                            </g>
                        </svg>
                    </button> 
                :
                    <div className='w-10'>
                        <svg className='hidden' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 24 24" version="1.1">
                            <g id="arrow-right" fill="hsl(var(--bc))">
                                <polygon id="Shape" points="9.0047481 4 17.0047481 12 9.0047481 20 7 18 13.0047481 12 7 6"/>
                            </g>
                        </svg>
                    </div> 
                }
            </div>
            {loc === 0 ?
                idCorrectAnswer.map((data, index) => {
                    const correctAnswer = data.answer.toString().toLowerCase().replace(/\s/g, '')
                    const answer = idAnswer[index].toString().toLowerCase().replace(/\s/g, '')
                    return (
                        <div key={index} className="mockup-code m-8">
                            <pre data-prefix="$" className='ml-10'>
                                <code className='whitespace-normal'>{data.question}</code>
                            </pre>
                            <pre>
                                <div className={`input input-bordered ${correctAnswer === answer ? "input-success" : "input-error"} text-base-content border-2 input-xsm max-w-sm lg:max-w-md flex items-center ml-10`}>
                                    {idAnswer[index]}
                                </div>
                            </pre>
                            <pre data-prefix="" className='mt-4 ml-10'>
                                <code className='whitespace-normal'><span className='text-warning'>Correct Answer:</span> {data.answer}</code>
                            </pre>
                        </div>
                    )
                }) : null
            }
            {loc === 1 ?
                enumCorrectAnswer.map((data, index) => {
                    const correctAnswer = data.answer.toString().toLowerCase().split(", ")
                    const answer = enumAnswer[index].toString().toLowerCase().split(", ").filter(function(item, pos, ary) {
                        return !pos || item != ary[pos - 1];
                    })
                    return (
                        <div key={index} className="mockup-code m-8">
                            <pre data-prefix="$" className='ml-10'>
                                <code className='whitespace-normal'>{data.question}</code>
                            </pre>
                            {answer.map((ans, i) => {
                                return(
                                    <pre>
                                        <div className={`input input-bordered ${correctAnswer.includes(ans) ? "input-success" : "input-error"} text-base-content border-2 input-xsm max-w-sm lg:max-w-md flex items-center ml-10`}>
                                            {ans}
                                        </div>
                                    </pre>
                                )
                            })}
                            <pre data-prefix="" className='mt-4 ml-10'>
                                <code className='whitespace-normal'><span className='text-warning'>Correct Answer:</span> {data.answer}</code>
                            </pre>
                        </div>
                    )
                }) : null
            }
            {loc === 2 ?
                fillCorrectAnswer.map((data, index) => {
                    const correctAnswer = data.answer.toString().toLowerCase().replace(/\s/g, '').split(",")
                    const formattedAnswer = fillAnswer[index].toString().toLowerCase().replace(/\s/g, '').split(",")
                    const answer = fillAnswer[index].toString().split(", ")
                    var question = data.question;
                    correctAnswer.map((ans, i) => {
                        return (
                            question = question.replace(ans, ` (${i+1}. ${ans})`)
                        )
                    })
                    return (
                        <div key={index} className="mockup-code m-8">
                            <pre data-prefix="$" className='ml-10'>
                                <code className='whitespace-normal'>{question}</code>
                            </pre>
                            {answer.map((ans, i) => {
                                return(
                                    <pre>
                                        <div className={`input input-bordered ${correctAnswer[i] === formattedAnswer[i] ? "input-success" : "input-error"} text-base-content border-2 input-xsm max-w-sm lg:max-w-md flex items-center ml-10`}>
                                            {ans}
                                        </div>
                                    </pre>
                                )
                            })}
                            <pre data-prefix="" className='mt-4 ml-10'>
                                <code className='whitespace-normal'><span className='text-warning'>Correct Answer:</span> {data.answer}</code>
                            </pre>
                        </div>
                    )
                }) : null
            }
        </div>
    </div>
  )
}

export default Score