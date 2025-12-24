
import React, { useEffect } from 'react';
import { Template } from '../types';

interface TemplateModalProps {
  template: Template | null;
  onClose: () => void;
  onCopy: (content: string) => void;
}

const TemplateModal: React.FC<TemplateModalProps> = ({ template, onClose, onCopy }) => {
  useEffect(() => {
    if (template) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [template]);

  if (!template) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity">
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b flex justify-between items-center bg-slate-50">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">{template.title}</h2>
            <div className="flex gap-4 text-xs text-slate-500 mt-1">
              <span><i className="fa-solid fa-user mr-1"></i> {template.contributor}</span>
              <span><i className="fa-solid fa-calendar mr-1"></i> Last modified: {template.lastModified}</span>
              <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{template.specialty}</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-200 transition-colors"
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1 bg-white">
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Category: {template.subSpecialty}</h3>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-100 whitespace-pre-wrap font-mono text-sm text-slate-700 leading-relaxed">
              {template.content}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {template.symptoms.map((s, idx) => (
              <span key={idx} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium border border-slate-200">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="px-6 py-4 border-t bg-slate-50 flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-5 py-2 text-slate-600 font-medium hover:text-slate-800 transition-colors"
          >
            Close
          </button>
          <button 
            onClick={() => onCopy(template.content)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 active:scale-95 transition-all flex items-center gap-2"
          >
            <i className="fa-solid fa-copy"></i>
            Copy Template
          </button>
        </div>
      </div>
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
};

export default TemplateModal;
