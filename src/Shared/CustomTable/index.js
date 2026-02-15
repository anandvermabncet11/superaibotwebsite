import React from "react";
import { Skeleton } from "@mui/material";

const CustomTable = ({
  tablehead = [], // default empty array
  tablerow = [], // default empty array
  className,
  isLoading,
}) => {
  return (
    <div className={`w-full overflow-hidden ${className || ""}`}>
      {/* Table Container with gradient border */}
      <div className="relative bg-gradient-to-br from-[#0a1219] via-[#0d1519] to-[#0f1b21] rounded-2xl border border-cyan-400/30 shadow-xl shadow-cyan-400/10 overflow-hidden">

        {/* Decorative background effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>

        {/* Accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent"></div>

        {/* Scrollable container */}
        <div className="w-full overflow-x-auto custom-scrollbar relative z-10">
          <table className="min-w-full table-auto">

            {/* Table Head */}
            <thead className="relative">
              {/* Header background gradient */}
              <tr className="relative">
                <th colSpan={tablehead.length} className="absolute inset-0 p-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/40 via-blue-900/40 to-cyan-900/40"></div>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
                </th>
              </tr>

              <tr>
                {Array.isArray(tablehead) &&
                  tablehead.map((column, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="relative px-6 py-4 text-left text-xs font-bold text-cyan-300 uppercase tracking-wider whitespace-nowrap"
                    >
                      <div className="flex items-center gap-2">
                        {/* Column indicator */}
                        <div className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                        {column}
                      </div>
                    </th>
                  ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="relative">
              {isLoading ? (
                // Loading skeleton rows
                Array.from({ length: 10 }).map((_, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="border-b border-cyan-400/10 transition-all duration-300"
                  >
                    {Array.isArray(tablehead) &&
                      tablehead.map((_, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="px-6 py-4 whitespace-nowrap"
                        >
                          <Skeleton
                            animation="wave"
                            height={24}
                            sx={{
                              bgcolor: 'rgba(34, 211, 238, 0.1)',
                              '&::after': {
                                background: 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.2), transparent)'
                              }
                            }}
                          />
                        </td>
                      ))}
                  </tr>
                ))
              ) : tablerow.length === 0 ? (
                // No data state
                <tr>
                  <td
                    colSpan={tablehead?.length || 1}
                    className="text-center px-6 py-16"
                  >
                    <div className="flex flex-col items-center gap-4">
                      {/* Empty state icon */}
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-400/10 flex items-center justify-center">
                          <svg className="w-10 h-10 text-cyan-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                          </svg>
                        </div>
                        <div className="absolute -inset-2 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
                      </div>

                      <div className="text-center">
                        <p className="text-gray-400 text-lg font-semibold mb-1">No Data Found</p>
                        <p className="text-gray-500 text-sm">There are no records to display at the moment</p>
                      </div>
                    </div>
                  </td>
                </tr>
              ) : (
                // Data rows
                tablerow.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="group border-b border-cyan-400/10 hover:bg-gradient-to-r hover:from-cyan-900/20 hover:via-blue-900/20 hover:to-cyan-900/20 transition-all duration-300 cursor-pointer relative"
                  >
                    {/* Row hover effect */}
                    <td colSpan={row.length} className="absolute inset-0 p-0 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </td>

                    {Array.isArray(row) &&
                      row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="relative px-6 py-4 whitespace-nowrap text-sm text-gray-300 group-hover:text-white transition-colors duration-300"
                        >
                          <div className="flex items-center gap-2">
                            {/* Cell indicator dot (shows on hover) */}
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span>{cell}</span>
                          </div>
                        </td>
                      ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Bottom gradient line */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
      </div>

      {/* Row count indicator (if data exists) */}
      {!isLoading && tablerow.length > 0 && (
        <div className="mt-4 flex items-center justify-between px-2">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <span>Total Records: <span className="text-cyan-400 font-semibold">{tablerow.length}</span></span>
          </div>

          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Hover for details</span>
          </div>
        </div>
      )}

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(13, 21, 25, 0.5);
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #22d3ee, #06b6d4);
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(90deg, #06b6d4, #0891b2);
        }
      `}</style>
    </div>
  );
};

export default CustomTable;