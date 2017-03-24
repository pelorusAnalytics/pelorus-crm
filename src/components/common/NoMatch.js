import React, {Component} from 'react';

class NoMatch extends Component {
  render() {
    return(
      <div className="row" style={{paddingTop: 40}}>
        <div className="col-md-4 col-md-offset-4">
          <h1 className="text-center">404 <br />
            <small className="text-center">Page not found</small>
          </h1>

          <p className="text-center">
            Sorry, but the page you are looking for has note been found. Try checking the URL for error, then hit the refresh button on your browser or try found something else in our app.
          </p>
        </div>
      </div>
    )
  }
}

export default NoMatch
