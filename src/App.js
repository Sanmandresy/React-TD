import React,{useState} from "react";
import './App.css';

function App() {
    return(<>
        <main className="container">
            <TodoList/>
        </main>
    </>);
}

const  TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [doneList, setdoneList] = useState([]);
  const [todoInput, settodoInput] = useState('');


  function handleCheck(index) {
    const temp = [...todos];
    const todo = temp[index];
    todo.completed = !todo.completed;

    var bridge = doneList.concat(todo);
    setdoneList(bridge);
    
    /*
        //If we want to remove the checked todos from the initial list
        const filteredTodos = todos.filter((todo, i) => i !== index);
        setTodos(filteredTodos);
    */
  }

  return (<>
        <main>
            <section>
                <h1>TO DO</h1>
                <input
                    type="text"
                    value={todoInput}
                    onChange={(e) => settodoInput(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.key === "Enter") {
                            var appendList = todos.concat({ text: todoInput, completed: false });
                            setTodos(appendList);
                            settodoInput('');
                        }
                    }}
                />
                <ul>
                    {todos?.map((todo, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            disabled={false}
                            onClick={(e) => {
                                handleCheck(index);
                                e.target.disabled = true;
                            }}
                    />
                        {todo.text}
                    </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>DONE</h2>
                <ul>
                    {doneList?.map((done, index) => (
                    <li key={index}>{done.text}</li>
                    ))}
                </ul>
            </section>
        </main>
    </>
  );
}


export default App;