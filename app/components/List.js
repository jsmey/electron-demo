import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import * as FormActions from '../actions/form';
import util from 'util';
import styles from './Counter.module.css';
import { Link } from 'react-router';

class List extends Component {
    static propTypes = {
    getList: PropTypes.func.isRequired,
    dataList: PropTypes.array.isRequired
  };
  divStyle : {
   'margin-top':100
 };
  render() {
      const { getList, dataList} = this.props;
    return (
        <div>
          <div className={styles.backButton}>
            <Link to="/">
              <i className="fa fa-arrow-left fa-3x" />
            </Link>
          </div>
          <div style={this.divStyle}>
          <br/><br/><br/>
            <button onClick={() => getList()}>Load</button>
            <div className={"dataList"}>
            <ul>
              {this.props.dataList.map(function(listValue, i){
                return <li key={i}>{util.inspect(listValue)}</li>;
              })}
            </ul>

            </div>
            </div>
      </div>
    );
  }

}
export default List;
