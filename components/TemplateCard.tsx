
import React from 'react';
import { Template } from '../types';

interface TemplateCardProps {
  template: Template;
  onView: (t: Template) => void;
  onCopy: (content: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({
  template,
  onView,
  onCopy,
  isBookmarked,
  onToggleBookmark
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleLocalCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    onCopy(template.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200 dark:hover:border-indigo-700/50 transition-all duration-300 ease-out group flex flex-col h-full overflow-hidden">
      <div className="p-5 flex-1 cursor-pointer" onClick={() => onView(template)}>
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-900 dark:text-indigo-200 bg-indigo-50 dark:bg-indigo-900/40 px-2 py-0.5 rounded">
            {template.specialty}
          </span>
          <span className="text-[10px] text-slate-400 dark:text-slate-500">
            {template.lastModified}
          </span>
        </div>
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-950 dark:group-hover:text-indigo-300 transition-colors font-brand">
            {template.title}
          </h3>
          <button
            onClick={(e) => { e.stopPropagation(); onToggleBookmark(); }}
            className={`flex items-center gap-1.5 transition-all active:scale-90 ${isBookmarked ? 'text-amber-500 dark:text-amber-400' : 'text-slate-300 hover:text-slate-400 dark:text-slate-600 dark:hover:text-slate-500'}`}
          >
            <span className="text-[10px] font-bold">{template.bookmarkCount || 0}</span>
            <i className={`fa-${isBookmarked ? 'solid' : 'regular'} fa-bookmark text-sm`}></i>
          </button>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 italic mb-3">
          {template.subSpecialty}
        </p>
        <div className="text-[11px] text-slate-600 dark:text-slate-400 mb-4 leading-relaxed font-sans bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700">
          {template.summary}
        </div>
        <div className="flex flex-wrap gap-1 mt-auto">
          {template.symptoms.slice(0, 3).map((s, idx) => (
            <span key={idx} className="bg-slate-50 dark:bg-slate-700 text-slate-500 dark:text-slate-300 px-1.5 py-0.5 rounded text-[9px] border border-slate-100 dark:border-slate-600">
              {s}
            </span>
          ))}
          {template.symptoms.length > 3 && (
            <span className="text-[10px] text-slate-400 dark:text-slate-500 self-center">+{template.symptoms.length - 3} more</span>
          )}
        </div>
      </div>
      <div className="px-5 py-3 border-t border-slate-100 dark:border-slate-700 flex gap-2">
        <button
          onClick={() => onView(template)}
          className="flex-1 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors border border-transparent hover:border-blue-100 dark:hover:border-blue-800"
        >
          Open Template
        </button>
        <button
          onClick={handleLocalCopy}
          className={`w-10 h-9 flex items-center justify-center rounded-lg transition-all active:scale-95 shadow-sm ${copied ? 'bg-emerald-600 text-white' : 'bg-indigo-950 dark:bg-indigo-900 text-white hover:bg-black dark:hover:bg-indigo-800'}`}
          title={copied ? "Copied" : "Copy Template"}
        >
          <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'} text-xs`}></i>
        </button>
      </div>
    </div >
  );
};

export default TemplateCard;
