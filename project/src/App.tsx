import React, { useState } from 'react';
import { Home, CreditCard, Users, Mail, MousePointer, ArrowUpRight, Settings, Link, MoreHorizontal, Sun, Moon, ImagePlus, Twitter ,Linkedin,Youtube} from 'lucide-react';

const members = [
  { id: 1, name: 'Sattie', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
  { id: 2, name: 'Freebies', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150' },
  { id: 3, name: 'Parkland Trustlock', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150' },
  { id: 4, name: 'BestWork', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150' },
];

const recentPayments = [
  { id: 1, member: 'Sattie', amount: '₹5,000', date: '2024-03-10', status: 'Completed' },
  { id: 2, member: 'Freebies', amount: '₹3,500', date: '2024-03-09', status: 'Pending' },
  { id: 3, member: 'Parkland Trustlock', amount: '₹7,200', date: '2024-03-08', status: 'Completed' },
];

const paymentFacilities = [
  'UPI Payment',
  'Cash',
  'Credit Card',
  'Cheque',
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-6">
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Payment Methods</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
                <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Online Payment</h3>
              </div>
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
                <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>UPI</h3>
                {/* <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Link</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Capital Method</p> */}
              </div>
            </div>
            {/*  */}
            <div className={`w-72 border-l ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} pl-6`}>
              <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Payment Details</h3>
              <select className={`w-full p-2 border rounded-lg mb-4 ${
                isDarkMode 
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
                className={`w-full p-2 border rounded-lg mb-4 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' 
                    : 'bg-white border-gray-300 text-gray-800'
                }`}
              />

              {/* Image Upload Section */}
              <div className="mb-4">
                <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Payment Proof</h3>
                <div className={`border-2 border-dashed rounded-lg p-4 ${
                  isDarkMode ? 'border-gray-700' : 'border-gray-300'
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
                <button className={`px-6 py-2 border rounded-lg ${
                  isDarkMode 
                    ? 'border-gray-700 text-gray-300' 
                    : 'border-gray-300 text-gray-800'
                }`}>Cancel</button>
              </div>
            </div>
            
          </div>
        );
      case 'payments':
        return (
          <div className="space-y-6">
            <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Payment History</h2>
            <div className="space-y-4">
              {recentPayments.map(payment => (
                <div key={payment.id} className={`flex items-center justify-between p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                  <div>
                    <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{payment.member}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{payment.date}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{payment.amount}</p>
                    <p className={`text-sm ${payment.status === 'Completed' ? 'text-green-500' : 'text-orange-500'}`}>
                      {payment.status}
                    </p>
                  </div>
                </div>

              ))}
            </div>
          </div>
        );
      default:
        return <div className={isDarkMode ? 'text-white' : 'text-gray-800'}>Section under development</div>;
    }
  };

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
    <div className={`min-h-screen bg-gradient-to-b ${isDarkMode ? 'from-gray-900 to-gray-800' : 'from-blue-900 to-blue-700'} p-8`}>
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Main Dashboard Card */}
        <div className={`rounded-2xl shadow-xl p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              
              <img src="./icon/logo.png" alt="Company Logo" className="w-40 h-25 mt-5" />
              {/* <Lock className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} /> */}
              {/* <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Society Members</span> */}
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Add</button>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)} 
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  isDarkMode ? 'bg-gray-700 text-white' : 'bg-blue-100 text-blue-600'
                }`}
              >
                {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
              </button>
            </div>
          </div>

          {/* Sidebar and Main Content */}
          <div className="flex flex-wrap gap-6 lg:flex-nowrap">
            {/* Sidebar */}
            <div className="w-16 flex flex-row sm:flex-col gap-4">
              <button 
                onClick={() => setActiveSection('home')}
                className={`p-3 rounded-lg ${
                  activeSection === 'home' 
                    ? 'bg-blue-500 text-white' 
                    : isDarkMode 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                      : 'bg-gray-100 hover:bg-blue-50'
                }`}
              >
                <Home className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setActiveSection('payments')}
                className={`p-3 rounded-lg ${
                  activeSection === 'payments' 
                    ? 'bg-blue-500 text-white' 
                    : isDarkMode 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                      : 'bg-gray-100 hover:bg-blue-50'
                }`}
              >
                <CreditCard className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setActiveSection('links')}
                className={`p-3 rounded-lg ${
                  activeSection === 'links' 
                    ? 'bg-blue-500 text-white' 
                    : isDarkMode 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                      : 'bg-gray-100 hover:bg-blue-50'
                }`}
              >
                <Link className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setActiveSection('settings')}
                className={`p-3 rounded-lg ${
                  activeSection === 'settings' 
                    ? 'bg-blue-500 text-white' 
                    : isDarkMode 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                      : 'bg-gray-100 hover:bg-blue-50'
                }`}
              >
                <Settings className="w-5 h-5" />
              </button>
            </div>

            {/* Main Content */}
            
            <div className="flex-1">
              {renderContent()}
            </div>
            {/* Society Members List */}
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
            
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-2">Web aphetion semandone</h2>
          <p className="mb-8">Social Refonary</p>

          <div className="flex justify-center gap-12">
            <div className="text-center cursor-pointer" onClick={() => setActiveSection('payments')}>
              <div className={`p-4 rounded-xl mb-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <CreditCard className={`w-6 h-6 mx-auto ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <p className="text-sm">Verify payment</p>
            </div>
            <div className="text-center">
              <div className={`p-4 rounded-xl mb-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <Users className={`w-6 h-6 mx-auto ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <p className="text-sm">For society members</p>
            </div>
            <div className="text-center">
              <div className={`p-4 rounded-xl mb-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <Mail className={`w-6 h-6 mx-auto ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <p className="text-sm">Veritys payments</p>
            </div>
            <div className="text-center">
              <div className={`p-4 rounded-xl mb-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <MousePointer className={`w-6 h-6 mx-auto ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <p className="text-sm">Feed payments</p>
            </div>
            <div className="text-center">
              <div className={`p-4 rounded-xl mb-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <ArrowUpRight className={`w-6 h-6 mx-auto ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <p className="text-sm">Fariby reution</p>
            </div>
          </div>
        </div>
        
      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} py-8 mt-12 rounded-2xl`}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              {/* <Logo className="h-12" /> */}
              <img src="./icon/logo.png" alt="Company Logo" className="w-40 h-25 mt-5" />
              <p className={`text-sm  ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Your Partner in Managing Society Needs
              </p>
            </div>
            <div>
              <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Quick Links</h3>
              <ul className={`space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Services</h3>
              <ul className={`space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>Payment Processing</li>
                <li>Society Management</li>
                <li>Expense Tracking</li>
                <li>Reports & Analytics</li>
              </ul>
            </div>
            <div>
              <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className={`hover:text-blue-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className={`hover:text-blue-700 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className={`hover:text-red-600 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className={`pt-8 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                © {new Date().getFullYear()} Societty Pay. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-blue-500`}>Privacy Policy</a>
                <a href="#" className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-blue-500`}>Terms of Service</a>
                <a href="#" className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-blue-500`}>Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default App;