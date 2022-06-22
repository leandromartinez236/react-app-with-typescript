import { useReducer } from "react"
import { Sub } from "../types"

interface FormState {
  inputValues : Sub
}
const INITIAL_STATE = {
    nick: '',
    subMonths:0,
    avatar:'',
    description:''
}
type FormReducerAction ={
  type: 'change_value',
  payload: {
    inputName: string,
    inputValue: string
  }
} | {
  type: 'clear'
}
const formReducer =(state: FormState['inputValues'],action: FormReducerAction)=>{
  //En el swtich no hace falta el "default" ya que solo te permite las acciones mencionadas
  //En este ejemplo son "change_value" y "clear"
  switch(action.type){
    case "change_value":
      const {inputName, inputValue}= action.payload
      return {
        ...state,
        [inputName]: inputValue
      }
    case "clear":
      return INITIAL_STATE
  }
}

const NewSubForm = ()=>{
  return useReducer(formReducer, INITIAL_STATE)
}
export default NewSubForm