export default function TermsAcceptance() {
  return (
    <div className="min-h-screen bg-[#e8dcc8] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-[#e8dcc8] p-8">
        <h1 className="text-3xl font-black mb-6 uppercase tracking-tight">
          Accept Terms & Conditions, Privacy Policy
        </h1>
        
        <div className="flex gap-4 mb-6">
          <div className="flex-shrink-0 mt-1">
            <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
              <svg 
                className="w-4 h-4 text-white" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="3" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>
          
          <p className="text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet, risus vitae 
            aliquet vestibulum, nisi nibh fringilla nisl, eget sagittis lorem leo non libero.
          </p>
        </div>
        
        <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-6 rounded transition-colors duration-200">
          Accept
        </button>
      </div>
    </div>
  );
}