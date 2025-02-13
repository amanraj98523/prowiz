import { useState } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { ChartBarIcon, DocumentTextIcon, CheckCircleIcon, XCircleIcon, Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { GoChevronDown } from "react-icons/go";
import img from "./assets/image 29.png"
import imgs from "./assets/image 28.png"
function App() {
  const [selectedApp, setSelectedApp] = useState('All');
  const [selectedLine, setSelectedLine] = useState('All');
  const [selectedReason, setSelectedReason] = useState('All');
  const [selectedDate, setSelectedDate] = useState('Today');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const barData = [
    { name: 'Party Pack', passed: 90, rejected: 60 },
    { name: 'Tub', passed: 55, rejected: 95 },
  ];

  const pieData = [
    { name: 'Incorrect Price', value: 52 },
    { name: 'Missing Coding', value: 48 },
  ];

  const COLORS = ['#0047FF', '#00E6C3'];

  const tableData = [
    { application: 'Application 1', line: 'Line 1', product: 'Party Pack', reason: 'Wrong Coding', quantity: 10, time: '01/02/2024' },
    { application: 'Application 2', line: 'Line 2', product: 'Tub', reason: 'Wrong Price', quantity: 12, time: '01/02/2024' },
    { application: 'Application 3', line: 'Line 3', product: 'Party Pack', reason: 'Wrong Factory Code', quantity: 8, time: '01/02/2024' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
              <img src={img} alt="ProWiz Analytics" className="h-74.25 w-220 ml-2 lg:ml-0" />

            </div>
            <div className="flex items-center">
            <img src={imgs} alt="Profile" className="h-10 w-10 rounded-full border border-gray-500" />
 
              <span className="ml-2 text-gray-700 flex flex-row items-center">
              <select
              style={{border:"none"}}
              value={selectedApp}
              onChange={(e) => setSelectedApp(e.target.value)}
            >
              <option>User</option>
            </select>  
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-6 transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:mt-16`}>
        <nav className="space-y-2">
          <a href="#" className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
            <ChartBarIcon className="h-5 w-5" />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100">
            <DocumentTextIcon className="h-5 w-5" />
            <span>Camera View</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100">
            <DocumentTextIcon className="h-5 w-5" />
            <span>Event Log</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 pt-16 p-4 lg:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 space-y-4 lg:space-y-0 custom" style={{marginTop:"50px"}} >
          <h1 className="text-2xl font-bold">KPI Tracker</h1>
          <div className="grid grid-cols-2 lg:flex lg:space-x-4 gap-2">
            <select 
              className="border rounded-lg px-4 py-2"
              value={selectedApp}
              onChange={(e) => setSelectedApp(e.target.value)}
            >
              <option>Application</option>
            </select>
            <select 
              className="border rounded-lg px-4 py-2"
              value={selectedLine}
              onChange={(e) => setSelectedLine(e.target.value)}
            >
              <option>Line Number</option>
            </select>
            <select 
              className="border rounded-lg px-4 py-2"
              value={selectedReason}
              onChange={(e) => setSelectedReason(e.target.value)}
            >
              <option>Reason for rejection</option>
            </select>
            <select 
              className="border rounded-lg px-4 py-2"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            >
              <option>Select date Range</option>
            </select>
            <button className="col-span-2 lg:col-span-1 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2">
              <DocumentTextIcon className="h-5 w-5" />
              <span>Download Data</span>
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-2 mb-4">
              <DocumentTextIcon className="h-6 w-6 text-blue-600" />
              <h3 className="text-gray-600">Units Processed</h3>
            </div>
            <p className="text-3xl font-bold">2,575</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-2 mb-4">
              <CheckCircleIcon className="h-6 w-6 text-blue-600" />
              <h3 className="text-gray-600">Units Passed</h3>
            </div>
            <p className="text-3xl font-bold">814</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-2 mb-4">
              <XCircleIcon className="h-6 w-6 text-blue-600" />
              <h3 className="text-gray-600">Units Rejected</h3>
            </div>
            <p className="text-3xl font-bold">12</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-2 mb-4">
              <ChartBarIcon className="h-6 w-6 text-blue-600" />
              <h3 className="text-gray-600">Throughput (Units/Minute)</h3>
            </div>
            <p className="text-3xl font-bold">110.41</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Split of Units Processed Today</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <Bar dataKey="passed" fill="#0047FF" name="Passed" />
                  <Bar dataKey="rejected" fill="#00E6C3" name="Rejected" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Reasons For Rejection</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    // innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Application</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Line Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason For Rejection</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tableData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.application}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.line}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.reason}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;