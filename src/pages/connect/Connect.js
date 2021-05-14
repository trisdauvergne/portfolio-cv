import React, { useState } from 'react';
import './connect.css';

const Connect = () => {
  const [visibleConnections, setVisibleConnections] = useState(false);
  return (
    <section className="connect content-section">
      <div className="heading-div">
        <h1 onClick={() => setVisibleConnections(!visibleConnections)} className="heading">Connect</h1>
      </div>
      {visibleConnections && <div className="connections">
        <h2 className="sub-heading">LinkedIn</h2>
        <h2 className="sub-heading">GitHub</h2>
        <h2 className="sub-heading">Email</h2></div>}
    </section>
  )
}

export default Connect
