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

const data = [
  { release: "Release 1", performance: 100000, ave: 120000 },
  { release: "Release 2", performance: 200000, ave: 250000 },
  { release: "Release 3", performance: 700000, ave: 750000 },
];

export default function ReleaseCharts() {
  const [tab, setTab] = useState("sent"); // "drafts" or "sent"

  return (
    <div className="w-full ">
      {/* Charts */}
      <div className="flex md:flex-row flex-col gap-6 mb-6 w-full">
        {/* Performance Chart */}
        <div className="bg-white p-4 rounded-xl md:w-1/2 ">
          <p className=" mb-2 text-xl  mb-4">Performance by Release</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="release" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="performance" fill="#FBDFDF" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* AVE Chart */}
        <div className="bg-white p-4 rounded-xl  md:w-1/2">
          <p className=" mb-2 text-xl  mb-4">AVE by Release</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="release" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="ave" fill="#fbeddfff" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border rounded-lg overflow-hidden w-[240px] md:w-[600px] mx-auto">
        <button
          onClick={() => setTab("drafts")}
          className={`flex-1 p-2 text-sm font-medium ${
            tab === "drafts" ? "bg-white text-gray-800" : "bg-gray-200 text-gray-400"
          }`}
        >
          Drafts Releases (0)
        </button>
        <button
          onClick={() => setTab("sent")}
          className={`flex-1 p-2 text-sm font-medium ${
            tab === "sent" ? "bg-white text-gray-800" : "bg-gray-200 text-gray-400"
          }`}
        >
          Sent Releases (3)
        </button>
      </div>

      {/* Optional: Tab Content */}
      <div className="mt-4 text-center text-gray-600">
        {tab === "drafts" ? "No draft releases yet." : "Showing sent releases."}
      </div>
    </div>
  );
}
