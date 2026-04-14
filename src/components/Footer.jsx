const Footer = () => {
  return (
    <footer style={{
      background: 'rgba(255,255,255,0.95)',
      padding: '20px',
      textAlign: 'center',
      marginTop: 'auto',
      borderTop: '1px solid #eee',
      color: '#666',
      fontSize: '14px'
    }}>
      <div style={{marginBottom: '10px'}}>
        <strong> Student Performance Analyzer</strong>
      </div>
      <div>
        Powered by <span style={{color: '#667eea'}}>KNN Machine Learning </span> 
        | Made with Students
      </div>
      <div style={{marginTop: '10px', fontSize: '12px'}}>
         Performance Prediction
      </div>
    </footer>
  );
};

export default Footer;