class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    handleAddOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count+1
            };
        });
        // console.log(this.state);
    }

    handleMinusOne(){
        this.setState((prevState)=>{
            return{
                count: prevState.count-1
            };
        });
        // console.log('handleMinusOne');
    }

    handleReset(){
        this.setState((prevState)=>{
            return {
                count: 0
            };
        });
        // console.log('handleReset');
    }

    render(){ 
        return(
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick = {this.handleAddOne}>Increment</button>
                <button onClick = {this.handleMinusOne}>Decrement</button>
                <button onClick = {this.handleReset}>Reset</button>
            </div>)
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));