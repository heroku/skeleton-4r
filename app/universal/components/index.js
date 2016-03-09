import React                  from 'react';
import { connect }            from 'react-redux';
import Radium, { Style }      from 'radium';
import DocumentMeta           from 'react-document-meta';

import globalStyles           from 'universal/styles/global';

const reduxStateToProps = state => ({});

class App extends React.Component {

  render() {
    const props = this.props;
    const { pathname } = props.location;
    const key = pathname.split('/')[1] || 'root';
    const metaData = {
      title: 'Skeleton 4r'
    };

    return (
      <div id="app-view">
        <DocumentMeta {...metaData}/>
        <Style rules={globalStyles} />
        {React.cloneElement(props.children || <div />, { key })}
      </div>
    );
  }
}

export default connect(reduxStateToProps)(Radium(App));
