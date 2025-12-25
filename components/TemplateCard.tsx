
import React from 'react';
import { Template } from '../types';

interface TemplateCardProps {
  template: Template;
  onView: (t: Template) => void;
  onCopy: (content: string) => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, onView, onCopy }) => {
  const [copied, setCopied] = React.useState(false);
  const snippet = template.content.slice(0, 100) + (template.content.length > 100 ? '...' : '');

  const handleLocalCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    onCopy(template.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group flex flex-col h-full overflow-hidden">
      <div className="p-5 flex-1 cursor-pointer" onClick={() => onView(template)}>
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-900 bg-indigo-50 px-2 py-0.5 rounded">
            {template.specialty}
          </span>
          <span className="text-[10px] text-slate-400">
            {template.lastModified}
          </span>
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-indigo-950 transition-colors font-brand">
          {template.title}
        </h3>
        <p className="text-xs text-slate-500 italic mb-3">
          {template.subSpecialty}
        </p>
        <div className="text-[10px] text-slate-600 mb-4 whitespace-pre-wrap leading-relaxed font-mono bg-slate-50 p-3 rounded-lg border border-slate-100">
          {snippet}
        </div>
        <div className="flex flex-wrap gap-1 mt-auto">
          {template.symptoms.slice(0, 3).map((s, idx) => (
            <span key={idx} className="bg-slate-50 text-slate-500 px-1.5 py-0.5 rounded text-[9px] border border-slate-100">
              {s}
            </span>
          ))}
          {template.symptoms.length > 3 && (
            <span className="text-[10px] text-slate-400 self-center">+{template.symptoms.length - 3} more</span>
          )}
        </div>
      </div>
      <div className="px-5 py-3 border-t border-slate-100 flex gap-2">
        <button
          onClick={() => onView(template)}
          className="flex-1 py-2 text-xs font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-100"
        >
          Open Template
        </button>
        <button
          onClick={handleLocalCopy}
          className={`w-10 h-9 flex items-center justify-center rounded-lg transition-all active:scale-95 shadow-sm ${copied ? 'bg-emerald-600 text-white' : 'bg-indigo-950 text-white hover:bg-black'}`}
          title={copied ? "Copied" : "Copy Template"}
        >
          <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'} text-xs`}></i>
        </button>
      </div>
    </div>
  );
};

export default TemplateCard;
