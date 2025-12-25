
import React, { useEffect } from 'react';
import { Template } from '../types';

interface TemplateDetailsProps {
  template: Template;
  onBack: () => void;
  onCopy: (content: string) => void;
}

const TemplateDetails: React.FC<TemplateDetailsProps> = ({ template, onBack, onCopy }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLocalCopy = () => {
    onCopy(template.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 py-6 animate-in fade-in slide-in-from-right-4 duration-500">
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
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-lg overflow-hidden mb-6">
        <div className="px-5 sm:px-8 py-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            {template.subSpecialty}
          </div>
          <button
            onClick={handleLocalCopy}
            className={`p-2.5 rounded-xl transition-all flex items-center justify-center ${copied ? 'bg-green-600 text-white shadow-green-100' : 'bg-blue-600 text-white shadow-blue-200'} shadow-lg active:scale-95`}
            title={copied ? "Copied" : "Copy Template"}
          >
            <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`}></i>
          </button>
        </div>
        <div className="p-4 sm:p-8">
          <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-slate-100 font-mono text-[11px] sm:text-xs text-slate-800 leading-relaxed overflow-x-auto shadow-inner">
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
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-center py-10 border-t border-slate-100">
        <button
          onClick={onBack}
          className="text-slate-500 text-sm font-medium hover:text-slate-900 transition-colors"
        >
          Back to templates
        </button>
        <button
          onClick={handleLocalCopy}
          className={`px-8 py-3 rounded-xl font-bold active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto ${copied ? 'bg-green-600 text-white' : 'bg-slate-900 text-white hover:bg-black'}`}
        >
          <i className={`fa-solid ${copied ? 'fa-check text-xs' : 'fa-copy text-sm'}`}></i>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

export default TemplateDetails;
