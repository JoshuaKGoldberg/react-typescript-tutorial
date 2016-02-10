/// <reference path="lib/react.d.ts" />
/// <reference path="lib/react-dom.d.ts" />
/// <reference path="lib/react-global.d.ts" />

interface IClockProps {
    time: number;
}

class Clock extends React.Component<IClockProps, any> {
    render() {
        return <em>({this.props.time})</em>;
    }
}
