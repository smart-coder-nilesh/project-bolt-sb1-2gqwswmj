import React, { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
interface MemberInfoProps {
    isDarkMode: boolean;
}
const MemberInfo: React.FC<MemberInfoProps> = ({ isDarkMode }) => {
    const members = [
        { id: 1, name: 'Chairman', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
        { id: 2, name: 'Vice-Chairman', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150' },
        { id: 3, name: 'Teasurer', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150' },
        { id: 4, name: 'Security', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150' },
    ];
    return (
        <div className="space-y-4">
            <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Society Members</h3>
            {members.map(member => (
                <div key={member.id} className={`flex items-center justify-between p-3 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                    <div className="flex items-center gap-3">
                        <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full" />
                        <span className={isDarkMode ? 'text-white' : 'text-gray-800'}>{member.name}</span>
                    </div>
                    <MoreHorizontal className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                </div>
            ))}
        </div>
    );
}

export default MemberInfo;
