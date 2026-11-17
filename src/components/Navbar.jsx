import React from 'react';

const Navbar = ({ setCurrentPage, currentPage }) => {
  const navItems = ['Home', 'My Network', 'Jobs', 'Messaging', 'Notifications', 'Me'];

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '52px', backgroundColor: 'white', borderBottom: '1px solid #e0dfdc', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', zIndex: 100 }}>
      <div 
        style={{ fontWeight: 'bold', color: '#0a66c2', fontSize: '24px', cursor: 'pointer' }} 
        onClick={() => setCurrentPage('Home')}
      >
        LinkedIn Clone
      </div>
      <div>
        <input type="text" placeholder="Search" style={{ backgroundColor: '#eef3f8', border: 'none', borderRadius: '4px', padding: '8px 12px', width: '200px' }} />
      </div>
      <div style={{ display: 'flex', gap: '20px', color: 'gray', alignItems: 'center', height: '100%' }}>
        {navItems.map(item => (
          <div 
            key={item}
            onClick={() => setCurrentPage(item)}
            style={{ 
              cursor: 'pointer', 
              color: currentPage === item ? 'black' : 'gray',
              borderBottom: currentPage === item ? '2px solid black' : '2px solid transparent',
              height: '100%',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar; 