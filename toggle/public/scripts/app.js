'use strict';

console.log('App is running.');
var textToShow = 'This is some hidden text.';

var hiddenText = null;
var visibilityStatus = false;
var toggleVisbility = function toggleVisbility(e) {
    visibilityStatus = !visibilityStatus;
    render();
};
var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisbility, id: 'togglerButton' },
            ' ',
            visibilityStatus ? 'Hide!' : 'Show!',
            ' '
        ),
        React.createElement(
            'div',
            null,
            visibilityStatus && React.createElement(
                'p',
                null,
                'This is some hidden text.'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};
render();
