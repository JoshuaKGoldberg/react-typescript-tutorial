/// <reference path="lib/react.d.ts" />
/// <reference path="lib/react-dom.d.ts" />
/// <reference path="lib/react-global.d.ts" />

interface IAppProps {
    text: string;
}

class App extends React.Component<IAppProps, any> {
	render() {
        return <p>{this.props.text}</p>;
    }
}
