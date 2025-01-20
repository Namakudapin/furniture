// app/page.js
'use client'

import React from 'react';
import { Users, DollarSign, Package, ClipboardCheck } from 'lucide-react';
import Sidebar from '@/components/sidebar';
import DashboardCard from './components/admin-dashboard-card';
import DashboardChart from './components/admin-dashboard-chart';

const data = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 600 },
  { name: 'Thu', value: 400 },
  { name: 'Fri', value: 500 },
  { name: 'Sat', value: 350 },
  { name: 'Sun', value: 450 },
];

export default function Page() {
  const dashboardData = [
    { name: 'Pengunjung', price: '9784.79', change: '+2.2%', color: 'bg-white', icon: <Users className="w-6 h-6 text-blue-500" /> },
    { name: 'Penjualan', price: '8741.19', change: '-5.2%', color: 'bg-white', icon: <DollarSign className="w-6 h-6 text-green-500" /> },
    { name: 'Item', price: '4567.16', change: '+4.5%', color: 'bg-white', icon: <Package className="w-6 h-6 text-orange-500" /> },
    { name: 'Tes', price: '6547.79', change: '+6.5%', color: 'bg-white', icon: <ClipboardCheck className="w-6 h-6 text-purple-500" /> },
  ];

  return (
    <div className="flex min-h-screen bg-[#EFF3FD]">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-black">Hello Diapinn</h1>
          <div className="flex items-center gap-4">
            <input type="text" placeholder="Search" className="bg-white rounded-lg px-4 py-2 w-64" />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8 h-[20%]">
          {dashboardData.map((dashboard) => (
            <DashboardCard key={dashboard.name} {...dashboard} data={data} />
          ))}
        </div>

        <DashboardChart data={data} />
      </div>
    </div>
  );
}
