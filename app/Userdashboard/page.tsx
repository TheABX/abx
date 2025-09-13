"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

const buyersData = [
  { id: 1, name: "Gayk Gevorkyan", status: "requested", avatar: "G", hasNotification: true, company: "TechFlow Solutions", amount: "$2.4M" },
  { id: 2, name: "Sarah Johnson", status: "approved", avatar: "S", company: "Digital Dynamics", amount: "$1.8M" },
  { id: 3, name: "Mike Chen", status: "denied", avatar: "M", company: "Innovate Labs", amount: "$3.2M" },
];

const filterOptions = [
  { label: "Approved", value: "approved", active: false, count: 12 },
  { label: "Requested", value: "requested", active: true, hasNotification: true, count: 8 },
  { label: "Denied", value: "denied", active: false, count: 3 },
];

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("buyers");
  const [activeFilter, setActiveFilter] = useState("requested");

  const tabs = [
    { id: "buyers", label: "Buyers", count: 23 },
    { id: "offers", label: "Offers", count: 7 },
    { id: "due-diligence", label: "Due diligence", count: 4 },
    { id: "apa", label: "APA", count: 2 },
    { id: "escrow-close", label: "Escrow & close", count: 1 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar alwaysWhite={true} />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600 text-lg">Manage your acquisitions and listings</p>
        </div>

        {/* Navigation Options */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <div className="flex items-center justify-center">
            <nav className="flex items-center space-x-16">
              <a href="#" className="group relative">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-blue-600 font-semibold text-lg group-hover:text-blue-700 transition-colors">My acquisition</span>
                </div>
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-600 rounded-full"></div>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-semibold text-lg transition-colors">My listing</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 relative font-semibold text-lg transition-colors">
                Inbox
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
              </a>
            </nav>
          </div>
        </div>

        {/* Primary Navigation Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-blue-50 text-blue-700 border border-blue-200"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <span>{tab.label}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  activeTab === tab.id ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600"
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Secondary Filters - Only show for Buyers tab */}
        {activeTab === "buyers" && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex space-x-3">
                {filterOptions.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setActiveFilter(filter.value)}
                    className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 relative ${
                      filter.active
                        ? "border-blue-200 text-blue-700 bg-blue-50"
                        : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <span>{filter.label}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                      filter.active ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600"
                    }`}>
                      {filter.count}
                    </span>
                    {filter.hasNotification && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
                    )}
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <button className="p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Content List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h3 className="font-semibold text-gray-900">Recent Buyers</h3>
          </div>
          {buyersData.map((buyer, index) => (
            <div
              key={buyer.id}
              className={`flex items-center justify-between p-6 hover:bg-gray-50 cursor-pointer transition-all duration-200 ${
                index !== buyersData.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-lg">{buyer.avatar}</span>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-900">{buyer.name}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      buyer.status === 'approved' ? 'bg-green-100 text-green-700' :
                      buyer.status === 'requested' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {buyer.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{buyer.company}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-gray-900">{buyer.amount}</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 