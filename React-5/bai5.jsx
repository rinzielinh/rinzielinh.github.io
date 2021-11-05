const Logo = () => {
    return (
        <div className="logo"> 
            <img src="./logo.jpeg" ></img>
        </div>
            
    )
}


const Product = ({ id, image, title, price, category, rating }) => {
    return (
        <div className="col-3">
            <div className="product">
                <div className="product-thumbnail">
                    <img className="product-pic" src={image} alt={title}></img>
                </div>
                <div className="product-detail">
                   
                    <h4 className="product-title">{title}</h4>
                    <p className="product-price">${price}</p>
                    <p className="product-category">{category}</p>
                    <span>Orders: {rating.count}</span><p className="rating">Rating: {rating.rate}/5</p> 
                </div>
            </div>
        </div>
    )
}



const ProductList = ({products, search, category, order, rating }) => {
    let data = [];

    if (category.length > 0) {
        data = products.filter((p) => category.indexOf(p.category) != -1);
    } else data = products;

    if (search) {
        data = data.filter((d) => d.title.toLowerCase().includes(search) ); 
    }

    if (order == 'unset') {
        data == [];
    } else {
        if (order == 'asc') {
            data.sort((a,b) => a.price - b.price)
        }  else {
            data.sort((a,b) => b.price - a.price)
        }
    }
   
    if (rating == 'unset') {
        data == [];
    } else {
        if (rating == 'asc') {
            data.sort((a,b) => a.rating.rate - b.rating.rate)
        }  else {
            data.sort((a,b) => b.rating.rate - a.rating.rate)
        }  
    }
   
    return (
        <div className="product-list row">
            {data.map((p) => (
                <Product key={p.id} {...p} />
            ))}
        </div>
    );
};

class Timer extends React.Component {
    constructor() {
        super();
    }

    state = {
        count: 0,
    };

    componentDidMount = () => {
        console.log('"Timer da hien thi tren DOM" :>> ', "Timer da hien thi tren DOM");

        this.timer = setInterval(
            () => this.setState({count: this.state.count + 1}), 1000
        );
    };

    componentDidUpdate = () => {
        console.log('Timer da dc cap nhat :>> ', "Timer da dc cap nhat");
    }

    componentWillUnmount = () => {
        console.log('"Timer bi go khoi DOM" :>> ', "Timer bi go khoi DOM");
        clearInterval(this.timer);
    }

    render() {
        return <p>Count: {this.state.count}</p>
    }

}

class App extends React.Component {
    state = {
        search: "",
        categories: [],
        category: [],
        order: "asc",
        rating: "asc",
        showTimer:true,
        products: [],
        loading: true,
    };
    // constructor() {
    //     super();

    //     this.categories = Array.from(new Set(this.state.products.map((p) => p.category)));
    // }

    componentDidMount = () => {
        fetch("https://fakestoreapi.com/products").then(res => res.json()).then(products =>{
            this.setState({categories: Array.from(new Set(products.map((p) => p.category))) ,products, loading: false});
        })
    }
   
    handleCheck = (e) => {
        if (e.target.checked) {
            this.setState((state) => {
                return {
                    category: [...state.category, e.target.value]
                };
            });
        } else {
            this.setState((state) => {
                return {
                    category: state.category.filter((c) => c != e.target.value),
                };
            });
        }
    };

    render() {
        if (this.state.loading) {
            return <div className="loading">
            <div className="boxLoading"></div>
          </div>
        }
        return (
            <div className="container">
                {this.state.showTimer && <Timer />}
                <button 
                    onClick={() => 
                    this.setState({ showTimer: !this.state.showTimer })}>Click me!</button>
                <header className="header"> 
                <Logo />
                <div className="nameBrand">FE16 NDC</div>
                </header>
               
                <main>
                    <div className="row justify-end">
                        <div className="col">
                            <select value={this.state.order} name="" id="" onChange={(e) => this.setState({ order: e.target.value})}>
                                <option value='asc' >Price: Low to High</option>
                                <option value='desc'>Price: High to Low</option>
                                <option value='unset'>Price: Unset</option>

                            </select>
                        </div>

                        <div className="col">
                            <select value={this.state.rating.rate} name="" id="" onChange={(e) => this.setState({ rating: e.target.value})}>
                                <option value='asc' >Rating: Low to High</option>
                                <option value='desc'>Rating: High to Low</option>
                                <option value='unset'>Rating: Unset</option>
                            </select>
                        </div>
                           
                        <div className="col"> 
                            <input
                                placeholder=" Insert name of product"
                                type="text"
                                onChange={(e) =>
                                    this.setState({ search: e.target.value })
                                }
                            />
                        </div>    
                    </div>

                    <div className="row">
                        <div className="col-3">
                            <div>CATEGORIES:</div>
                            <ul className="category-list">
                                {this.state.categories.map((c) => (
                                    <li key={c}>
                                        <input
                                            type="checkbox"
                                            name="category"
                                            id={c}
                                            value={c}
                                            onChange={this.handleCheck}>
                                        </input>
                                        <label htmlFor={c}>{c}</label>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    

                        <div className="col-9"> 
                        
                            <ProductList
                                 products={this.state.products}
                                 search={this.state.search}
                                 category={this.state.category}
                                 order={this.state.order}
                                 rating={this.state.rating}
                            />
                        </div>  
                    </div>
                </main>
            </div>
        );   
    }

}
ReactDOM.render(<App/>, document.getElementById("app"));

