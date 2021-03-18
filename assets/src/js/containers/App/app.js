import React from 'react';
class App extends React.Component {
  render () {
    const text = 'Django + React + Webpack + Babel = Awesome App';
    return (
      <h1 className="title">{text}</h1>
    )
  }
}
export default App;