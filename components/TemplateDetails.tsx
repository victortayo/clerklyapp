
import React, { useEffect } from 'react';
import { Template } from '../types';

interface TemplateDetailsProps {
  template: Template;
  onView?: (t: Template) => void;
  onCopy: (content: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

const TemplateDetails: React.FC<TemplateDetailsProps> = ({
  template,
  onBack,
  onCopy,
  isBookmarked,
  onToggleBookmark
}) => {
  const [copied, setCopied] = React.useState(false);
  const [explanationModalOpen, setExplanationModalOpen] = React.useState(false);
  const [explanationLoading, setExplanationLoading] = React.useState(false);
  const [explanationData, setExplanationData] = React.useState<import('../services/aiService').CaseExplanation | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLocalCopy = () => {
    onCopy(template.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExplainCase = async () => {
    setExplanationModalOpen(true);
    if (!explanationData) {
      setExplanationLoading(true);
      try {
        const { generateCaseExplanation } = await import('../services/aiService');
        const data = await generateCaseExplanation(template);
        setExplanationData(data);
      } catch (error) {
        console.error("Failed to generate explanation", error);
      } finally {
        setExplanationLoading(false);
      }
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 py-6 animate-in fade-in slide-in-from-right-4 duration-500">
        {/* Navigation Header */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-indigo-950 dark:text-indigo-100 tracking-tight font-brand">{template.title}</h2>
            <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400 mt-2 items-center">
              <span className="flex items-center gap-1.5">
                <i className="fa-solid fa-user-doctor text-indigo-900 dark:text-indigo-300"></i> {template.contributor}
              </span>
              <span className="flex items-center gap-1.5">
                <i className="fa-solid fa-clock text-slate-400 dark:text-slate-500"></i> {template.lastModified}
              </span>
              <span className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-900 dark:text-indigo-200 px-2.5 py-1 rounded-full font-semibold border border-indigo-100 dark:border-indigo-800">
                {template.specialty}
              </span>
            </div>
          </div>
          <button
            onClick={onToggleBookmark}
            className={`flex flex-col items-center gap-1 p-3 rounded-2xl transition-all active:scale-95 ${isBookmarked ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800' : 'text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300'}`}
          >
            <i className={`fa-${isBookmarked ? 'solid' : 'regular'} fa-bookmark text-xl`}></i>
            <span className="text-[10px] font-bold">{template.bookmarkCount || 0}</span>
          </button>
        </div>

        {/* Main Content Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden mb-6 transition-colors">
          <div className="px-5 sm:px-8 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex justify-between items-center">
            <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              {template.subSpecialty}
            </div>
            <button
              onClick={handleExplainCase}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-slate-600 dark:text-slate-300 rounded-full text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group"
              title="Get clinical insights"
            >
              <i className="fa-regular fa-lightbulb text-yellow-500 text-sm group-hover:animate-pulse"></i>
              <span>Insight</span>
            </button>
            <button
              onClick={handleLocalCopy}
              className={`p-2.5 rounded-xl transition-all duration-300 ease-out flex items-center justify-center ${copied ? 'bg-emerald-600 text-white shadow-emerald-100' : 'bg-transparent text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30'} active:scale-95`}
              title={copied ? "Copied" : "Copy Template"}
            >
              <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`}></i>
            </button>
          </div>
          <div className="p-4 sm:p-8">
            <div className="bg-slate-50 dark:bg-slate-950/50 rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-slate-100 dark:border-slate-800 font-mono text-[11px] sm:text-xs text-slate-800 dark:text-slate-200 leading-relaxed overflow-x-auto shadow-inner">
              <pre className="whitespace-pre-wrap">{template.content}</pre>
            </div>
          </div>
        </div>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2 mb-12">
          {template.symptoms.map((s, idx) => (
            <span key={idx} className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-4 py-1.5 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default">
              {s}
            </span>
          ))}
        </div>

        {/* Action Footer */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center py-10 border-t border-slate-100 dark:border-slate-800 transition-colors">
          <button
            onClick={onBack}
            className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Back to templates
          </button>

          <button
            onClick={handleExplainCase}
            className="sm:hidden px-6 py-3 rounded-xl font-bold active:scale-95 transition-all flex items-center justify-center gap-2 w-full bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"
          >
            <i className="fa-solid fa-lightbulb text-yellow-500"></i>
            Clinical Insight
          </button>
          <button
            onClick={onToggleBookmark}
            className={`px-6 py-3 rounded-xl font-bold active:scale-95 transition-all flex items-center justify-center gap-2 border w-full sm:w-auto ${isBookmarked ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 border-indigo-100 dark:border-indigo-800' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
          >
            <i className={`fa-${isBookmarked ? 'solid' : 'regular'} fa-bookmark`}></i>
            {isBookmarked ? 'Bookmarked' : 'Bookmark'}
          </button>
          <button
            onClick={handleLocalCopy}
            className={`px-8 py-3 rounded-xl font-bold active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto ${copied ? 'bg-emerald-600 text-white' : 'bg-indigo-950 dark:bg-indigo-900 text-white hover:bg-black dark:hover:bg-indigo-800'}`}
          >
            <i className={`fa-solid ${copied ? 'fa-check text-xs' : 'fa-copy text-sm'}`}></i>
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>

      {/* Floating Back Button */}
      <button
        onClick={onBack}
        className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full shadow-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-indigo-950 dark:hover:text-white hover:scale-110 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 transition-all duration-300 flex items-center justify-center group"
        title="Back to templates"
      >
        <i className="fa-solid fa-arrow-left text-sm group-hover:-translate-x-0.5 transition-transform"></i>
      </button>

      {/* AI Explanation Modal */}
      {explanationModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setExplanationModalOpen(false)}></div>
          <div className="relative bg-white dark:bg-slate-950 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-300 overflow-hidden">

            {/* Minimal Header */}
            <div className="flex items-center justify-between px-8 py-6 bg-white dark:bg-slate-950 sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-yellow-50 dark:bg-yellow-900/20 flex items-center justify-center text-yellow-500">
                  <i className="fa-solid fa-lightbulb"></i>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-brand tracking-tight">Clinical Insight</h3>
              </div>
              <button
                onClick={() => setExplanationModalOpen(false)}
                className="w-8 h-8 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-all flex items-center justify-center"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/* Content */}
            <div className="px-8 pb-8 overflow-y-auto">
              {explanationLoading ? (
                <div className="flex flex-col items-center justify-center py-20 min-h-[400px]">
                  <i className="fa-solid fa-circle-notch animate-spin text-slate-300 dark:text-slate-700 text-3xl mb-4"></i>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Analyzing case...</p>
                </div>
              ) : explanationData ? (
                <div className="grid lg:grid-cols-3 gap-12">

                  {/* Left Column */}
                  <div className="col-span-2 space-y-10">

                    {/* Summary */}
                    <div>
                      <div className="text-lg sm:text-xl text-slate-800 dark:text-slate-200 leading-relaxed font-light">
                        {explanationData.summary.split('**').map((part, i) =>
                          i % 2 === 1 ? <strong key={i} className="font-semibold text-slate-900 dark:text-white">{part}</strong> : part
                        )}
                      </div>
                    </div>

                    {/* Key Findings */}
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
                        Key Findings
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-4">
                        {explanationData.keyFindings.map((item, i) => (
                          <li key={i} className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-3 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                            <span className="text-emerald-500 mt-0.5">•</span>
                            <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 dark:text-slate-100">$1</strong>') }}></span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Management */}
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
                        Management Plan
                      </h4>
                      <div className="space-y-4 border-l-2 border-slate-100 dark:border-slate-800 pl-4 ml-1">
                        {explanationData.managementRationale.map((item, i) => (
                          <div key={i} className="relative">
                            <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-slate-950"></div>
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 dark:text-slate-100 block mb-1">$1</strong>') }}
                            ></p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Sidebar */}
                  <div className="space-y-8">

                    {/* Differentials */}
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
                        Consider Also
                      </h4>
                      <ul className="space-y-2">
                        {explanationData.differentialDiagnosis?.map((item, i) => (
                          <li key={i} className="text-sm text-slate-600 dark:text-slate-400 py-1 border-b border-slate-50 dark:border-slate-900 last:border-0">
                            <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<span class="text-slate-900 dark:text-slate-200 font-medium block">$1</span>') }}></span>
                          </li>
                        )) || <p className="text-sm text-slate-400 italic">No specific differentials.</p>}
                      </ul>
                    </div>

                    {/* Clinical Pearls */}
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-5">
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                        <i className="fa-solid fa-lightbulb text-yellow-500"></i> Pearls & Pitfalls
                      </h4>
                      <div className="space-y-4">
                        {explanationData.clinicalPearls?.map((item, i) => (
                          <div key={i} className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                            <span dangerouslySetInnerHTML={{ __html: item.replace('⚠️', '').replace('💡', '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-700 dark:text-slate-300">$1</strong>') }}></span>
                          </div>
                        )) || <p className="text-sm text-slate-400">No pearls available.</p>}
                      </div>
                    </div>

                    <div className="pt-8 border-t border-slate-100 dark:border-slate-900">
                      <div className="text-[10px] text-slate-400 text-center leading-normal mb-4">
                        {explanationData.disclaimer}
                      </div>
                    </div>

                  </div>

                </div>
              ) : (
                <div className="text-center py-20 text-slate-500">
                  <p>Failed to load analysis.</p>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default TemplateDetails;
