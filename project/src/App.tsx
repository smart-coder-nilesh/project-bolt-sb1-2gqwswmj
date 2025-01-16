import  { useState, useRef, useEffect } from 'react';
import { Home, CreditCard, Users, Mail, MousePointer, ArrowUpRight, Settings, Sun, Moon, PieChart, Twitter, Linkedin, Youtube } from 'lucide-react';
import PaymentSection from '../PaymentSection/PaymentSection.tsx';
import MemberInfo from '../MemberList/MemberInfo.tsx';


const recentPayments = [
  { id: 1, member: 'mishra 115/4', amount: '₹5,000', date: '2024-03-10', status: 'Completed' },
  { id: 2, member: 'Topre', amount: '₹3,500', date: '2024-03-09', status: 'Pending' },
  { id: 3, member: 'panday', amount: '₹7,200', date: '2024-03-08', status: 'Completed' },
];
const paymentInsights = {
  bankBalance: 250000,
  breakdown: {
    maintenance: 150000,
    fine: 25000,
    interest: 75000
  },
  monthlyData: [
    { month: 'Jan', fine: 100, actual: 35000 },
    { month: 'Feb', fine: 200, actual: 48000 },
    { month: 'Mar', fine: 300, actual: 49000 },
    { month: 'Apr', fine: 500, actual: 20000 },
    { month: 'May', fine: 10000, actual: 46000 },
    { month: 'Jun', fine: 5000, actual: 25000 }
  ]
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [svgWidth, setSvgWidth] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'online' | 'upi'>('online');

  useEffect(() => {
    const updateSvgWidth = () => {
      if (svgRef.current) {
        const parentWidth = svgRef.current.parentElement?.getBoundingClientRect().width;
        if (parentWidth) {
          setSvgWidth(parentWidth);
        }
      }
    };

    updateSvgWidth(); // Set the initial width

    // Optional: Update width on window resize
    window.addEventListener('resize', updateSvgWidth);

    return () => {
      window.removeEventListener('resize', updateSvgWidth);
    };
  }, []);
  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-6">
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Payment Methods</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button
                onClick={() => setSelectedPaymentMethod('online')}
                className={`p-4 rounded-lg transition-all ${selectedPaymentMethod === 'online'
                  ? `${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'} text-white shadow-lg shadow-blue-500/50`
                  : `${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-blue-50 hover:bg-blue-100'} ${isDarkMode ? 'text-white' : 'text-gray-800'}`
                  }`}
              >
              <h3 className="font-semibold mb-2">Online Payment</h3>
              </button>
              <button
                onClick={() => setSelectedPaymentMethod('upi')}
                className={`p-4 rounded-lg transition-all ${selectedPaymentMethod === 'upi'
                  ? `${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'} text-white shadow-lg shadow-blue-500/50`
                  : `${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-blue-50 hover:bg-blue-100'} ${isDarkMode ? 'text-white' : 'text-gray-800'}`
                  }`}
              >
                <h3 className="font-semibold mb-2">UPI</h3>
              </button>
            </div>

            {selectedPaymentMethod === 'online' && (
              <PaymentSection isDarkMode={isDarkMode} />
            )}
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
      case 'insights':
        return (
          <div className="space-y-8">
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  ₹{paymentInsights.bankBalance.toLocaleString()}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Bank Balance</p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                  <p className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    ₹{paymentInsights.breakdown.maintenance.toLocaleString()}
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Maintenance</p>
                </div>
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                  <p className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    ₹{paymentInsights.breakdown.fine.toLocaleString()}
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Fine</p>
                </div>
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                  <p className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    ₹{paymentInsights.breakdown.interest.toLocaleString()}
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Interest</p>
                </div>
              </div>

              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <h4 className={`text-sm font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  Maintenance Trends
                </h4>
                <div className="relative h-40">
                  {/* Grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[0, 1, 2, 3, 4].map((_, i) => (
                      <div
                        key={i}
                        className={`w-full h-px ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`}
                      />
                    ))}
                  </div>

                  {/* Graph lines */}
                  <div className="parent absolute inset-0 flex items-end px-4">
                    <svg ref={svgRef} className="w-full h-full">
                      {/* fine line */}
                      <polyline
                        points={paymentInsights.monthlyData
                          .map((data, i) => `${(i * (svgWidth / paymentInsights.monthlyData.length))},${100 - (data.fine / 50000) * 100}`)
                          .join(' ')}
                        fill="none"
                        stroke={isDarkMode ? '#60A5FA' : '#3B82F6'}
                        strokeWidth="2"
                        className="transition-all duration-300"
                      />
                      {/* Actual line */}
                      <polyline
                        points={paymentInsights.monthlyData
                          .map((data, i) => `${(i * (svgWidth / paymentInsights.monthlyData.length))},${100 - (data.actual / 50000) * 100}`)
                          .join(' ')}
                        fill="none"
                        stroke={isDarkMode ? '#4ADE80' : '#22C55E'}
                        strokeWidth="2"
                        className="transition-all duration-300"
                      />
                    </svg>
                  </div>

                  {/* X-axis labels */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between">
                    {paymentInsights.monthlyData.map((data, index) => {
                      // Calculate the X position based on the width of the SVG and the index
                      const xPosition = (index * (svgWidth / paymentInsights.monthlyData.length));

                      return (
                        <span
                          key={index}
                          className={`absolute text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                          style={{
                            left: `${xPosition}px`, // Position label based on calculated X value
                          }}
                        >
                          {data.month}
                        </span>
                      );
                    })}
                  </div>

                </div>

                <div className="flex justify-center gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Expected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Actual</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <div className={isDarkMode ? 'text-white' : 'text-gray-800'}>Section under development</div>;
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
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Admin</button>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-blue-100 text-blue-600'
                  }`}
              >
                {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
              </button>
            </div>
          </div>

          {/* Sidebar and Main Content */}
          <div className="flex flex-wrap gap-6">
            {/* Sidebar */}
            <div className="w-16 flex flex-row sm:flex-col gap-4">
              <button
                onClick={() => setActiveSection('home')}
                className={`p-3 rounded-lg ${activeSection === 'home'
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
                className={`p-3 rounded-lg ${activeSection === 'payments'
                  ? 'bg-blue-500 text-white'
                  : isDarkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 hover:bg-blue-50'
                  }`}
              >
                <CreditCard className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveSection('insights')}
                className={`p-3 rounded-lg ${activeSection === 'insights'
                  ? 'bg-blue-500 text-white'
                  : isDarkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 hover:bg-blue-50'
                  }`}
              >
                <PieChart className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveSection('settings')}
                className={`p-3 rounded-lg ${activeSection === 'settings'
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
            
            <MemberInfo isDarkMode={isDarkMode} />

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
                <img src="./icon/logo.png" alt="Company Logo" className="w-40 h-25 mt-5" />
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
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

