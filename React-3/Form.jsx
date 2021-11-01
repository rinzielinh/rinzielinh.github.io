class Form extends React.Component {
    render () {
        return (
            <form onSubmit>
                <input type="text" id="input" className="input" ></input>
                <button>Add</button>
            </form>
        )
    }
}

const ListItem = ({todo: {id, title, completed}}) => (
    <li className="listItem">
        <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
)

const List = ({todos, deleteTodo }) => (
            <ul className="list">
                {todos.map((todo) => (
                    <ListItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
                ))}

            </ul>)




class Forms extends React.Component {
    state = {
        todos:[
            {
            id: 100,
            title: "Learn React State",
            completed: false
            }],
    };

    // addTodo = (e) => {
    //     e.preventDefault();
    //     const task = e.target.elements.task.value.trim();
    //     if (task.length > 0) {
    //         thisSetstate(state) => {
    //         return {
    //             todos: [...state.todos, 
    //                 {
    //                     id: Math.floor(Math.random()*900) + 101,
    //                     title: task,
    //                     completed: false,
    //                 },

    //             ],
    //         };
    //     }
    //     () => (e.target.elements.task.value = "")
    // }
    // }

    deleteTodo = (id) => {
        this.setState((state) => {
            return {
                todos: this.state.todos.filter((todo) => todo.id!== id)
            }

        })
    }

    // completeTodo = (id) => 


    render() {
        return (
            <div className="container">
               
                <Form addTodo={this.addTodo}/>
                <List todos={this.state.todos}/>
                <ListItem/>
            </div>
        
        );   
    }

}
ReactDOM.render(<Forms/>, document.getElementById("form"));