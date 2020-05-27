console.log('App is running.');
const textToShow = 'This is some hidden text.';

let hiddenText = null;
let visibilityStatus = false;
const toggleVisbility = (e) => {
    visibilityStatus = !visibilityStatus;
    render();
}
const appRoot = document.getElementById('app');

const render = () => {
const template = (
    <div>
        <h1>Visibility Toggle</h1>
        <button onClick = {toggleVisbility} id = "togglerButton"> {visibilityStatus? 'Hide!' : 'Show!'} </button>
        <div>
            {visibilityStatus&& <p>This is some hidden text.</p>}
        </div>
    </div>
);


ReactDOM.render(template,appRoot);
}
render();