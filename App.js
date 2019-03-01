

    const Pet = (props) =>{
        return React.createElement("div",{},[
            React.createElement("h1",{},props.name),
            React.createElement("h2",{},props.animal),
            React.createElement("h2",{},props.breed)
        ]);
    }
    const App = () => {
        //empty brackets or null for no attributes if element has id or class can be added here
        return React.createElement("div",{},[
        React.createElement('h1',{},'Adopt me'),
        React.createElement(Pet,{
            name:"luna",
            animal:"dog",
            breed:"havaneese"
        }),
        React.createElement(Pet,{
            name:"pepper",
            animal:"bird",
            breed:"cockatiel"
        }),
        React.createElement(Pet,{
            name:"doink",
            animal:"cat",
            breed:"mixed"
        })
        ])
    }
    ReactDOM.render(React.createElement(App),document.getElementById('root'));
