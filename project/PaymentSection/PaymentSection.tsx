import React, { useState} from 'react';
import { ImagePlus } from 'lucide-react';
interface PaymentSectionProps {
    isDarkMode: boolean;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({ isDarkMode }) => {

    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const paymentFacilities = [
        'UPI Payment',
        'Bank Transfer',
        'Credit Card',
        'Cheque',
    ];

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className={`w-72 border-l ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} pl-6`}>
            <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Payment Details</h3>
            <select className={`w-full p-2 border rounded-lg mb-4 ${isDarkMode
                ? 'bg-gray-800 border-gray-700 text-white'
                : 'bg-white border-gray-300 text-gray-800'
                }`}>
                <option>Select payment facility</option>
                {paymentFacilities.map((facility, index) => (
                    <option key={index}>{facility}</option>
                ))}
            </select>

            <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Entry</h3>
            <input
                type="text"
                placeholder="Lock cheating"
                className={`w-full p-2 border rounded-lg mb-4 ${isDarkMode
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500'
                    : 'bg-white border-gray-300 text-gray-800'
                    }`}
            />

            <div className="mb-4">
                <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Payment Proof</h3>
                <div className={`border-2 border-dashed rounded-lg p-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-300'
                    } text-center cursor-pointer relative`}>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    {selectedImage ? (
                        <div className="relative">
                            <img
                                src={selectedImage}
                                alt="Payment proof"
                                className="max-h-32 mx-auto rounded-lg"
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                            >
                                ×
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center">
                            <ImagePlus className={`w-8 h-8 mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                Upload payment proof
                            </p>
                            <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                                Click or drag image here
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex justify-between mt-8">
                <button className="px-6 py-2 bg-blue-500 text-white rounded-lg">Verify</button>
                <button className={`px-6 py-2 border rounded-lg ${isDarkMode
                    ? 'border-gray-700 text-gray-300'
                    : 'border-gray-300 text-gray-800'
                    }`}>Cancel</button>
            </div>
        </div>
    )
};

export default PaymentSection;