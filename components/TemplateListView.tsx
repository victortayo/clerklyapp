import React, { useState } from 'react';
import { Template } from '../types';

interface TemplateListViewProps {
    templates: Template[];
    onView: (template: Template) => void;
    onCopy: (content: string) => void;
}

const TemplateListView: React.FC<TemplateListViewProps> = ({ templates, onView, onCopy }) => {
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const handleCopy = (e: React.MouseEvent, id: string, content: string) => {
        e.stopPropagation();
        onCopy(content);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 border-b border-slate-100 text-xs text-slate-500 uppercase tracking-wider font-semibold">
                            <th className="px-6 py-4">Condition Name</th>
                            <th className="px-6 py-4">Specialty</th>
                            <th className="px-6 py-4 hidden sm:table-cell">Last Update</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {templates.map((template) => (
                            <tr
                                key={template.id}
                                onClick={() => onView(template)}
                                className="hover:bg-indigo-50/50 transition-colors cursor-pointer group"
                            >
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-slate-800 text-sm group-hover:text-indigo-950 font-brand">
                                            {template.title}
                                        </span>
                                        <span className="text-xs text-slate-400 mt-0.5 truncate max-w-[200px] sm:max-w-xs font-sans opacity-70">
                                            {template.summary}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-slate-100 text-slate-600 border border-slate-200">
                                        {template.specialty}
                                    </span>
                                </td>
                                <td className="px-6 py-4 hidden sm:table-cell text-xs text-slate-500 font-mono">
                                    {template.lastModified}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onView(template);
                                            }}
                                            className="text-xs font-medium text-slate-500 hover:text-indigo-900 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                                        >
                                            View
                                        </button>
                                        <button
                                            onClick={(e) => handleCopy(e, template.id, template.content)}
                                            className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all active:scale-95 border ${copiedId === template.id
                                                ? 'bg-emerald-50 border-emerald-200 text-emerald-600'
                                                : 'bg-white border-slate-200 text-slate-400 hover:text-indigo-950 hover:border-indigo-200'
                                                }`}
                                            title="Copy Template"
                                        >
                                            <i className={`fa-solid ${copiedId === template.id ? 'fa-check' : 'fa-copy'} text-xs`}></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TemplateListView;
