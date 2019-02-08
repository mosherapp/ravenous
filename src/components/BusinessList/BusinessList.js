import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  business(item) {
    return <Business business={item} />;
  }
  render() {
    return (
      <div className="BusinessList">
        {this.props.businesses.map(this.business)}
      </div>
    );
  }
}

export default BusinessList;