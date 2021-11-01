const ListItem = ( {todo: {  id, title, completed }, deleteTodo , completeTodo}) => {
    return <li>{title}
    {
        completed ? 
            <button onClick={ () => deleteTodo(id)} >Delete</button>
        :
            <input type="checkbox" onChange ={() => completeTodo(id)}/>
        
    }
    
    </li>
}
   


const List = ({ todos, deleteTodo, completeTodo }) => {
    return (
        <ul> 
            {todos.map((todo) => (
                <ListItem 
                key={todo.id} 
                todo={todo} 
                deleteTodo={deleteTodo} 
                completeTodo={completeTodo}
                />
            ))}
        </ul>
)}


const Form = ({addTodo}) => {
    return (
        <form onSubmit={addTodo}>
            <input type="text" id="input" name="task" className="input" ></input>
            <button>Add</button>
        </form>
    )
}



class TodoLists extends React.Component {
    state = {
        todos:[
            {
            id: 1000,
            title: "Learn React State",
            completed: true,
            }],
    };
    
    addTodo = (e) => {
        e.preventDefault();
        const task = e.target.elements.task.value.trim();
        if (task.length > 0) {
            this.setState((state) => {
                return {
                todos: [
                    ...state.todos, 
                    {
                    id: Math.floor(Math.random()* 9000) + 1001,
                    title: task,
                    completed: false,
                    },
                    ],
                };
            },
            () => (e.target.elements.task.value = "")
            );
        }
    };

    deleteTodo = (id) => {
        this.setState((state) => {
            return {
                todos: state.todos.filter((todo) => todo.id !== id)
            };
        });
    };

    completeTodo = (id) => {
        this.setState((state) => {
            return {
                todos: state.todos.map( (todo) => 
                    todo.id ===id ? {...todo, completed: true} : todo )
            }
        })
    }

    render() {
        return (
            <div className="container">
                <p>List Task</p>
                <Form addTodo={this.addTodo}/>
                <List 
                    todos={this.state.todos} 
                    deleteTodo={this.deleteTodo} 
                    completeTodo={this.completeTodo}
                />
                
            </div>
        
        );   
    }

}
ReactDOM.render(<TodoLists/>, document.getElementById("todolists"));