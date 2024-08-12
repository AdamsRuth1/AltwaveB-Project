import React, { useState } from 'react';

export default function DashboardMessage() {
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false);
    };

    return (
        visible && (
            <div className='' style={{
                backgroundColor: "#0F1316",
                borderRadius: "16px 0 16px 16px", // Top-right corner is sharp
                padding: "16px",
                width: "264px",
            }}>
                <div>
                    <div className="flex justify-end mb-4">
                        <button
                            className="flex items-center justify-center bg-[#353C42] text-white rounded-full w-8 h-8"
                            onClick={handleClose}
                        >
                            X
                        </button>
                    </div>
                    <p className="font-Modarat text-base leading-6 font-normal text-white">
                        You must complete your profile before making any transactions on Tuition
                    </p>
                </div>
            </div>
        )
    );
}
