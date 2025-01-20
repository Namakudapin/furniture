// app/components/Card.js
'use client'

import React from 'react';
import { ResponsiveContainer, LineChart, Line } from 'recharts';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const DashboardCard = ({ name, price, change, color, icon, data }) => (
  <div
    className={`${color} p-6 rounded-2xl shadow-md border border-gray-200 transition-all hover:shadow-lg hover:scale-[1.02]`}
  >
    {/* Header Section */}
    <div className="flex items-start justify-between mb-4">
      <div className="flex flex-col">
        <div className="text-gray-700">{icon}</div>
        <h1 className="text-gray-900 font-bold text-xl mt-2">{name}</h1>
      </div>
      <div className="h-12 w-24">
        <ResponsiveContainer>
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={change.startsWith('+') ? '#10B981' : '#EF4444'}
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>

    {/* Footer Section */}
    <div className="flex items-center justify-between">
      <span className="text-2xl font-semibold text-gray-800">${price}</span>
      <span
        className={`flex items-center gap-1 text-lg font-medium ${
          change.startsWith('+') ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {change.startsWith('+') ? (
          <ArrowUpRight className="w-5 h-5" />
        ) : (
          <ArrowDownRight className="w-5 h-5" />
        )}
        {change}
      </span>
    </div>
  </div>
);

export default DashboardCard;
