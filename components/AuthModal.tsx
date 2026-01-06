import React from 'react';
import Modal from './Modal';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLogin: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Sign In Required">
            <div className="flex flex-col items-center text-center space-y-6 py-4">
                <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-900/30 rounded-3xl flex items-center justify-center animate-bounce">
                    <i className="fa-solid fa-bookmark text-indigo-600 dark:text-indigo-400 text-3xl"></i>
                </div>

                <div className="space-y-2">
                    <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 font-brand">
                        Bookmark your favorites
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 max-w-[280px] mx-auto leading-relaxed">
                        Sign in to save templates to your personal collection and access them from any device.
                    </p>
                </div>

                <button
                    onClick={() => {
                        onClose();
                        onLogin();
                    }}
                    className="group w-full flex items-center justify-center gap-3 bg-indigo-950 dark:bg-white text-white dark:text-indigo-950 font-bold py-4 px-6 rounded-2xl hover:bg-black dark:hover:bg-slate-100 transition-all shadow-xl shadow-indigo-100 dark:shadow-none active:scale-[0.98] mt-4"
                >
                    <i className="fa-brands fa-google text-lg group-hover:scale-110 transition-transform"></i>
                    <span>Continue with Google</span>
                </button>

                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">
                    Quick & secure • No password needed
                </p>
            </div>
        </Modal>
    );
};

export default AuthModal;
