import React                  from 'react';
import { Link }               from 'react-router';
import { connect }            from 'react-redux';
import Radium                 from 'radium';
import DocumentMeta           from 'react-document-meta';

const reduxStateToProps = state => ({
  BASE_URL: state.configVars.get('BASE_URL'),
  API_URL: state.configVars.get('API_URL')
});

class Home extends React.Component {

  render() {
    const metaData = {
      title: "Skeleton 4r: Home"
    };

    return (
      <div id="home-view">
        <DocumentMeta {...metaData}/>
        <h1>{'Howdy y’all!'}</h1>
        <ul>
          <li>{`\`BASE_URL\` is ${this.props.BASE_URL}`}</li>
          <li>{`\`API_URL\` is ${this.props.API_URL}`}</li>
        </ul>
        <p>Set these values via environment variables. For development, <code>cp .env.sample .env</code> and then add/set variables in that file for your specific app.</p>
      </div>
    );
  }

}

export default connect(reduxStateToProps)(Radium(Home));
