const reportWebVitals = onPerfEntry => {
  // Only import web-vitals if onPerfEntry is provided and is a function
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Dynamic import only when needed to reduce initial bundle size
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    }).catch(err => {
      // Handle import errors gracefully
      console.error('Failed to load web-vitals:', err);
    });
  }
};

export default reportWebVitals;
