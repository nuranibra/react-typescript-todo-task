import { useState } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, handleToogle } from "../redux/todoSlice";
import { v4 } from 'uuid'

export default function Todo () {

    const [text,setText] = useState('')

    const todos = useSelector(state => state.todos)

    const dispatch = useDispatch()


    const handleAdd = () => {
        if(text.trim()){
            dispatch(addTodo({
                id:v4(),
                text,
                completed:false
            }))
        }
        setText('')
    }

    const handleToogleAS = (id) => {
        dispatch(handleToogle(id))
    }

    return(
        <>
            <section style={{display:'flex', justifyContent:'center', alignItems:'center', alignSelf:'center', flexDirection:'column'}}>
                <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', width:'35%'}}>
                    <h1 style={{fontFamily:'Arial'}}>Todo List with Typescript</h1>
                    <div style={{width:'50%', display:'flex', justifyContent:'space-between'}}>
                        <input type="text" placeholder="Enter Todo" style={{border:'none', height:'30px', borderRadius:'px'}} value={text} onChange={(e) => {
                            setText(e.target.value)
                        }}/>
                        <button style={{border:'none', height:'30px',width:'20%',color:'#fff', backgroundColor:'blue'}} onClick={handleAdd}>Add</button>
                    </div>
                </div>
                <ol style={{fontFamily:'Arial', fontSize:'20px'}}>
                    {todos.map(todo => (
                        <li key={todo.id} style={todo.completed ? {textDecoration:'line-through', cursor:'pointer'} : {textDecoration:'none', cursor:'pointer'}} onClick={() => {
                            handleToogleAS(todo.id)
                        }}>{todo.text}</li>
                    ))}
                </ol>
            </section>
        </>
    );
}