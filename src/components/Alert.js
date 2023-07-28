import React from 'react';

const Alert = ({ massage, onClose }) => {
    return (
        <div className="custom-alert-overlay sticky  w-full flex justify-around items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-blue-400">
            <div id="alert-1" role="alert">

                <span class="sr-only">Info</span>
                <div class="ml-3 text-sm font-medium">
                    <h1>{massage}</h1>
                </div>

            </div>
            <div><button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' onClick={onClose}>OK</button></div>
        </div>
    );
};

export default Alert;