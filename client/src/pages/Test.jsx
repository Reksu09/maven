import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

function Test() {
    const [tests, setTest] = useState([])
    const [enumeration, setEnum] = useState("");
    const [pos, setPos] = useState(0);
    const [fill, setFill] = useState("");
    const [submit, setSubmit] = useState("Next");
    const { subject } = useParams();
    const { type } = useParams();
    const testTypes = ["identification", "enumeration", "fill"];
    const [enumAnswer, setEnumAnswer] = useState([])
    const [identificationAnswer, setIdentificationAnswer] = useState([])
    const [fillAnswer, setFillAnswer] = useState([])
    
    useEffect(() => {
        setIdentificationAnswer(JSON.parse(window.sessionStorage.getItem("identification")));
        setEnumAnswer(JSON.parse(window.sessionStorage.getItem("enum")));
        setFillAnswer(JSON.parse(window.sessionStorage.getItem("fill")));
    }, []);    
    
    useEffect(() => {
        axios.get(`https://maven.herokuapp.com/subjects/${subject}/${type}`)
        .then(data => setTest(data.data))
        .catch(error => console.log(error));

        setFillAnswer(window.sessionStorage.getItem('identification'))
        setFillAnswer(window.sessionStorage.getItem('enum'))
        setFillAnswer(window.sessionStorage.getItem('fill'))
        
        if (type === 'identification') {
            setSubmit("Next")
        } else if (type === "enumeration") {
            setEnum("step-primary");
            setSubmit("Next")
            setPos(1)
        } else if (type === "fill") {
            setEnum("step-primary");
            setFill("step-primary");
            setSubmit("Submit")
            setPos(2)
        }
    }, [subject, type, enumeration, fill, enumAnswer, identificationAnswer, fillAnswer])
        
    const handleSubmit = (e) => {
        const formElements = []
        e.preventDefault();
        const data = new FormData(e.target);
        var num = 1;
        data.forEach(input => {
            formElements.push(data.get('input' + num));
            num++
        })
        if (type === "identification") {
            window.sessionStorage.setItem('identification', JSON.stringify(formElements));
            window.location = `/subjects/${subject}/enumeration`
        } else if (type === "enumeration") {
            window.sessionStorage.setItem('enum', JSON.stringify(formElements));
            window.location = `/subjects/${subject}/fill`
        } else if (type === "fill") {
            window.sessionStorage.setItem('fill', JSON.stringify(formElements));
            window.location = `/subjects/${subject}/score`
        }
    }
    
    console.log(process.env.PORT)

    return (
        <div>
            <div className="w-full justify-between items-center flex">
                <a href={pos > 0 ? `/subjects/${subject}/${testTypes[pos > 0 ? pos-1 : 0]}`:null} className="btn btn-ghost gap-0 m-5">
                    <svg className="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path></svg>                Back
                </a>
                <h1 className="uppercase font-extrabold text-xl text-secondary absolute left-[50%] translate-x-[-50%]">{subject}</h1>
                <label htmlFor="cancel-test" className="btn btn-circle btn-outline m-5 btn-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </label>
            </div>
            <div className="flex w-full justify-center my-8">
                <ul className="steps">
                    <li id="identification" className="step step-primary">Identification</li>
                    <li id="enumeration" className={`step ${enumeration}`}>Enumeration</li>
                    <li id="fill" className={`step ${fill}`}>Fill in the Blanks</li>
                </ul>
            </div>
            {type !== "identification" ?
                <div className='w-1/2 mx-auto'>
                    <div className="alert alert-info shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>Separate each item with a comma and space. <br /><i>Ex. Apple, Banana, Orange</i></span>
                        </div>
                    </div>
                </div> : null
            }
            <form onSubmit={handleSubmit}>
                {
                    tests.map((data, index) => {
                        const correctAnswer = data.answer.toString().toLowerCase().split(", ")
                        var question = data.question;
                        for (var i = 0; i < correctAnswer.length; i++) {
                            question = question.replace(correctAnswer[i], ` ${i+1}._____`)
                        }
                        return (
                            <div key={index} className="mockup-code m-8">
                                <pre data-prefix="$" className='ml-10'>
                                    <code className='whitespace-normal'>{type !== "fill" ? data.question : question}</code><br />
                                </pre>
                                <pre className='mt-4'>
                                    {type === "identification" ?
                                        <input name={`input${index+1}`} type="text" placeholder="Answer" className="input input-ghost input-xsm w-full max-w-sm lg:max-w-md" data-number={index+1} />
                                       :
                                        <textarea name={`input${index+1}`} className="textarea textarea-ghost textarea-xsm w-full max-w-md lg:max-w-lg" placeholder="Answer"></textarea>
                                    }
                                </pre>
                            </div>
                        )
                    })
                }
                <input type="submit" value={`${submit}`} className={`btn btn-primary float-right m-8`} />
            </form>
        </div>
    )
}

export default Test