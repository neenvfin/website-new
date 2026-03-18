'use client';

import styles from './ProductIllustrations.module.css';

const WorkingCapitalIllustration = () => (
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

            {/* Vertical flow line (document → shield → funds) */}
            <path d="M 220 103 L 220 131" fill="none" stroke="#5d71c4" strokeWidth="1.2" strokeDasharray="5 4" opacity="0.4">
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M 220 219 L 220 270" fill="none" stroke="#0a714e" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5">
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1s" repeatCount="indefinite" />
            </path>

            {/* Dashed line to bank */}
            <path d="M 270 165 Q 310 130 340 70" fill="none" stroke="#5d71c4" strokeWidth="0.8" strokeDasharray="5 4" opacity="0.3">
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.5s" repeatCount="indefinite" />
            </path>

            {/* Small Shop (top, submitting) */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0s both, floatGentle 4s ease-in-out infinite', transformOrigin: '211px 33px' }}>
                <rect x="186" y="15" width="50" height="36" rx="4" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1" />
                <path d="M 184 15 Q 198 4 211 4 Q 224 4 238 15" fill="#f59e0b" />
                <line x1="192" y1="10" x2="230" y2="10" stroke="#fff" strokeWidth="0.5" opacity="0.4" />
                <rect x="204" y="34" width="12" height="17" rx="2" fill="#1a2d7a" opacity="0.12" />
            </g>

            {/* Document icon (application) */}
            <g style={{ animation: 'scaleIn 0.4s ease-out 0.2s both', transformOrigin: '218px 89px' }}>
                <rect x="200" y="75" width="36" height="28" rx="4" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.8" />
                <rect x="207" y="82" width="22" height="3" rx="1.5" fill="#e2e5eb" />
                <rect x="207" y="89" width="16" height="3" rx="1.5" fill="#e2e5eb" />
                {/* Short dashed line to shop */}
                <line x1="218" y1="51" x2="218" y2="75" stroke="#5d71c4" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />
            </g>

            {/* Central Neenv Shield */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.3s both', transformOrigin: '220px 175px' }}>
                <circle cx="220" cy="175" r="60" fill="#1a2d7a" opacity="0.04">
                    <animate attributeName="opacity" values="0.04;0.1;0.04" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="220" cy="175" r="50" fill="none" stroke="#5d71c4" strokeWidth="0.6" opacity="0.1">
                    <animate attributeName="opacity" values="0.06;0.15;0.06" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="220" cy="175" r="44" fill="#1a2d7a" />
                <path d="M 220 150 L 240 160 L 240 178 Q 240 190 220 198 Q 200 190 200 178 L 200 160 Z" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinejoin="round" />
                <polyline points="210,173 217,182 232,166" fill="none" stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* Clock element (left of shield) */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.4s both, floatGentle 3.5s ease-in-out infinite', transformOrigin: '130px 170px' }}>
                <circle cx="130" cy="170" r="24" fill="#f8f9fc" stroke="#1a2d7a" strokeWidth="0.8" />
                <line x1="130" y1="170" x2="130" y2="158" stroke="#1a2d7a" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="130" y1="170" x2="140" y2="170" stroke="#5d71c4" strokeWidth="1.2" strokeLinecap="round" />
                <circle cx="130" cy="170" r="2" fill="#1a2d7a" />
                <circle cx="130" cy="148" r="2.5" fill="#f59e0b">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                </circle>
            </g>

            {/* Large funds coin (below shield) */}
            <g style={{ animation: 'coinDrop 0.6s ease-out 0.8s both', transformOrigin: '220px 300px' }}>
                <circle cx="220" cy="300" r="32" fill="#0a714e" opacity="0.08">
                    <animate attributeName="opacity" values="0.06;0.15;0.06" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="220" cy="300" r="28" fill="#0a714e" />
                <text x="220" y="307" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="700" fontFamily="Poppins, sans-serif">&#x20B9;</text>
            </g>
            {/* Flanking coins */}
            <g style={{ animation: 'coinDrop 0.5s ease-out 1.0s both', transformOrigin: '180px 288px' }}>
                <circle cx="180" cy="288" r="8" fill="#f59e0b" />
                <text x="180" y="291.5" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700" fontFamily="Poppins, sans-serif">&#x20B9;</text>
            </g>
            <g style={{ animation: 'coinDrop 0.5s ease-out 1.2s both', transformOrigin: '265px 292px' }}>
                <circle cx="265" cy="292" r="6" fill="#0a714e" opacity="0.7" />
                <text x="265" y="295" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="700" fontFamily="Poppins, sans-serif">&#x20B9;</text>
            </g>

            {/* Bank element (top-right, small) */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.4s both', transformOrigin: '360px 40px' }}>
                <rect x="340" y="32" width="40" height="6" rx="1" fill="#1a2d7a" />
                <polygon points="360,22 340,32 380,32" fill="#1a2d7a" />
                <rect x="340" y="38" width="40" height="30" rx="2" fill="#f8f9fc" stroke="#1a2d7a" strokeWidth="0.7" />
                <rect x="346" y="42" width="4" height="22" rx="1" fill="#5d71c4" opacity="0.3" />
                <rect x="354" y="42" width="4" height="22" rx="1" fill="#5d71c4" opacity="0.3" />
                <rect x="362" y="42" width="4" height="22" rx="1" fill="#5d71c4" opacity="0.3" />
                <rect x="370" y="42" width="4" height="22" rx="1" fill="#5d71c4" opacity="0.3" />
            </g>

            {/* Timeline card (right side) */}
            <g style={{ animation: 'slideInLeft 0.5s ease-out 0.5s both' }}>
                <rect x="310" y="100" width="110" height="140" rx="10" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.8" />
                {[
                    { y: 120, r: 5, color: '#1a2d7a', delay: 0.6 },
                    { y: 144, r: 5, color: '#1a2d7a', delay: 0.7 },
                    { y: 168, r: 5, color: '#5d71c4', delay: 0.8 },
                    { y: 192, r: 5, color: '#5d71c4', delay: 0.9 },
                    { y: 216, r: 7, color: '#0a714e', delay: 1.0 },
                ].map((dot, i, arr) => (
                    <g key={`tl${i}`}>
                        {i < arr.length - 1 && (
                            <line x1="330" y1={dot.y + dot.r} x2="330" y2={arr[i + 1].y - arr[i + 1].r} stroke="#e2e5eb" strokeWidth="1.5" />
                        )}
                        <circle cx="330" cy={dot.y} r={dot.r} fill={dot.color} />
                        {/* Green check next to each */}
                        <circle cx="350" cy={dot.y} r={i === 4 ? 6 : 5} fill="#0a714e" style={{ animation: `checkPop 0.3s ease-out ${dot.delay}s both` }}>
                        </circle>
                        <polyline
                            points={i === 4
                                ? `346,${dot.y} 349,${dot.y + 3.5} 355,${dot.y - 3}`
                                : `347,${dot.y} 349.5,${dot.y + 2.5} 354,${dot.y - 2}`}
                            fill="none" stroke="#fff" strokeWidth="1.3" strokeLinecap="round"
                        />
                        {/* Gray text placeholder */}
                        <rect x="362" y={dot.y - 3} width={35 - i * 3} height="5" rx="2.5" fill="#e2e5eb" />
                    </g>
                ))}
            </g>

            {/* Comparison bar card (bottom) */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 1.0s both' }}>
                <rect x="80" y="360" width="280" height="44" rx="10" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.8" />
                {/* Green bar (Neenv — short = fast) */}
                <rect x="100" y="371" width="60" height="5" rx="2.5" fill="#0a714e">
                    <animate attributeName="width" from="0" to="60" dur="0.6s" begin="1.2s" fill="freeze" />
                </rect>
                <circle cx="94" cy="373.5" r="4" fill="#0a714e" opacity="0.2" />
                {/* Red bar (Bank — long = slow) */}
                <rect x="100" y="387" width="220" height="5" rx="2.5" fill="#fecaca" />
                <circle cx="94" cy="389.5" r="4" fill="#dc2626" opacity="0.15" />
            </g>

            {/* Decorative elements */}
            <circle cx="80" cy="110" r="3" fill="#5d71c4" opacity="0.18" />
            <circle cx="300" cy="300" r="2.5" fill="#f59e0b" opacity="0.2" />
            <circle cx="165" cy="350" r="2" fill="#0a714e" opacity="0.15" />
            <rect x="95" y="250" width="5" height="5" rx="1" fill="#5d71c4" opacity="0.12" transform="rotate(45 97.5 252.5)" />
            <rect x="380" y="260" width="6" height="6" rx="1" fill="#f59e0b" opacity="0.15" transform="rotate(45 383 263)" />
        </svg>
    </div>
);

export default WorkingCapitalIllustration;
