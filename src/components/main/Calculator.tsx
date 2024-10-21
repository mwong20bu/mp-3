import {useReducer} from 'react';
import styled from "styled-components";

const StyledCalc = styled.div`
    background-image: url(bubbles.jpg);
    background-size: contain;
    height: 60vh; 
    color: rgb(0, 98, 163);
    text-align: center;
`

const StyledButton = styled.button`
    background-color: #cbf8ff;
    border: 1px solid rgb(0, 128, 183);
    color: rgb(2, 73, 120);
    padding: 15px 32px; 
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10%; 
`

const initialState = {
    firstNumber: 0,
    secondNumber: 0, 
    res: 0
};

function reducer(state: any, action: any) {
    switch (action.type) {
        case 'UPDATE_FIRST': 
            return {
                ...state, 
                firstNumber: parseFloat(action.payload)
            };
        
        case 'UPDATE_SECOND': 
            return {
                ...state, 
                secondNumber: parseFloat(action.payload)
            };
        
        case 'ADDITION':
            return {
                ...state,
                res: state.firstNumber + state.secondNumber
            };
        
        case 'SUBTRACTION':
            return {
                ...state,
                res: state.firstNumber - state.secondNumber
            };

        case 'MULTIPLICATION':
            return {
                ...state,
                res: state.firstNumber * state.secondNumber
            };

        case 'DIVISION':
            return {
                ...state,
                res: state.firstNumber / state.secondNumber
            };
        
        case 'POWER':
            return {
                ...state,
                res: state.firstNumber ** state.secondNumber
            };
        
        case 'CLEAR':
            return {
                ...state,
                firstNumber: "",
                secondNumber: "",
                res: ""
            };
        
        default: 
            return state;
    }

}


export default function Calculator(){
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <StyledCalc>
            <br/>
            <h3>Javascript Calculator</h3>
            <label>Enter first number: </label>
            <input id="first"
                type="number" 
                value={state.firstNumber} 
                onChange={(e) => dispatch({ type: 'UPDATE_FIRST', payload: e.target.value})}
            />
            <br/><br/>
            <label>Enter another number: </label>
            <input id="second"
                type="number" 
                value={state.secondNumber} 
                onChange={(e) => dispatch({ type: 'UPDATE_SECOND', payload: e.target.value})}
            />
            <br/><br/>

            <StyledButton onClick={() => dispatch({type: 'ADDITION'})}>
                +
            </StyledButton>

            <StyledButton onClick={() => dispatch({type: 'SUBTRACTION'})}>
                -
            </StyledButton>

            <StyledButton onClick={() => dispatch({type: 'MULTIPLICATION'})}>
                *
            </StyledButton>

            <StyledButton onClick={() => dispatch({type: 'DIVISION'})}>
                /
            </StyledButton>

            <StyledButton onClick={() => dispatch({type: 'POWER'})}>
                **
            </StyledButton>

            <StyledButton onClick={() => dispatch({type: 'CLEAR'})}>
                Clear
            </StyledButton>

            <p style={{color: state.res < 0 ? 'red' : 'navy'}}>{state.res}</p>
        </StyledCalc>
    );
}