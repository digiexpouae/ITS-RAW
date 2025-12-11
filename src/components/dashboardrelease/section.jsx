import React, { useState } from 'react';
import { Calendar, Edit, Eye, Send, Trash2, X } from 'lucide-react';

export default function PressReleaseCard() {
  const [showPreview, setShowPreview] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [formData, setFormData] = useState({
    title: 'Contemporary Asian-French Restaurant Opens in Dubai Marina',
    subtitle: 'A lively new dining destination brings refined fusion cuisine to the heart of Dubai Marina.',
    date: '2025-12-06',
    location: 'Dubai, United Arab Emirates – 22 February 2025',
    content: `A new contemporary Asian-French restaurant has opened its doors in the heart of Dubai Marina, offering diners an innovative fusion of Eastern and Western culinary traditions.

The restaurant features a carefully curated menu that blends classic French techniques with bold Asian flavors, creating a unique dining experience that celebrates both cuisines.

"We're thrilled to bring this concept to Dubai Marina," said [Name], owner and head chef. "Our menu combines the elegance of French cuisine with the vibrant, bold flavors of Asia, creating dishes that are both sophisticated and exciting."

The restaurant's interior reflects its culinary philosophy, featuring a modern design that incorporates elements from both cultures.

Located in Dubai Marina, the restaurant is open for lunch and dinner seven days a week.`
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto">
        {/* Press Release Card */}
        <div className="p-4 rounded-lg  shadow-lg transition-colors">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <p className="text-xl font-semibold pr-8">
              {formData.title}
            </p>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button 
                onClick={() => setShowEdit(true)}
                className="p-2  cursor-pointer rounded-lg transition-colors"
              >
                <Edit className="w-5 h-5 text-gray-400" />
              </button>
              <button 
                onClick={() => setShowPreview(true)}
                className="flex items-center cursor-pointer gap-2 px-4 py-2  rounded-lg transition-colors"
              >
                <Eye className="w-5 h-5 text-gray-400 " />
                <span className="text-gray-400">Preview</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors">
                <Send className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">Send (Insufficient Send Credits)</span>
              </button>
              <button className="p-2  rounded-lg transition-colors">
                <Trash2 className="w-5 h-5 text-red-500" />
              </button>
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 text-gray-400 mb-6">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">12/6/2025</span>
          </div>

          {/* Content with Icon */}
          <div className="flex gap-6">
            {/* Restaurant Icon */}
            <div className="flex-shrink-0">
              <svg
                className="w-24 h-24"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 20C45 20 40 22 37 26C34 22 29 20 24 20C16 20 10 26 10 34C10 38 12 42 15 44V70C15 73 17 75 20 75H45C48 75 50 73 50 70V44C53 42 55 38 55 34C55 26 49 20 41 20C38 20 35 21 33 23C32 21 31 20 30 20H50Z"
                  stroke="#EF4444"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M25 45C28 42 35 42 38 45M42 45C45 42 52 42 55 45M58 45C61 42 68 42 71 45"
                  stroke="#EF4444"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <ellipse
                  cx="50"
                  cy="30"
                  rx="25"
                  ry="15"
                  stroke="#EF4444"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M25 30V65C25 68 27 70 30 70H70C73 70 75 68 75 65V30"
                  stroke="#EF4444"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>

            {/* Press Release Text */}
            <div className="flex-1">
              <p className="text-gray-300 leading-relaxed">
                <span className="text-gray-400">#</span> {formData.title} {formData.subtitle.substring(0, 50)}...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors z-10"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            {/* Preview Content */}
            <div className="p-12 text-center">
              {/* Chef Icon */}
              <div className="flex justify-center mb-8">
                <svg
                  className="w-48 h-48"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="100" cy="50" rx="40" ry="20" stroke="#EF4444" strokeWidth="4" fill="none" />
                  <path d="M60 50 L60 90 C60 95 65 100 70 100 L130 100 C135 100 140 95 140 90 L140 50" stroke="#EF4444" strokeWidth="4" fill="none" />
                  <circle cx="100" cy="120" r="35" stroke="#EF4444" strokeWidth="4" fill="none" />
                  <circle cx="90" cy="115" r="3" fill="black" />
                  <circle cx="110" cy="115" r="3" fill="black" />
                  <path d="M 90 128 Q 100 135 110 128" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <line x1="70" y1="45" x2="75" y2="40" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  <line x1="72.5" y1="42.5" x2="72.5" y2="42.5" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  <line x1="130" y1="45" x2="125" y2="40" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  <line x1="127.5" y1="42.5" x2="127.5" y2="42.5" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 70 155 Q 60 140 50 130" stroke="#EF4444" strokeWidth="4" fill="none" strokeLinecap="round" />
                  <path d="M 130 155 Q 140 140 150 130" stroke="#EF4444" strokeWidth="4" fill="none" strokeLinecap="round" />
                  <rect x="42" y="122" width="4" height="20" fill="black" transform="rotate(-45 44 132)" />
                  <ellipse cx="48" cy="126" rx="6" ry="4" fill="#EF4444" transform="rotate(-45 48 126)" />
                </svg>
              </div>

              {/* Title */}
              <h1 className="text-4xl font-bold text-black mb-6">
                {formData.title}
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                {formData.subtitle}
              </p>
                  <p className="text-sm font-semibold text-black mb-6">
                {formData.location}
              </p>

              {/* Content */}
              <div className="text-gray-800 space-y-4 leading-relaxed">
                {formData.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-sm">
                    {paragraph}
                  </p>))}

                  </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEdit && (
        <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-5xl w-full max-h-[95vh] overflow-y-auto relative border border-zinc-800">
            {/* Header */}
            <div className="sticky top-0  px-6 py-4 flex items-center justify-between z-10">
              <p className="text-xl text-black font-semibold ">Edit your press release</p>
              <button
                onClick={() => setShowEdit(false)}
                className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column - Chef Image */}
                <div className=" rounded-lg p-8 flex items-center justify-center">
                  <svg
                    className="w-64 h-64"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse cx="100" cy="50" rx="40" ry="20" stroke="#EF4444" strokeWidth="4" fill="none" />
                    <path d="M60 50 L60 90 C60 95 65 100 70 100 L130 100 C135 100 140 95 140 90 L140 50" stroke="#EF4444" strokeWidth="4" fill="none" />
                    <circle cx="100" cy="120" r="35" stroke="#EF4444" strokeWidth="4" fill="none" />
                    <circle cx="90" cy="115" r="3" fill="#EF4444" />
                    <circle cx="110" cy="115" r="3" fill="#EF4444" />
                    <path d="M 90 128 Q 100 135 110 128" stroke="#EF4444" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <line x1="70" y1="45" x2="75" y2="40" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
                    <line x1="130" y1="45" x2="125" y2="40" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 70 155 Q 60 140 50 130" stroke="#EF4444" strokeWidth="4" fill="none" strokeLinecap="round" />
                    <path d="M 130 155 Q 140 140 150 130" stroke="#EF4444" strokeWidth="4" fill="none" strokeLinecap="round" />
                    <rect x="42" y="122" width="4" height="20" fill="#EF4444" transform="rotate(-45 44 132)" />
                    <ellipse cx="48" cy="126" rx="6" ry="4" fill="#EF4444" transform="rotate(-45 48 126)" />
                  </svg>
                </div>

                {/* Right Column - Form Fields */}
                <div className="space-y-6">
                  {/* Press Release Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Press Release Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full  border border-zinc-700 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-zinc-500"
                    />
                  </div>

                  {/* Subtitle */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Subtitle
                    </label>
                    <input
                      type="text"
                      name="subtitle"
                      value={formData.subtitle}
                      onChange={handleInputChange}
                      className="w-full  border border-zinc-700 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-zinc-500"
                    />
                  </div>

                  {/* Location/Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Location & Date
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full  border border-zinc-700 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-zinc-500"
                    />
                  </div>
                </div>
              </div>

              {/* Full Width Content */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  # Content
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  rows={12}
                  className="w-full border border-zinc-700 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-zinc-500 font-mono text-sm"
                />
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={() => setShowEdit(false)}
                  className="px-6 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowEdit(false)}
                  className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}