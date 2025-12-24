
import React, { useEffect } from 'react';
import { Template } from '../types';

interface TemplateDetailsProps {
  template: Template;
  onBack: () => void;
  onCopy: (content: string) => void;
}

const TemplateDetails: React.FC<TemplateDetailsProps> = ({ template, onBack, onCopy }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in slide-in-from-right-4 duration-500">
      {/* Navigation Header */}
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors group"
          title="Go back"
        >
          <i className="fa-solid fa-arrow-left text-lg group-hover:-translate-x-1 transition-transform"></i>
        </button>
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">{template.title}</h2>
          <div className="flex flex-wrap gap-4 text-xs text-slate-500 mt-2 items-center">
            <span className="flex items-center gap-1.5">
              <i className="fa-solid fa-user-doctor text-blue-500"></i> {template.contributor}
            </span>
            <span className="flex items-center gap-1.5">
              <i className="fa-solid fa-clock text-slate-400"></i> {template.lastModified}
            </span>
            <span className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full font-semibold border border-blue-100">
              {template.specialty}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden mb-8">
        <div className="px-8 py-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
          <div className="text-sm font-semibold text-slate-600 uppercase tracking-widest">
            {template.subSpecialty}
          </div>
          <button 
            onClick={() => onCopy(template.content)}
            className="p-2.5 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all flex items-center justify-center"
            title="Copy Template"
          >
            <i className="fa-solid fa-copy"></i>
          </button>
        </div>
        <div className="p-8">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 font-mono text-sm sm:text-base text-slate-800 leading-relaxed overflow-x-auto">
            <pre className="whitespace-pre-wrap">{template.content}</pre>
          </div>
        </div>
      </div>

      {/* Tags Section */}
      <div className="flex flex-wrap gap-2 mb-12">
        {template.symptoms.map((s, idx) => (
          <span key={idx} className="bg-white text-slate-600 px-4 py-1.5 rounded-full text-xs font-medium border border-slate-200 hover:border-blue-200 hover:text-blue-600 transition-colors cursor-default">
            {s}
          </span>
        ))}
      </div>

      {/* Action Footer */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center py-12 border-t border-slate-100">
        <button 
          onClick={onBack}
          className="px-8 py-3 text-slate-600 font-semibold hover:text-slate-900 transition-colors"
        >
          Back to templates
        </button>
        <button 
          onClick={() => onCopy(template.content)}
          className="px-10 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-black active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl"
        >
          <i className="fa-solid fa-copy text-sm"></i>
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
};

export default TemplateDetails;
