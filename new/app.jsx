var route = '';
var Parent = React.createClass({

getInitialState: function() {
    return {route: true};
  },

  handleClick : function() {
    this.setState({route: !this.state.route});
    //setInterval(handleClick,1000);
  },

  componentDidMount : function(){
  setInterval(this.handleClick,1000);
  },

  render: function() {
    var change = this.state.route ? <First/> : <Second/>;
    return (
      <p>
        {change}
      </p>
    );
  }

});


var First = React.createClass({
render : function (){
return(
<div>
  <h1>First</h1>
</div>
);
}
});

var Second = React.createClass({
render : function (){
return(
<div>
  <h1>Second</h1>
</div>
);
}
});

ReactDOM.render(
<Parent/>,document.getElementById("content")
);
