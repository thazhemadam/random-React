class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        };
    }

    componentDidMount(){
        try{
            const jsonCount = localStorage.getItem('counterCount');
            const countInt = parseInt(jsonCount,10);
            if(!isNaN(countInt)){
                this.setState(()=>({count: countInt}));
            }
        }catch(e){
            console.log(e);
        }

    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.count!=this.state.count){
            // console.log(this.state.count);
            localStorage.setItem('counterCount',this.state.count);
        }
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
                count: this.props.count
            };
        });
        // console.log('handleReset');
    }

    render(){ 
        return(
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick = {this.handleAddOne}>Increment</button> 
                {/* &nbsp; */}
                <button onClick = {this.handleMinusOne}>Decrement</button> 
                {/* &nbsp; */}
                <button onClick = {this.handleReset}>Reset</button>
            </div>)
    }
}

Counter.defaultProps = {
        count:0
};
ReactDOM.render(<Counter />, document.getElementById('app'));