
import React from 'react';
import { Template } from '../types';

interface TemplateCardProps {
  template: Template;
  onView: (t: Template) => void;
  onCopy: (content: string) => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, onView, onCopy }) => {
  const snippet = template.content.slice(0, 150) + (template.content.length > 150 ? '...' : '');

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group flex flex-col h-full overflow-hidden">
      <div className="p-5 flex-1 cursor-pointer" onClick={() => onView(template)}>
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 bg-blue-50 px-2 py-0.5 rounded">
            {template.specialty}
          </span>
          <span className="text-[10px] text-slate-400">
            {template.lastModified}
          </span>
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
          {template.title}
        </h3>
        <p className="text-xs text-slate-500 italic mb-3">
          {template.subSpecialty}
        </p>
        <div className="text-sm text-slate-600 mb-4 whitespace-pre-wrap leading-relaxed font-mono">
          {snippet}
        </div>
        <div className="flex flex-wrap gap-1 mt-auto">
          {template.symptoms.slice(0, 3).map((s, idx) => (
            <span key={idx} className="bg-slate-50 text-slate-500 px-2 py-0.5 rounded text-[10px] border border-slate-100">
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
          View Full
        </button>
        <button 
          onClick={() => onCopy(template.content)}
          className="flex-1 py-2 text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 rounded-lg transition-all active:scale-95 flex items-center justify-center gap-1.5"
        >
          <i className="fa-solid fa-copy text-[10px]"></i>
          Copy
        </button>
      </div>
    </div>
  );
};

export default TemplateCard;
