import React from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-10 gap-2 flex-wrap">
      {/* prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <GrPrevious className="text-black dark:text-white" />
      </button>

      {/* page nos */}
      {[...Array(totalPages)].map((_, i) => {
        const page = i + 1;

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded border ${
              currentPage === page
                ? "bg-green-600 text-white"
                : "bg-white dark:bg-slate-800 dark:text-white"
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <GrNext className="text-black dark:text-white" />
      </button>
    </div>
  );
};

export default Pagination;
