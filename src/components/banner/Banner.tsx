import React from 'react';

const Banner: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row py-16 justify-between items-center gap-12">
            <div className="md:w-1/2 w-full">
                <h1 className="md:text-5xl text-2xl font-medium mb-7">La mejor orientación automatizada para ti</h1>
                

                <button className="btn-primary">Subscribe</button>
            </div>

            <div className="md:w-1/2 w-full flex items-center justify-end">
                
            </div>
        </div>
    )
}

export default Banner