"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ReleaseCharts({ chartData }) {
  if (!chartData || chartData.length === 0) return null;

  return (
    <div className="w-full">
      {/* Charts */}
      <div className="flex md:flex-row flex-col gap-24 mb-6 w-full">
        {/* Performance Chart */}
        <div className="bg-white p-4 rounded-xl w-full md:w-1/2">
          <p className="mb-2 text-xl mb-4">Performance by Release</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="visits" fill="#FBDFDF" name="Monthly Visits (k)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* AVE Chart */}
        <div className="bg-white p-4 rounded-xl md:w-1/2">
          <p className="mb-2 text-xl mb-4">AVE by Release</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="ave" fill="#fbeddfff" name="AVE ($)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
