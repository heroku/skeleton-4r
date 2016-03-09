import React                  from 'react';
import { Link }               from 'react-router';
import { connect }            from 'react-redux';
import Radium                 from 'radium';
import DocumentMeta           from 'react-document-meta';

const reduxStateToProps = state => ({});

class Home extends React.Component {

  render() {
    const metaData = {
      title: "Skeleton 4r: Home"
    };

    return (
      <div id="home-view">
        <DocumentMeta {...metaData}/>
        <h1>{'Howdy y’all!'}</h1>
      </div>
    );
  }

}

export default connect(reduxStateToProps)(Radium(Home));
