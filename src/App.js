import React from "react";

//class App extends Component {
//  render() {
//    return (
//      <React.Fragment>
//        <label htmlFor="foo">foo</label>
//        <input type="text" onChange={() => {console.log('change')}} />
//      </React.Fragment>
//    )
//  };
//}

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
