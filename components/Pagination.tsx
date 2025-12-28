import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pages;
    };

    return (
        <div className="flex justify-center items-center gap-2 mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-indigo-950 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
            >
                <i className="fa-solid fa-chevron-left text-xs"></i>
            </button>

            <div className="flex gap-2 bg-white p-1 rounded-xl border border-slate-100 shadow-sm">
                {getPageNumbers().map((page, index) => (
                    <React.Fragment key={index}>
                        {page === '...' ? (
                            <span className="w-10 h-10 flex items-center justify-center text-slate-400 text-xs">
                                ...
                            </span>
                        ) : (
                            <button
                                onClick={() => onPageChange(page as number)}
                                className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-bold transition-all ${currentPage === page
                                    ? 'bg-indigo-950 text-white shadow-lg shadow-indigo-200 scale-105'
                                    : 'text-slate-600 hover:bg-slate-50'
                                    }`}
                            >
                                {page}
                            </button>
                        )}
                    </React.Fragment>
                ))}
            </div>

            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-indigo-950 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
            >
                <i className="fa-solid fa-chevron-right text-xs"></i>
            </button>
        </div>
    );
};

export default Pagination;
