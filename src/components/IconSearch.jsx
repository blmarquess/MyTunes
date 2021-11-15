import React from 'react';

const searchCustom = `text-center text-green-900 border-t-1 border-b-1
border-green-400 bg-white rounded-r-full -rounded-l-full p-4 -m-3`;

export default () => (
  <div className={ searchCustom }>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={ 2 }
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  </div>
);
