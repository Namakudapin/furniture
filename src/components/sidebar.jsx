// components/Sidebar.jsx
import { LayoutGrid, ArrowLeftRight, Library, Calendar, CreditCard, Settings } from 'lucide-react';

export default function Sidebar() {
  return (
    <>
      <div className="w-64 flex-shrink-0" />
      <div className="fixed left-0 top-0 h-screen w-64 p-6 bg-white shadow-md overflow-y-auto">
        <div className="w-16 h-16 bg-emerald-400 flex items-center justify-center rounded-lg mb-8">
          <img
            src="/sofa 1.svg"
            alt="Logo"
            className="w-14 h-14"
          />
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-4">
          <div className="flex items-center gap-3 text-emerald-500 bg-emerald-50 p-3 rounded-lg hover:bg-emerald-100 transition">
            <LayoutGrid size={24} />
            <span>Dashboard</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500 p-3 rounded-lg hover:bg-gray-100 transition">
            <ArrowLeftRight size={24} />
            <span>Exchange</span>   
          </div>
          <div className="flex items-center gap-3 text-gray-500 p-3 rounded-lg hover:bg-gray-100 transition">
            <Library size={24} />
            <span>Library</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500 p-3 rounded-lg hover:bg-gray-100 transition">
            <Calendar size={24} />
            <span>Schedules</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500 p-3 rounded-lg hover:bg-gray-100 transition">
            <CreditCard size={24} />
            <span>Payouts</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500 p-3 rounded-lg hover:bg-gray-100 transition">
            <Settings size={24} />
            <span>Settings</span>
          </div>
        </nav>

        {/* Security Section */}
        <div className="mt-8 bg-gradient-to-tr from-emerald-500 to-green-400 text-white p-6 rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4 text-emerald-500 shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11v8m4-4H8m4-8a4 4 0 118 0 4 4 0 11-8 0z"
              />
            </svg>
          </div>
          <h3 className="font-semibold mb-2 text-lg">Keep You Safe!</h3>
          <p className="text-sm opacity-90 mb-4">Update your security password, keep your account safe</p>
          <button className="bg-white text-emerald-600 px-4 py-2 rounded-lg text-sm font-medium shadow hover:bg-gray-50 transition">
            Update Privacy
          </button>
        </div>
      </div>
    </>
  );
}
