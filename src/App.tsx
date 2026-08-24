import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '50px', backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
      <div style={{ background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', maxWidth: '500px', margin: '0 auto' }}>
        <h1 style={{ color: '#333' }}>Hello, I'm a Web3 Enthusiast! 👋</h1>
        <p style={{ fontSize: '18px', color: '#666' }}>1st Year MAC Student at IGDTUW</p>
        <hr style={{ border: '0', height: '1px', background: '#ccc', margin: '20px 0' }} />
        
        <h3 style={{ color: '#0070f3' }}>Current Learning Journey:</h3>
        <ul style={{ listStyleType: 'none', padding: '0', lineHeight: '2', textAlign: 'left', display: 'inline-block' }}>
          <li>💻 Learning C Programming Foundations</li>
          <li>🌐 Exploring Web3 & Blockchain concepts via AssetMerkle</li>
          <li>🚀 Just built my first ever React.js page for this task!</li>
        </ul>

        <p style={{ marginTop: '30px', fontSize: '14px', color: '#999' }}>Built with React.js & Vite</p>
      </div>
    </div>
  );
}

export default App;
