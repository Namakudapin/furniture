// app/components/MarketOverview.js
'use client'

import React from 'react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const DashboardChart = ({ data }) => (
  <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm border border-gray-200">
    {/* Header */}
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Market Overview</h2>
        <p className="text-green-600 text-sm font-medium">+2740.59 (1.25%)</p>
      </div>
      <div className="flex gap-2">
        {['ALL', '1H', '6M', '1Y', 'YTD'].map((period) => (
          <button
            key={period}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              period === 'ALL'
                ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {period}
          </button>
        ))}
      </div>
    </div>

    {/* Chart */}
    <div className="h-72">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="2 2" stroke="#E5E7EB" />
          <XAxis
            dataKey="name"
            tick={{ fill: '#6B7280', fontSize: 12 }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#6B7280', fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              fontSize: '14px',
              boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
            }}
            itemStyle={{ color: '#374151' }}
          />
          <Legend
            wrapperStyle={{
              fontSize: '12px',
              color: '#6B7280',
              marginTop: '-10px',
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#10B981"
            strokeWidth={3}
            dot={{ fill: '#10B981', r: 6 }}
            activeDot={{ r: 8, fill: '#059669' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default DashboardChart;
