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
        <h3>LinkedIn</h3>
        <h3>GitHub</h3>
        <h3>Email</h3></div>}
    </section>
  )
}

export default Connect
