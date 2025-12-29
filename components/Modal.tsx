import React, { useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] flex flex-col animate-in zoom-in-95 duration-200 overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-slate-100 shrink-0">
                    <h3 className="text-lg font-bold text-slate-800 font-brand">{title}</h3>
                    <button
                        onClick={onClose}
                        className="w-6 h-6 flex items-center justify-center rounded-lg bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-indigo-950 transition-colors"
                    >
                        <i className="fa-solid fa-xmark text-xs"></i>
                    </button>
                </div>

                <div className="p-4 sm:p-6 overflow-y-auto min-h-0">
                    {children}
                </div>

                <div className="p-4 border-t border-slate-100 bg-slate-50/50 rounded-b-2xl flex justify-end shrink-0">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-indigo-950 text-white text-xs font-bold rounded-lg hover:bg-indigo-900 transition-colors shadow-lg shadow-indigo-100"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
