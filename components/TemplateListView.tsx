import React, { useState } from 'react';
import { Template } from '../types';

interface TemplateListViewProps {
    templates: Template[];
    onView: (template: Template) => void;
    onCopy: (content: string) => void;
    userBookmarks: string[];
    onToggleBookmark: (id: string) => void;
}

const TemplateListView: React.FC<TemplateListViewProps> = ({ templates, onView, onCopy, userBookmarks, onToggleBookmark }) => {
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const handleCopy = (e: React.MouseEvent, id: string, content: string) => {
        e.stopPropagation();
        onCopy(content);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500 transition-colors">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                            <th className="px-6 py-4">Condition Name</th>
                            <th className="px-6 py-4">Specialty</th>
                            <th className="px-6 py-4 hidden sm:table-cell">Rating</th>
                            <th className="px-6 py-4 hidden sm:table-cell">Last Update</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                        {templates.map((template, index) => (
                            <tr
                                key={template.id}
                                onClick={() => onView(template)}
                                style={{ animationDelay: `${index * 50}ms` }}
                                className="animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-backwards hover:bg-indigo-50/50 dark:hover:bg-slate-700/50 hover:scale-[1.005] active:scale-[0.995] transition-all cursor-pointer group border-b border-transparent hover:border-indigo-100 dark:hover:border-slate-600 hover:shadow-sm"
                            >
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-slate-800 dark:text-slate-200 text-sm group-hover:text-indigo-950 dark:group-hover:text-white font-brand">
                                            {template.title}
                                        </span>
                                        <span className="text-xs text-slate-400 mt-0.5 truncate max-w-[200px] sm:max-w-xs font-sans opacity-70">
                                            {template.summary}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                                        {template.specialty}
                                    </span>
                                </td>
                                <td className="px-6 py-4 hidden sm:table-cell">
                                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                                        <i className="fa-solid fa-bookmark text-[10px] text-indigo-400"></i>
                                        <span className="text-xs font-bold">{template.bookmarkCount || 0}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 hidden sm:table-cell text-xs text-slate-500 dark:text-slate-400 font-mono">
                                    {template.lastModified}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onView(template);
                                            }}
                                            className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-900 dark:hover:text-indigo-300 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                        >
                                            View
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onToggleBookmark(template.id);
                                            }}
                                            className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all active:scale-95 border ${userBookmarks.includes(template.id)
                                                ? 'bg-indigo-50 border-indigo-200 text-indigo-600'
                                                : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-400 dark:text-slate-300 hover:text-indigo-950 dark:hover:text-white hover:border-indigo-200 dark:hover:border-slate-500'
                                                }`}
                                            title="Bookmark"
                                        >
                                            <i className={`fa-${userBookmarks.includes(template.id) ? 'solid' : 'regular'} fa-bookmark text-xs`}></i>
                                        </button>
                                        <button
                                            onClick={(e) => handleCopy(e, template.id, template.content)}
                                            className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all active:scale-95 border ${copiedId === template.id
                                                ? 'bg-emerald-50 border-emerald-200 text-emerald-600'
                                                : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-400 dark:text-slate-300 hover:text-indigo-950 dark:hover:text-white hover:border-indigo-200 dark:hover:border-slate-500'
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
