import React from 'react';

export default function WaitlistForm() {
    return (
        <div className="flex flex-col items-center w-full mt-0 gap-6">
            <a
                href="https://app.rezlabs.org/"
                className="btn launch-app-btn !rounded-xl cursor-pointer whitespace-nowrap !min-h-[50px] !h-[50px] !py-0 !px-[2.25rem] text-[1.1rem] max-[768px]:text-[1.3rem] text-center"
            >
                LAUNCH APP
            </a>
        </div>
    );
}
