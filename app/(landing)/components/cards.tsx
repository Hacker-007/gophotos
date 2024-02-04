import React from 'react';

interface CardProps {
    headerText: string;
    paragraphText?: string;
    children?: React.ReactNode;
    className?: string;
}

export default function Card({ headerText, paragraphText, children, className }: CardProps) {
    return (
            <div className={`border-2 rounded-3xl border-red-500 w-2/5 h-full flex justify-center items-center pl-4 ${className}`}>
                
                <div>
                <h2 className="text-3xl pb-5 ">
                    {headerText}
                </h2>

                <p className='mt-2 text-lg'>
                    {paragraphText}
                </p>

                {children}
                
                </div>
            
            </div>
    );
}


