import { ACTIONS } from '../App.js';

export default function OperationButton(props){


    return <button onClick={()=>props.dispatch({type:ACTIONS.CHOOSE_OPERATIONS,payload:{operation:props.operation}})}>{props.operation}</button>
} 