import * as React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Welcome to Rishabh Clinic</h1>
    </header>
  )
}

const headerStyle: React.CSSProperties = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '5px'
}

export default Header;
