import React, {Component} from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './QuizMain.css';


export default class Quiz extends Component {
     
    // initiating the local state
    state = {
        quiestions: {
            1: <p> <a href="https://en.wikipedia.org/wiki/Blue"><br></br> Cuenta la cantidad de osos que ves en la imagen <br></br><br></br> </a> <img src='/images/oso-grizzly-caza.jpg'/> 
               <br></br><a href="https://en.wikipedia.org/wiki/yellow"> ¿Cuantos osos hay? </a></p>,
            2: <p> <a href="https://en.wikipedia.org/wiki/Blue"><br></br>Cuenta la cantidad de conejos que ves en la imagen <br></br><br></br> </a><img src='/images/conejos.jpg'/> 
               <br></br><a href="https://en.wikipedia.org/wiki/yellow"> ¿Cuantos conejos hay? </a></p>,
            3: <p> <a href="https://en.wikipedia.org/wiki/Blue"><br></br>Cuenta la cantidad de vacas que ves en la imagen <br></br><br></br> </a> <img src='/images/vacas.jpg'/> 
               <br></br><a href="https://en.wikipedia.org/wiki/yellow"> ¿Cuantos vacas hay? </a></p>,
            4: <p> <a href="https://en.wikipedia.org/wiki/Blue"><br></br>Cuenta la cantidad de caballos que ves en la imagen <br></br><br></br> </a> <img src='/images/caballos.jpg'/> 
               <br></br><a href="https://en.wikipedia.org/wiki/yellow"> ¿Cuantos caballos hay? </a></p>,
            5: <p> <a href="https://en.wikipedia.org/wiki/Blue"><br></br>Cuenta la cantidad de gatitos que ves en la imagen <br></br><br></br> </a> <img src='/images/gatos.jpg'/> 
               <br></br><a href="https://en.wikipedia.org/wiki/yellow"> ¿Cuantos gatitos hay? </a></p>,
            6: <p> <a href="https://en.wikipedia.org/wiki/Blue"><br></br>Al ver la siguiente imagen responde la pregunta <br></br><br></br> </a> <img src='/images/cucharasplatos.jpg'/> 
             <br></br><a href="https://en.wikipedia.org/wiki/yellow"> ¿Hay mas cantidad de platos que de cucharas? </a></p>,   
            7: <p> <a href="https://en.wikipedia.org/wiki/Blue"><br></br>Al ver la siguiente imagen responde la pregunta <br></br><br></br> </a> <img src='/images/cuchillostenedores.jpg'/> 
            <br></br><a href="https://en.wikipedia.org/wiki/yellow"> ¿Hay mas cantidad de tenedores que de cuchillos? </a></p>,
            8: <p> <a href="https://en.wikipedia.org/wiki/Blue"><br></br>Al ver la siguiente imagen responde la pregunta <br></br><br></br> </a> <img src='/images/tazasvasos.jpg'/> 
            <br></br><a href="https://en.wikipedia.org/wiki/yellow"> ¿Hay mas cantidad de vasos que de tazas? </a></p>,
            9: <p> <a href="https://en.wikipedia.org/wiki/Blue"><br></br>Si de algunas naranjas se cortan varios trozos : <br></br><br></br> </a> <img src='/images/naranja.jpg'/> 
            <br></br><a href="https://en.wikipedia.org/wiki/yellow"> ¿Podrias unir los trozitos y responder cuantas naranjas hay en total ? </a></p>,
            10: <p> <a href="https://en.wikipedia.org/wiki/Blue"><br></br>Dadas las siguientes ecuaciones : <br></br><br></br> </a> <img src='/images/ecuacion1.jpg'/> 
            <br></br><a href="https://en.wikipedia.org/wiki/yellow"> ¿Cual es el resultado de cada una? </a></p>,
            11: <p> <a href="https://en.wikipedia.org/wiki/Blue"><br></br>Dadas las siguientes ecuaciones : <br></br><br></br> </a> <img src='/images/ecuacion2.jpg'/> 
            <br></br><a href="https://en.wikipedia.org/wiki/yellow"> ¿Cual es el numero faltante de cada ecuacion para que el resultado sea correcto ? </a></p>,
            12: <p> <a href="https://en.wikipedia.org/wiki/Blue"><br></br>Dadas las siguientes ecuaciones : <br></br><br></br> </a> <img src='/images/ecuacion3.jpg'/> 
            <br></br><a href="https://en.wikipedia.org/wiki/yellow"> ¿Cual es el numero faltante de cada ecuacion para que el resultado sea correcto ? </a></p>,
        },
        answers: {
            1: {   
                1: '6',
                2: '5',
                3: '4',
                4: '7'
            },
            2: {
                1: '4',
                2: '8',
                3: '2',
                4: '9'

            },
            3: {
                1: '8',
                2: '5',
                3: '7',
                4: '6'

            },
            4: {
                1: '8', 
                2: '10',
                3: '11',
                4: '9'
            },
            5: {
                1: '10',
                2: '11',
                3: '9',
                4: '12'
            },
            6: {
                1: 'SI, hay mas cantidad de platos que de cucharas', 
                2: 'NO, no hay mas cantidad de platos que de cucharas'
                
            },
            7: {
                1: 'SI, hay mas cantidad de tenedores que de cuchillos', 
                2: 'NO, no hay mas cantidad de tenedores que de cuchillos'
                
            } ,
            8: {
                1: 'SI, hay mas cantidad de vasos que de tazas',
                2: 'NO , no hay mas cantidad de vasos que de tazas'
            },
            9: {
                1: 'Hay 2 naranjas y media',
                2: 'Hay 4 naranjas',
                3: 'Hay 6 naranjas',
                4: 'Hay 3 naranjas y media'
            },
            10: {
                1: '3 en la suma y 5 en la resta',
                2: '5 en la resta y 3 en la suma',
                3: '5 en la suma y 3 en la resta'
            },
            11: {
                1: 'Falta un 4 en la resta y un 3 en la suma',
                2: 'Falta un 4 en la suma y un 3 en la resta',
                3: 'Falta un 3 en la suma y un 4 en la resta'
            },
            12: {
                1: 'Falta un 5 en la suma y un 2 en la resta',
                2: 'Falta un 5 en la resta y un 2 en la suma',
                3: 'Falta un 2 en la resta y un 5 en la suma'
            },

        },
        correctAnswers: {
            1: '2',
            2: '1',
            3: '4',
            4: '2',
            5: '2',
            6: '1',
            7: '2',
            8: '2',
            9: '4',
            10: '3',
            11: '2',
            12: '2'            

        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            <div className="Content">
                {step <= Object.keys(quiestions).length ? 
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Siguiente</button>
                    </>) : (
                        <div className="finalPage">
                            <h1>Completaste la Prueba</h1>
                            <p>Tus Aciertos fueron : {score} de {Object.keys(quiestions).length}</p>
                            <p>Muchas Gracias por participar!</p>
                        </div>
                    )
                }
            </div>
        );
    }
    
}