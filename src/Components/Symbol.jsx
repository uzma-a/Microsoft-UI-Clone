import React, { useState } from 'react';

const Symbols = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleClick = (index) => {
        setSelectedIndex(index);
    };

    const symbols = [
        {
            id: 1,
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={selectedIndex === 0 ? 4 : 1.5} />
                    <path d="M9.5 11.1998V12.8002C9.5 14.3195 9.5 15.0791 9.95576 15.3862C10.4115 15.6932 11.0348 15.3535 12.2815 14.6741L13.7497 13.8738C15.2499 13.0562 16 12.6474 16 12C16 11.3526 15.2499 10.9438 13.7497 10.1262L12.2815 9.32594C11.0348 8.6465 10.4115 8.30678 9.95576 8.61382C9.5 8.92086 9.5 9.6805 9.5 11.1998Z" fill="currentColor" />
                </svg>
            )
        },
        {
            id: 2,
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
                    <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth={selectedIndex === 1 ? 4 : 1.5} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 3,
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={selectedIndex === 2 ? 4 : 2} strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 4,
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={selectedIndex === 3 ? 4 : 2} strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 5,
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
                    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth={selectedIndex === 4 ? 4 : 1.5} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        }
    ];

    return (
        <div className='symbol flex items-center justify-center mt-6'>
            <ul className='flex items-center justify-center gap-6 cursor-pointer'>
                {symbols.map((symbol, index) => (
                    <li key={symbol.id} onClick={() => handleClick(index)}>
                        {symbol.svg}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Symbols;
