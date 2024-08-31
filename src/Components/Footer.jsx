import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <hr className='mb-12 ' />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Microsoft</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">About Microsoft</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Products</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Microsoft 365</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Surface</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Xbox</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Windows</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Developers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.56c-.88.39-1.83.65-2.82.77a4.92 4.92 0 0 0 2.17-2.71 9.9 9.9 0 0 1-3.13 1.2 4.91 4.91 0 0 0-8.36 4.48c-4.08-.2-7.7-2.16-10.12-5.12a4.91 4.91 0 0 0 1.52 6.55 4.88 4.88 0 0 1-2.23-.62v.06c0 2.38 1.7 4.36 3.95 4.81a4.95 4.95 0 0 1-2.22.08 4.92 4.92 0 0 0 4.59 3.41 9.86 9.86 0 0 1-6.1 2.1c-.4 0-.79-.02-1.17-.07a13.9 13.9 0 0 0 7.54 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.62A10.02 10.02 0 0 0 24 4.56z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.633 3H4.368A1.368 1.368 0 0 0 3 4.368v15.264A1.368 1.368 0 0 0 4.368 21h8.192v-6.763H10.11v-2.697h2.45V9.77c0-2.425 1.474-3.748 3.63-3.748 1.031 0 1.918.077 2.176.111v2.526h-1.493c-1.172 0-1.4.556-1.4 1.372v1.8h2.801l-.365 2.697h-2.436V21h4.778A1.368 1.368 0 0 0 21 19.632V4.368A1.368 1.368 0 0 0 19.633 3z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-9.96 4.45-9.96 9.96 0 4.405 3.64 8.08 8.01 8.88v-6.27H8.688v-2.61H10.05V9.77c0-1.35.791-2.1 1.945-2.1.557 0 1.144.1 1.144.1v1.25H12.5c-.753 0-1.007.466-1.007.94v1.08h2.16l-.345 2.61h-1.815V21.88c4.37-.8 8.01-4.475 8.01-8.88 0-5.51-4.46-9.96-9.96-9.96z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.41 19.41A9.969 9.969 0 0 0 21 12c0-5.52-4.48-10-10-10S1 6.48 1 12s4.48 10 10 10c2.57 0 4.92-.98 6.71-2.59l4.29 4.29 1.41-1.41-4.29-4.29zm-7.41.09c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">&copy; 2024 Microsoft Corporation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
