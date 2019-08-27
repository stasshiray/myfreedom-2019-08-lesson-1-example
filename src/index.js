import React from "react";
import ReactDOM from "react-dom";
import './App.css';

const Title = () => <h1>Title</h1>;

const title = <Title />;
const title2 = <Title />;

const kinds = {
    'info': 'gray',
    'danger': 'red'
};   <Button kind="info" disabled={true} text="do not click" />
  </div>
);

/* React.createElement('div', {}, [
    React.createElement('h1', {}, 'Hello, world'),
    React.createElemnt('ul', {}, [
        React.createElemtn('li', {} , '1'),
        React.createElemtn('li', {}, '2')
    ])
])*/

ReactDOM.render(divTitle, document.getElementById("root"));
