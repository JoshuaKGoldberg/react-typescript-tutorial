/// <reference path="lib/react.d.ts" />
/// <reference path="lib/react-dom.d.ts" />
/// <reference path="lib/react-global.d.ts" />
/// <reference path="app.tsx" />

document.onreadystatechange = function () {
    if (document.readyState !== "interactive") {
        return;
    }
    
    ReactDOM.render(
        <App />,
        document.querySelector("#app"));
};
