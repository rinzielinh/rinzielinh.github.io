class SlideButton extends React.Component {
    constructor () {
        super();

        this.state = {
            status: false,
        };
        
    }
    render () {
        return (
        <div 
        onClick={() => this.setState({status: !this.state.status})}
        className={"slide-button " + (this.state.status ? "on" : "off")}>

        </div>
        );
    }
}



class Counter extends React.Component {
    constructor () {
        super();

        this.state = {
            count: 0,
        };
        // setInterval( () => this.setState({ count: this.state.count + 1 }))
    }

    render() {
        return <p>Current count: {this.state.count} </p>
    }
}

class Click extends React.Component {
    // constructor () {
    //     super();

    //     this.state = {
    //         click: 0,
    //     };
    // }

    // class properties : cu phap 2 de khai bao
    state = {
        click: 0,
    };
    // callback (state, props) => return 


    render() {
        return (
            <div>
                 <p>Current click {this.state.click}</p>
                <button
                    onClick= {() => 
                    this.setState({ click: this.state.click - 1})}
                >Down</button> 

                <button
                onClick= {() => 
                    this.setState(
                        { click: this.state.click + 1})}
                >Up</button>
            </div>           
        ) 
    }
}



class App extends React.Component {
    // state = {
    //     todos:
    //     [{
    //         id:100,
    //         title:"Learn React State",
    //         completed: false
    //     }]
    // };
    render() {
        return (
            <div className="container">
                <SlideButton/>
                <Counter/>
                <Click/>
                
            </div>
        
        );   
    }
}
ReactDOM.render(<App/>, document.getElementById("app"));