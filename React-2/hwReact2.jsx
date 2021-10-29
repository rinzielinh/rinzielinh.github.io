const pokemons = [
      {
        id: 1,
        name: "Charmander",
        type: "fire",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
      },
      {
        id: 2,
        name: "Squirtle",
        type: "water",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
      },
      {
        id: 3,
        name: "Butterfree",
        type: "flying",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
      },
      {
        id: 4,
        name: "Rattata",
        type: "normal",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
      },
      {
        id: 5,
        name: "Metapod",
        type: "bug",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
      }
]

const ImagePokemon = (props) => <div className="pokemonImage">
    <img src={props.src}  />
</div>

ImagePokemon.propTypes = {
    src: PropTypes.string.isRequired,   
};

const Name = (props) => <div className="pokemonName">{props.name}</div>
Name.propTypes = {
    name: PropTypes.string.isRequired,
};

const Type = (props) => <div className="type">Type: {props.type} </div>
Type.propTypes = {
    type: PropTypes.string.isRequired,
};

class Box extends React.Component {
    render() {
        return (
            <div className="box">
                <Name name={this.props.pokemon.name}/>
                <ImagePokemon src={this.props.pokemon.image} />
                <Type type={this.props.pokemon.type} />
            </div>
        );
    }
}


const Wrap = () => (
        <div className="wrap">
          
           {pokemons.map((m) => (
                   <Box key={m.id} pokemon={m}/>
            ))}
            
        </div> 
);

const Title = () => (
    <h1>Pokedex</h1>
);

class App extends React.Component {
    render() {
        return (
           
        <div className="container">
            <Title/>
            <Wrap/>

        </div>
        );   
    }
}
ReactDOM.render(<App/>, document.getElementById("app"));


const fitArr = [
    {
        id: 6,
        src: "./top.jpeg",
        title: "TOPS"
    },
    {
        id: 7,
        src: "./bottom.jpeg",
        title: "BOTTOMS"
    },
    {
        id: 8,
        src: "./monokini.jpeg",
        title: "ONE PIECES"
    }

]

const AllAboutFit = () => <div className="all-about-fit">All about fit</div>;

const Recommendations = () => <div className="recommendations">Bad Bunny Swimwear understands that all bodies are unique & our mission is to create suits that celebrate all different body types and let individuality shine. That’s why we obsess about fit and don’t overlook a single detail. Click to
see our fit guide and recommendations so you can find your perfect fit!</div>;



class GuidePhoto extends React.Component {
    render () {
        return (
            <div className="fit-guide-photo" >
                <div className="hover-effect example">
                     <img className="blue" src={this.props.fitArr.src} alt=""></img>
                </div>
                <div className="blue-title">{this.props.fitArr.title}</div>                     
   
            </div>
        )
    }
}

// const GuidePhoto = (props) => (
// <div className="fit-guide-photo">
//    <div className="hover-effect example">
//        <img className="blue" src={props.src} alt=""></img>
//    </div>
//    <div className="blue-title">{props.title}</div>                     
   
// </div>
// );
const FitGroups = () => (
    <div className="fit-guide-group">
          {fitArr.map((n) => (
                   <GuidePhoto key={n.id} fitArr={n}/>
            ))}
    </div>);

class FitGuide extends React.Component { 
    render() {
        return ( 
        <div className="fitGuide">
            <AllAboutFit/>
            <Recommendations/>
            <FitGroups/>
        </div>
        );   
    }
}
ReactDOM.render(<FitGuide/>, document.getElementById("fit-guide"));