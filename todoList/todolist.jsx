const ListItem = ( {todo: {  id, title, completed }, deleteTodo , completeTodo}) => {
    return <div className="tasks">
    <p>{title}</p>
    <div className="task-update-delete">
    <div className="delete">
    <a href="#">
    {
        completed ? 
            <i className="fas fa-times-circle" onClick={ () => deleteTodo(id)}></i>           
            :
            <input type="checkbox" onChange ={() => completeTodo(id)}/>

    }
    </a>
    </div>
    </div>
    </div>   
    
}



const List = ({ todos, deleteTodo, completeTodo }) => {
    return (
        <div>
            {todos.map((todo) => (
                <ListItem 
                key={todo.id} 
                todo={todo} 
                deleteTodo={deleteTodo} 
                completeTodo={completeTodo}
                />
            ))}
        </div>
)}

// cu phap class properties

class Form extends React.Component {
    state = {
        task: "",
    };

    handleChange = (e) => {
        this.setState({
            task: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.task.trim().length > 0) {
            this.props.addTodo(this.state.task);
            this.setState({task: ""});
        }
    };

    render() {
        
        return (
            
            <form action="" onSubmit={this.handleSubmit}
            >
                <input 
                ref={(el) => (this.ref = el) }
                type="text"                 
                value={this.state.task}
                placeholder="..."
                onChange={this.handleChange}
                >
                </input>
                <div className="new-task-button">
                <a href="#"><button >Add</button></a>
                <a href="#"><button onClick={() => console.log('this.ref :>> ', this.ref)}>Show Ref</button></a></div>             
            </form>
            
        )
    }
}

// thông qua ref có thể thao tác trực tiếp với DOM, nhưng phải thông qua element, ref phải trỏ đến 1 element thât


// cách 2 để viết, ko dùng arrow function

// class Form extends React.Component {
//     state = {
//         task: "",
//     };

//     constructor () {
//         super();

//         this.handleChange =  this.handleChange.bind(this);
//         this.handleSubmit =  this.handleSubmit.bind(this);
//     }

//     handleChange (e) {
//         this.setState({
//             task: e.target.value,
//         });
//     };

//     handleSubmit(e) {
//         e.preventDefault();
//         if (this.state.task.trim().length > 0) {
//             this.props.addTodo(this.state.task);
//             this.setState({task: ""});
//         }
//     };

//     render() {
        
//         return (
//             <form action="" onSubmit={this.handleSubmit}
//             >
//                 <input 
//                 type="text"                 
//                 value={this.state.task}
//                 onChange={this.handleChange}
//                 >
//                 </input>
//                 <button>Add</button>              
//             </form>
//         )
//     }
// }

// cach 3 

// class Form extends React.Component {
//     state = {
//         task: "",
//     };

//     handleChange (e) {
//         this.setState({
//             task: e.target.value,
//         });
//     };

//     handleSubmit(e) {
//         e.preventDefault();
//         if (this.state.task.trim().length > 0) {
//             this.props.addTodo(this.state.task);
//             this.setState({task: ""});
//         }
//     };

//     render() {
        
//         return (
//             <form action="" onSubmit={this.handleSubmit.bind(this)}
//             >
//                 <input 
//                 type="text"                 
//                 value={this.state.task}
//                 onChange={this.handleChange.bind(this)}
//                 >
//                 </input>
//                 <button>Add</button>              
//             </form>
//         )
//     }
// }



class TodoLists extends React.Component {
    state = {
        todos:[
            {
            id: 1000,
            title: "Learn React State",
            completed: true,
            }],
    };
    
    addTodo = (task) => {   
        if (task.length > 0) {
            this.setState(
                (state) => {
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
            });
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
                 <div className="sider">
            <div className="dots">
                <div className="dot1"></div>
                <div className="dot2"></div>
                <div className="dot3"></div>
            </div>

            <div className="my-name">
                <h2>Hello, Linh</h2>
                <p>Add more works in your todoList here</p>
            </div>


            
                <Form addTodo={this.addTodo}/>               
            
            
            <div className="uppertaskarea">
                <div className="taskarea">
                <List 
                    todos={this.state.todos} 
                    deleteTodo={this.deleteTodo} 
                    completeTodo={this.completeTodo}
                />

                </div>
            </div>

           
            </div>
                
               
                
            </div>
        
        );   
    }

}
ReactDOM.render(<TodoLists/>, document.getElementById("todolists"));


// condition ? ComponentA : ComponentB

// condition && Component 

// if else

// return null thi element se ko hien thi