
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
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 rounded-md text-[10px] uppercase tracking-wider font-bold transition-all hover:bg-slate-50 dark:hover:bg-slate-800/50"
              title="Get clinical insights"
            >
              <i className="fa-regular fa-lightbulb text-yellow-500 text-xs"></i>
              <span>Insight</span>
            </button>
            <button
              onClick={handleLocalCopy}
              className={`p-1.5 rounded-lg transition-all duration-300 ease-out flex items-center justify-center ${copied ? 'text-emerald-600' : 'text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400'} active:scale-95`}
              title={copied ? "Copied" : "Copy Template"}
            >
              <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'} text-xs`}></i>
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
            className="sm:hidden px-4 py-2.5 rounded-xl font-bold active:scale-95 transition-all flex items-center justify-center gap-2 w-full bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-xs"
          >
            <i className="fa-solid fa-lightbulb text-yellow-500"></i>
            Insight
          </button>
          <button
            onClick={onToggleBookmark}
            className={`px-4 py-2.5 rounded-xl font-bold active:scale-95 transition-all flex items-center justify-center gap-2 border w-full sm:w-auto text-xs ${isBookmarked ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 border-indigo-100 dark:border-indigo-800' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
          >
            <i className={`fa-${isBookmarked ? 'solid' : 'regular'} fa-bookmark`}></i>
            {isBookmarked ? 'Saved' : 'Save'}
          </button>
          <button
            onClick={handleLocalCopy}
            className={`px-5 py-2.5 rounded-xl font-bold active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto text-xs ${copied ? 'bg-emerald-600 text-white' : 'bg-indigo-950 dark:bg-indigo-900 text-white hover:bg-black dark:hover:bg-indigo-800'}`}
          >
            <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`}></i>
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
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] animate-in fade-in duration-300" onClick={() => setExplanationModalOpen(false)}></div>
          <div className="relative bg-white dark:bg-slate-950 rounded-xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col animate-in zoom-in-95 duration-300 overflow-hidden ring-1 ring-slate-200 dark:ring-slate-800">

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md sticky top-0 z-20">
              <div className="flex items-center gap-2.5">
                <i className="fa-solid fa-lightbulb text-yellow-500 text-sm"></i>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">Analysis</h3>
              </div>
              <button
                onClick={() => setExplanationModalOpen(false)}
                className="w-7 h-7 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-all flex items-center justify-center"
              >
                <i className="fa-solid fa-xmark text-sm"></i>
              </button>
            </div>

            {/* Note Content */}
            <div className="px-6 pb-6 overflow-y-auto space-y-6 text-slate-700 dark:text-slate-300">
              {explanationLoading ? (
                <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                  <span className="font-mono text-xs animate-pulse">Running analysis...</span>
                </div>
              ) : explanationData ? (
                <>
                  {/* Summary */}
                  <div className="text-sm leading-relaxed">
                    <p>
                      {explanationData.summary.replace(/\*\*/g, '')}
                    </p>
                  </div>

                  <hr className="border-slate-100 dark:border-slate-800" />

                  {/* Findings */}
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2 text-sm">Key Findings</h4>
                    <ul className="list-disc pl-4 space-y-1 marker:text-emerald-500 text-sm">
                      {explanationData.keyFindings.map((item, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>
                      ))}
                    </ul>
                  </div>

                  {/* Management */}
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2 text-sm">Management Plan</h4>
                    <ol className="list-decimal pl-4 space-y-2 marker:text-indigo-500 marker:font-bold text-sm">
                      {explanationData.managementRationale.map((item, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>
                      ))}
                    </ol>
                  </div>

                  {/* Special Cards: Differentials & Pearls */}
                  <div className="grid sm:grid-cols-2 gap-3 pt-2">

                    {/* Differentials Card */}
                    <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-100 dark:border-amber-800/30 text-xs">
                      <h5 className="font-bold uppercase tracking-wide text-amber-900 dark:text-amber-400 mb-2 flex items-center gap-2">
                        <i className="fa-solid fa-code-branch"></i> Differential Diagnosis
                      </h5>
                      <ul className="space-y-1 list-none">
                        {explanationData.differentialDiagnosis?.map((item, i) => (
                          <li key={i} className="flex gap-1.5 text-amber-900/80 dark:text-amber-200/80">
                            <span>•</span>
                            <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<span class="font-semibold text-amber-900 dark:text-amber-100">$1</span>') }}></span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pearls Card */}
                    <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800 text-xs">
                      <h5 className="font-bold uppercase tracking-wide text-indigo-900 dark:text-indigo-400 mb-2 flex items-center gap-2">
                        <i className="fa-regular fa-lightbulb"></i> Clinical Pearls
                      </h5>
                      <div className="space-y-1.5">
                        {explanationData.clinicalPearls?.map((item, i) => (
                          <p key={i} className="text-slate-600 dark:text-slate-400 leading-snug">
                            <span dangerouslySetInnerHTML={{ __html: item.replace(/⚠️|💡/g, '').replace(/\*\*(.*?)\*\*/g, '<span class="font-semibold text-slate-800 dark:text-slate-200">$1</span>') }}></span>
                          </p>
                        ))}
                      </div>
                    </div>

                  </div>

                  <div className="pt-6 flex flex-col items-center gap-4 border-t border-slate-100 dark:border-slate-800 mt-2">
                    <div className="text-[10px] text-slate-300 dark:text-slate-600 italic text-center">
                      {explanationData.disclaimer}
                    </div>
                    <button
                      onClick={() => setExplanationModalOpen(false)}
                      className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-full transition-colors"
                    >
                      Close Note
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-20 text-slate-400 font-mono text-xs">
                  Analysis unavailable.
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
