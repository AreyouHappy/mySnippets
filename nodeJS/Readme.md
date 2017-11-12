### React Component
> rc

```
import React, { Component, PropTypes } from 'react';
const propTypes = {
};
const defaultProps = {
};
class ${1:MyComponent} extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>${1:MyComponent}</div>
        );
    }
}
${1:MyComponent}.propTypes = propTypes;
${1:MyComponent}.defaultProps = defaultProps;
export default ${1:MyComponent};
```

# Parse, ParseServer
Parse, ParseServer 관련 Snippets

### parse find
> parsefind

```
var GameScore = Parse.Object.extend("GameScore");
var query = new Parse.Query(GameScore);
query.equalTo("playerName", "Dan Stemkoski");
query.find({
success: function(results) {
alert("Successfully retrieved " + results.length + " scores.");
for (var i = 0; i < results.length; i++) {
  var object = results[i];
  console.log(object.id + ' - ' + object.get('playerName'));
}
},
error: function(error) {
console.log("Error: " + error.code + " " + error.message);
}
});
```

### parse save
> parsesave

```
var GameScore = Parse.Object.extend("GameScore");
var gameScore = new GameScore();

gameScore.set("score", 1337);
gameScore.set("playerName", "Sean Plott");
gameScore.set("cheatMode", false);

gameScore.save(null, {
  success: function(gameScore) {
    console.log('New object created with objectId: ' + gameScore.id);
  },
  error: function(gameScore, error) {
    console.log('Failed to create new object, with error code: ' + error.message);
  }
});
```
