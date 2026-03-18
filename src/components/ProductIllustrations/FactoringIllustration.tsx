'use client';

import styles from './ProductIllustrations.module.css';

const FactoringIllustration = () => (
    <div className={styles.wrapper}>
        <svg className={styles.svg} viewBox="0 0 440 420" width="100%" xmlns="http://www.w3.org/2000/svg">
            {/* Background dot grid */}
            <g opacity="0.06">
                {Array.from({ length: 10 }).map((_, r) =>
                    Array.from({ length: 11 }).map((_, c) => (
                        <circle key={`d${r}-${c}`} cx={c * 40 + 20} cy={r * 40 + 20} r="1.5" fill="#1a2d7a" />
                    ))
                )}
            </g>

            {/* Dashed flow lines */}
            <path d="M 260 200 Q 310 160 335 100" fill="none" stroke="#5d71c4" strokeWidth="1" strokeDasharray="5 4" opacity="0.35">
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.2s" repeatCount="indefinite" />
            </path>
            <path d="M 345 120 Q 310 160 270 170" fill="none" stroke="#0a714e" strokeWidth="1" strokeDasharray="5 4" opacity="0.35">
                <animate attributeName="stroke-dashoffset" from="0" to="20" dur="1.2s" repeatCount="indefinite" />
            </path>
            {/* Coins flow line down from invoice */}
            <path d="M 220 230 Q 220 260 220 280" fill="none" stroke="#0a714e" strokeWidth="1.2" strokeDasharray="6 4" opacity="0.4">
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1s" repeatCount="indefinite" />
            </path>

            {/* Central Invoice Document (hero element) */}
            <g style={{ animation: 'scaleIn 0.6s ease-out 0.1s both, floatGentle 4s ease-in-out infinite', transformOrigin: '220px 130px' }}>
                <rect x="140" y="60" width="160" height="145" rx="10" fill="#ffffff" stroke="#1a2d7a" strokeWidth="1" />
                {/* Header bar */}
                <rect x="150" y="70" width="140" height="10" rx="3" fill="#1a2d7a" opacity="0.85" />
                {/* Text placeholder lines */}
                <rect x="150" y="92" width="110" height="5" rx="2.5" fill="#e2e5eb" />
                <rect x="150" y="103" width="80" height="5" rx="2.5" fill="#e2e5eb" />
                <rect x="150" y="114" width="100" height="5" rx="2.5" fill="#e2e5eb" />
                {/* Amount line (bolder) */}
                <rect x="150" y="130" width="70" height="7" rx="3" fill="#1a2d7a" opacity="0.15" />
                {/* Dashed signature line */}
                <line x1="150" y1="155" x2="230" y2="155" stroke="#5d71c4" strokeWidth="0.8" strokeDasharray="4 2" />
                {/* Stamp */}
                <circle cx="270" cy="170" r="12" fill="#0a714e" opacity="0.1" stroke="#0a714e" strokeWidth="0.7" />
                <polyline points="265,170 268.5,174 276,166" fill="none" stroke="#0a714e" strokeWidth="1.5" strokeLinecap="round" />
                {/* Three status dots at bottom */}
                <line x1="190" y1="185" x2="250" y2="185" stroke="#e2e5eb" strokeWidth="1.5" />
                <circle cx="195" cy="185" r="6" fill="#1a2d7a" style={{ animation: 'checkPop 0.3s ease-out 0.5s both' }} />
                <circle cx="220" cy="185" r="6" fill="#5d71c4" style={{ animation: 'checkPop 0.3s ease-out 0.7s both' }} />
                <circle cx="245" cy="185" r="8" fill="#0a714e" style={{ animation: 'checkPop 0.3s ease-out 0.9s both' }}>
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
                </circle>
                {/* Tiny checks inside dots */}
                <polyline points="192,185 194.5,187.5 199,182" fill="none" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
                <polyline points="217,185 219.5,187.5 224,182" fill="none" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
                <polyline points="241,185 244,188.5 250,181" fill="none" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
            </g>

            {/* Brand Building (top-right, verification) */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.4s both, floatGentle 3.5s ease-in-out 0.2s infinite', transformOrigin: '360px 68px' }}>
                <polygon points="360,50 335,65 385,65" fill="#1a2d7a" />
                <rect x="335" y="65" width="50" height="36" rx="3" fill="#f8f9fc" stroke="#1a2d7a" strokeWidth="0.8" />
                <rect x="343" y="72" width="7" height="7" rx="1" fill="#5d71c4" opacity="0.45" />
                <rect x="356" y="72" width="7" height="7" rx="1" fill="#5d71c4" opacity="0.3" />
                <rect x="343" y="83" width="7" height="7" rx="1" fill="#5d71c4" opacity="0.3" />
                <rect x="356" y="83" width="7" height="7" rx="1" fill="#5d71c4" opacity="0.45" />
                {/* Green verification check floating */}
                <circle cx="322" cy="120" r="8" fill="#0a714e" opacity="0.15" />
                <circle cx="322" cy="120" r="6" fill="#0a714e" style={{ animation: 'checkPop 0.3s ease-out 0.6s both' }} />
                <polyline points="319,120 321.5,123 326,117" fill="none" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
            </g>

            {/* Coins bursting downward (below invoice) */}
            {[
                { cx: 200, cy: 240, r: 10, color: '#0a714e', delay: 0.7 },
                { cx: 230, cy: 235, r: 7, color: '#f59e0b', delay: 0.9 },
                { cx: 215, cy: 255, r: 12, color: '#0a714e', delay: 1.1 },
                { cx: 245, cy: 250, r: 6, color: '#f59e0b', delay: 1.3 },
                { cx: 195, cy: 260, r: 8, color: '#0a714e', delay: 1.2, opacity: 0.7 },
            ].map((coin, i) => (
                <g key={`coin${i}`} style={{ animation: `coinDrop 0.6s ease-out ${coin.delay}s both`, transformOrigin: `${coin.cx}px ${coin.cy}px` }}>
                    <circle cx={coin.cx} cy={coin.cy} r={coin.r} fill={coin.color} opacity={coin.opacity || 1} />
                    <text x={coin.cx} y={coin.cy + coin.r * 0.35} textAnchor="middle" fill="#fff" fontSize={coin.r * 0.9} fontWeight="700" fontFamily="Poppins, sans-serif">&#x20B9;</text>
                </g>
            ))}

            {/* Small shop (bottom-center, receiving funds) */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.6s both, floatGentle 4s ease-in-out 0.4s infinite', transformOrigin: '218px 320px' }}>
                {/* Green glow */}
                <circle cx="218" cy="320" r="38" fill="#0a714e" opacity="0.05" />
                <rect x="190" y="300" width="56" height="40" rx="4" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1" />
                <path d="M 188 300 Q 200 289 218 289 Q 236 289 248 300" fill="#f59e0b" />
                <line x1="194" y1="295" x2="242" y2="295" stroke="#fff" strokeWidth="0.5" opacity="0.4" />
                <rect x="210" y="322" width="14" height="18" rx="2" fill="#1a2d7a" opacity="0.12" />
            </g>

            {/* Progress bar card (left) */}
            <g style={{ animation: 'slideInLeft 0.5s ease-out 0.5s both' }}>
                <rect x="15" y="120" width="105" height="48" rx="8" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.8" />
                <rect x="25" y="133" width="85" height="5" rx="2.5" fill="#e2e5eb" />
                <rect x="25" y="133" width="76" height="5" rx="2.5" fill="#0a714e">
                    <animate attributeName="width" from="0" to="76" dur="0.8s" begin="0.7s" fill="freeze" />
                </rect>
                <circle cx="31" cy="150" r="3" fill="#0a714e" opacity="0.6" />
                <circle cx="41" cy="150" r="3" fill="#0a714e" opacity="0.4" />
                <circle cx="51" cy="150" r="3" fill="#0a714e" opacity="0.3" />
                <circle cx="61" cy="150" r="3" fill="#e2e5eb" />
            </g>

            {/* Benefit pills card (left, below) */}
            <g style={{ animation: 'slideInLeft 0.5s ease-out 0.7s both' }}>
                <rect x="20" y="180" width="100" height="40" rx="8" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.8" />
                <rect x="30" y="194" width="26" height="9" rx="4.5" fill="#ecfdf5" />
                <rect x="60" y="194" width="22" height="9" rx="4.5" fill="#1a2d7a" />
                <rect x="86" y="194" width="24" height="9" rx="4.5" fill="#fffbeb" />
            </g>

            {/* Checkmark card (right) */}
            <g style={{ animation: 'slideInLeft 0.5s ease-out 0.8s both' }}>
                <rect x="340" y="190" width="80" height="55" rx="8" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.8" />
                {[0, 1, 2].map((i) => (
                    <g key={`rck${i}`}>
                        <circle cx="356" cy={204 + i * 14} r="5" fill="#0a714e" style={{ animation: `checkPop 0.3s ease-out ${1.0 + i * 0.15}s both` }} />
                        <polyline points={`353,${204 + i * 14} 355.5,${207 + i * 14} 360,${201 + i * 14}`} fill="none" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
                        <rect x="366" y={201 + i * 14} width={32 - i * 5} height="4" rx="2" fill="#e2e5eb" />
                    </g>
                ))}
            </g>

            {/* Calendar/clock + lightning (bottom-left) */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.9s both', transformOrigin: '80px 340px' }}>
                <circle cx="80" cy="340" r="20" fill="#f8f9fc" stroke="#e2e5eb" strokeWidth="0.8" />
                <line x1="80" y1="340" x2="80" y2="330" stroke="#1a2d7a" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="80" y1="340" x2="88" y2="340" stroke="#5d71c4" strokeWidth="1" strokeLinecap="round" />
                <circle cx="80" cy="340" r="1.5" fill="#1a2d7a" />
                {/* Lightning bolt */}
                <path d="M 108 330 L 104 338 L 108 338 L 104 348" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* Decorative */}
            <circle cx="130" cy="260" r="3" fill="#5d71c4" opacity="0.18" />
            <circle cx="380" cy="280" r="2.5" fill="#f59e0b" opacity="0.2" />
            <circle cx="50" cy="90" r="2" fill="#0a714e" opacity="0.15" />
            <rect x="400" y="150" width="5" height="5" rx="1" fill="#5d71c4" opacity="0.12" transform="rotate(45 402.5 152.5)" />
            <rect x="160" y="370" width="6" height="6" rx="1" fill="#f59e0b" opacity="0.13" transform="rotate(45 163 373)" />
        </svg>
    </div>
);

export default FactoringIllustration;
