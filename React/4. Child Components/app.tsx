/// <reference path="lib/react.d.ts" />
/// <reference path="lib/react-dom.d.ts" />
/// <reference path="lib/react-global.d.ts" />

interface IAppProps {
    text: string;
}

interface IAppState {
    time: number;
}

class App extends React.Component<IAppProps, IAppState> {
    constructor(props) {
        super(props);
        
        this.state = {
            time: new Date().getTime()
        };
        
        setInterval(
            () => this.setState({
                time: new Date().getTime()
            }),
            1);
    }
    
	render() {
        return (<p>
            {this.props.text}
            <br />
            <Clock time={this.state.time} />
        </p>);
    }
}
