import React from "react";

const TiltedCodeCard = () => {
    return (
        <div className="relative w-full max-w-[95%] sm:max-w-lg mx-auto mt-10 px-4 sm:px-0">
            <div className="relative rotate-[2deg] sm:rotate-0">
                {/* Code Box */}
                <div className="rotate-[6deg] rounded-xl bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] p-5 text-[13px] sm:text-sm font-mono text-white/80 shadow-lg border border-white/10 sm:max-w-md w-full">

                    {/* Header */}
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-3 h-3 bg-red-500 rounded-full" />
                        <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                        <span className="w-3 h-3 bg-green-500 rounded-full" />
                        <span className="ml-4 text-white/60 text-xs">App.jsx</span>
                    </div>

                    {/* Code Content */}
                    <pre className="whitespace-pre-wrap leading-6 break-words">
                        <code>
                            <span className="text-blue-400">import</span> React <span className="text-blue-400">from</span> <span className="text-yellow-300">'react'</span>;<br />
                            <span className="text-blue-400 inline-block">const</span> <span className="text-purple-400">Portfolio</span> = () =&gt; {'{'}
                            <br />  <span className="text-blue-400">return</span> (
                            <br />    &nbsp;&nbsp;&lt;<span className="text-green-400">div</span> className=<span className="text-yellow-300">"app"</span>&gt;
                            <br />      &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-green-400">h1</span>&gt;Hello, I'm <span className="text-pink-400">Akshara</span>!&lt;/<span className="text-green-400">h1</span>&gt;
                            <br />      &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-green-400">p</span>&gt;Frontend Developer&lt;/<span className="text-green-400">p</span>&gt;
                            <br />    &nbsp;&nbsp;&lt;/<span className="text-green-400">div</span>&gt;
                            <br />  );
                            <br /> {'};'}
                            <br /><span className="text-blue-400">export default</span> Portfolio;
                        </code>
                    </pre>
                </div>

                {/* Soft Glow Dots */}
                <div className="hidden sm:block absolute -top-16 -left-10 w-20 h-20 rounded-xl bg-white/10 rotate-12" />
                <div className="hidden sm:block absolute -bottom-10 right-10 w-20 h-20 rounded-xl bg-white/10 -rotate-12" />
            </div>
        </div>
    );
};

export default TiltedCodeCard;
