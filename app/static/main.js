var DynamicSearch = React.createClass({
    // initial state
    getInitialState: function(){
        return { searchString: '' };
    },

    // set state, trigger render method
    handleChange: function(e){
        // grab value form input box
        this.setState({searchString: e.target.value});
        console.log("Scope updated")
    },

    componentDidMount: function(){
        $.get('http://www.google.com', function(resp){
            console.log(resp[0])
        })
    },

    render: function(){
        var countries = this.props.items;
        var searchString = this.state.searchString.trim().toLowerCase();

        // filter countries list by value from input box
        if (searchString.length > 0){
            countries = countries.filter(function(c){
                return c.name.toLowerCase().match( searchString )
            });
        }

        return (
            <div>
                <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Search" />
                <ul>
                    {countries.map(function(c){return <li> {c.name}</li>})}
                </ul>
            </div>
        )
    }
});

// list of countries
// list of countries, defined with JavaScript object literals
var countries = [
  {"name": "Sweden"}, {"name": "China"}, {"name": "Peru"}, {"name": "Czech Republic"},
  {"name": "Bolivia"}, {"name": "Latvia"}, {"name": "Samoa"}, {"name": "Armenia"},
  {"name": "Greenland"}, {"name": "Cuba"}, {"name": "Western Sahara"}, {"name": "Ethiopia"},
  {"name": "Malaysia"}, {"name": "Argentina"}, {"name": "Uganda"}, {"name": "Chile"},
  {"name": "Aruba"}, {"name": "Japan"}, {"name": "Trinidad and Tobago"}, {"name": "Italy"},
  {"name": "Cambodia"}, {"name": "Iceland"}, {"name": "Dominican Republic"}, {"name": "Turkey"},
  {"name": "Spain"}, {"name": "Poland"}, {"name": "Haiti"}
];

var candidate = React.createClass({
    render: function(){
        console.log("HI");
        return (<h2>Hillary </h2>)
    }
});

React.render(
    <DynamicSearch items={ countries } />,
    document.getElementById('content')
);
