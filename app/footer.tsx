import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-10 bottom-0 w-full h-20 bg-black text-white flex justify-between items-center px-10">
      <p>© 2024 GoPhotos</p>
      <div>
        <a href="/terms-of-service" className="text-white pr-4">Terms of Service</a>
        <a href="/privacy-policy" className="text-white">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
