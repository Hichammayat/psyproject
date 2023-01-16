import React, { useState } from 'react';
import './Questionnaire.css'
import QuestionModal from '../../Modals/QuestionModals';
import {useDispatch} from "react-redux"
import { userAnswer } from '../../redux/Quest-reducer';
import { Link } from 'react-router-dom'

function Questionnaire () {
	const dispatch = useDispatch()
	const questions = [
		{
			questionText: "Quelle est votre problematique(anxiete,phobie,stress,crise,D'angoisse,TOC)",
			answer: ""
		},
		{
			questionText: "Depuis quand souffrez vous de votre problematique?",
			answer: ""
		},
		{
			questionText: "Pouver-vous decrire le contexte dans lequel elle est apparue(age,element declencheur..)?",
			answer: ""
		},
		{
			questionText: "Prenez vous un traitement? Si oui ,lequel?",
			answer: ""
		},
        {
			questionText: "Avez-vous deje suivi une therapie(TCC,hypnose,psychanalyse...)?Si oui,precisez son type et son efficacite.",
			answer: ""
		},
        {
			questionText: "Avez-vous d'autre psychologiques,Si oui ,lesquels?",
			answer: ""
		},
        {
			questionText: "Avez vous en ce moment des idees suicidaires?",
			answer: ""
		},
        {
			questionText: "Votre problematique s'est elle aggravee au fil de temps?",
			answer: ""
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [ThanksMsg, setThanksMsg] = useState(false);
	
	const getUserId = JSON.parse(localStorage.getItem('user'));
	const [question,setQuestion] =useState(new QuestionModal([],getUserId._id));
	const [handleAnswer,setHandelAnswer] =useState("");

	const handleAnswerClick = () => {
		
        
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setThanksMsg(true);
		}
	};
	console.log(question)
	return (
		<div className='Questionnaire'>
            <div className='question-form'>
			{ThanksMsg ? (
				<div className='score-section'>
					<span>Merci pour vos reponses!
                    vous allez maintenent avoir acces a la liste de tout les psychologues disponibles je vous invites a faire votre choix
					</span>
					<Link to="/SideBar">
					<button className='btn' style={{backgroundColor:"black",color:"white"}}
							    onClick={() =>dispatch(userAnswer({id:getUserId._id,Answer : question}))}>valider
					</button>
					</Link>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
                        <div className='answer-div'>
					       <div className='answer-section'>
					    	   <textarea style={{width:"100%",border:"none",borderRadius:"5px"}}
							   onChange={(e) => {
								setHandelAnswer(e.target.value);
							     }}>

							  </textarea>
							  
                               <button style={{backgroundColor:"black",color:"white"}} className='btn'
							    onClick={(e) => {
									setQuestion({...question, answer: [...question.answer,handleAnswer]});
									handleAnswerClick()
									}}>valider</button>
								
					       </div>
                        </div>
				</>
			)}
            </div>
		</div>
	);
}
export default Questionnaire