import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { message: 'Awaiting response from /api' };
    }

    render() {
        return <div className="App">{this.state.message}</div>;
    }

    async componentDidMount() {
        const response = await fetch('/api');
        const { message } = await response.json();

        this.setState({ message });
    }
}

export default App;
