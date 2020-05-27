class VisibilityToggle extends React.Component{

    constructor(props){
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibilityStatus: false
        };
    }

    toggleVisibility(){
        this.setState((prevState)=>{
            return {
                visibilityStatus : !prevState.visibilityStatus
            };
        });
    }

    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick = {this.toggleVisibility} id = "togglerButton"> {this.state.visibilityStatus? 'Hide!' : 'Show!'} </button>
                <div>
                    {this.state.visibilityStatus&& <p>This is some hidden text.</p>}
                </div>
            </div>        
    );
    }
}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));
