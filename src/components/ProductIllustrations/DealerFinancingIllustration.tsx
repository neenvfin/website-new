'use client';

import styles from './ProductIllustrations.module.css';

const DealerFinancingIllustration = () => (
    <div className={styles.wrapper}>
        <svg className={styles.svg} viewBox="0 0 440 420" width="100%" xmlns="http://www.w3.org/2000/svg">
            {/* Background dot grid */}
            <g opacity="0.07">
                {Array.from({ length: 10 }).map((_, r) =>
                    Array.from({ length: 11 }).map((_, c) => (
                        <circle key={`d${r}-${c}`} cx={c * 40 + 20} cy={r * 40 + 20} r="1.5" fill="#1a2d7a" />
                    ))
                )}
            </g>

            {/* Dashed flow lines */}
            <path d="M 160 90 Q 190 120 210 145" fill="none" stroke="#5d71c4" strokeWidth="1" strokeDasharray="6 4" opacity="0.4">
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.2s" repeatCount="indefinite" />
            </path>
            <path d="M 280 90 Q 260 120 235 145" fill="none" stroke="#5d71c4" strokeWidth="1" strokeDasharray="6 4" opacity="0.4">
                <animate attributeName="stroke-dashoffset" from="0" to="20" dur="1.2s" repeatCount="indefinite" />
            </path>
            <path d="M 220 200 Q 220 240 220 280" fill="none" stroke="#0a714e" strokeWidth="1.2" strokeDasharray="6 4" opacity="0.4">
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M 186 310 Q 120 300 100 200 Q 85 120 95 85" fill="none" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="5 5" opacity="0.25" />

            {/* Central Neenv Shield */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.1s both', transformOrigin: '220px 155px' }}>
                <circle cx="220" cy="155" r="64" fill="#1a2d7a" opacity="0.04">
                    <animate attributeName="opacity" values="0.04;0.1;0.04" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="220" cy="155" r="52" fill="none" stroke="#5d71c4" strokeWidth="0.6" opacity="0.12">
                    <animate attributeName="opacity" values="0.08;0.18;0.08" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="220" cy="155" r="44" fill="#1a2d7a" />
                {/* Shield path */}
                <path d="M 220 130 L 240 140 L 240 158 Q 240 170 220 178 Q 200 170 200 158 L 200 140 Z" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinejoin="round" />
                {/* Checkmark inside shield */}
                <polyline points="210,153 217,162 232,146" fill="none" stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* Brand Building (top-left) */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.3s both, floatGentle 4s ease-in-out infinite', transformOrigin: '83px 60px' }}>
                <polygon points="83,40 55,55 111,55" fill="#1a2d7a" />
                <rect x="55" y="55" width="56" height="42" rx="3" fill="#f8f9fc" stroke="#1a2d7a" strokeWidth="0.8" />
                <rect x="63" y="62" width="8" height="8" rx="1" fill="#5d71c4" opacity="0.5" />
                <rect x="77" y="62" width="8" height="8" rx="1" fill="#5d71c4" opacity="0.3" />
                <rect x="63" y="76" width="8" height="8" rx="1" fill="#5d71c4" opacity="0.3" />
                <rect x="77" y="76" width="8" height="8" rx="1" fill="#5d71c4" opacity="0.5" />
                <rect x="79" y="85" width="10" height="12" rx="1.5" fill="#1a2d7a" opacity="0.2" />
                {/* Antenna */}
                <line x1="90" y1="40" x2="90" y2="28" stroke="#9ca3af" strokeWidth="0.8" />
                <circle cx="90" cy="26" r="3" fill="#f59e0b">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                </circle>
            </g>

            {/* Bank/Lender (top-right) */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.5s both, floatGentle 3.5s ease-in-out 0.5s infinite', transformOrigin: '344px 64px' }}>
                <rect x="316" y="52" width="56" height="6" rx="1" fill="#1a2d7a" />
                <polygon points="344,40 316,52 372,52" fill="#1a2d7a" />
                <rect x="316" y="58" width="56" height="38" rx="2" fill="#f8f9fc" stroke="#1a2d7a" strokeWidth="0.8" />
                <rect x="323" y="62" width="5" height="28" rx="1" fill="#5d71c4" opacity="0.35" />
                <rect x="333" y="62" width="5" height="28" rx="1" fill="#5d71c4" opacity="0.35" />
                <rect x="343" y="62" width="5" height="28" rx="1" fill="#5d71c4" opacity="0.35" />
                <rect x="353" y="62" width="5" height="28" rx="1" fill="#5d71c4" opacity="0.35" />
            </g>

            {/* Dealer Shop (bottom-center) */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.5s both, floatGentle 4s ease-in-out 0.3s infinite', transformOrigin: '220px 309px' }}>
                <rect x="186" y="290" width="68" height="48" rx="4" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1.2" />
                <path d="M 184 290 Q 198 276 220 276 Q 242 276 256 290" fill="#f59e0b" />
                <line x1="196" y1="284" x2="244" y2="284" stroke="#ffffff" strokeWidth="0.6" opacity="0.5" />
                <line x1="192" y1="287" x2="248" y2="287" stroke="#ffffff" strokeWidth="0.6" opacity="0.3" />
                <rect x="196" y="298" width="14" height="12" rx="2" fill="#f59e0b" opacity="0.15" />
                <rect x="230" y="298" width="14" height="12" rx="2" fill="#f59e0b" opacity="0.15" />
                <rect x="212" y="318" width="16" height="20" rx="2" fill="#1a2d7a" opacity="0.12" />
                <circle cx="224" cy="328" r="1.5" fill="#1a2d7a" opacity="0.3" />
            </g>

            {/* Coins dropping toward shop */}
            <g>
                <g style={{ animation: 'coinDrop 0.6s ease-out 0.8s both', transformOrigin: '205px 262px' }}>
                    <circle cx="205" cy="262" r="10" fill="#0a714e" />
                    <text x="205" y="266" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="Poppins, sans-serif">&#x20B9;</text>
                </g>
                <g style={{ animation: 'coinDrop 0.6s ease-out 1.1s both', transformOrigin: '228px 253px' }}>
                    <circle cx="228" cy="253" r="7" fill="#f59e0b" />
                    <text x="228" y="256.5" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700" fontFamily="Poppins, sans-serif">&#x20B9;</text>
                </g>
                <g style={{ animation: 'coinDrop 0.6s ease-out 1.4s both', transformOrigin: '240px 266px' }}>
                    <circle cx="240" cy="266" r="8" fill="#0a714e" opacity="0.8" />
                    <text x="240" y="270" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700" fontFamily="Poppins, sans-serif">&#x20B9;</text>
                </g>
            </g>

            {/* Floating Checkmark Card (left) */}
            <g style={{ animation: 'slideInLeft 0.5s ease-out 0.6s both' }}>
                <rect x="28" y="230" width="105" height="58" rx="8" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.8" />
                {[0, 1, 2].map((i) => (
                    <g key={`ck${i}`}>
                        <circle cx="44" cy={244 + i * 16} r="6" fill="#0a714e" style={{ animation: `checkPop 0.3s ease-out ${1.0 + i * 0.2}s both` }}>
                        </circle>
                        <polyline points={`41,${244 + i * 16} 43.5,${247 + i * 16} 48,${241 + i * 16}`} fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                        <rect x="56" y={241 + i * 16} width={40 - i * 6} height="5" rx="2.5" fill="#e2e5eb" />
                    </g>
                ))}
            </g>

            {/* Floating Progress Bar Card (left, above) */}
            <g style={{ animation: 'slideInLeft 0.5s ease-out 0.4s both' }}>
                <rect x="20" y="178" width="120" height="42" rx="8" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.8" />
                <rect x="30" y="190" width="100" height="5" rx="2.5" fill="#e2e5eb" />
                <rect x="30" y="190" width="65" height="5" rx="2.5" fill="#0a714e">
                    <animate attributeName="width" from="0" to="65" dur="0.8s" begin="0.7s" fill="freeze" />
                </rect>
                <circle cx="36" cy="205" r="3" fill="#0a714e" opacity="0.7" />
                <circle cx="46" cy="205" r="3" fill="#0a714e" opacity="0.5" />
                <circle cx="56" cy="205" r="3" fill="#0a714e" opacity="0.3" />
                <circle cx="66" cy="205" r="3" fill="#e2e5eb" />
                <rect x="78" y="203" width="50" height="4" rx="2" fill="#e2e5eb" />
            </g>

            {/* Floating Document Card (right) */}
            <g style={{ animation: 'slideInLeft 0.5s ease-out 0.8s both' }}>
                <rect x="310" y="168" width="100" height="60" rx="8" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.8" />
                <rect x="320" y="178" width="60" height="4" rx="2" fill="#e2e5eb" />
                <rect x="320" y="186" width="48" height="4" rx="2" fill="#e2e5eb" />
                <rect x="320" y="194" width="55" height="4" rx="2" fill="#e2e5eb" />
                <line x1="320" y1="208" x2="370" y2="208" stroke="#5d71c4" strokeWidth="0.8" strokeDasharray="3 2" />
                {/* Stamp */}
                <circle cx="390" cy="205" r="8" fill="#0a714e" opacity="0.15" stroke="#0a714e" strokeWidth="0.6" />
                <polyline points="386,205 389,208.5 395,201" fill="none" stroke="#0a714e" strokeWidth="1.2" strokeLinecap="round" />
            </g>

            {/* Floating Chart Card (bottom-right) */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 1.0s both' }} opacity="0.7">
                <rect x="340" y="298" width="65" height="44" rx="8" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.8" />
                <rect x="350" y="325" width="7" height="10" rx="1.5" fill="#5d71c4" opacity="0.3" />
                <rect x="361" y="319" width="7" height="16" rx="1.5" fill="#5d71c4" opacity="0.5" />
                <rect x="372" y="313" width="7" height="22" rx="1.5" fill="#0a714e" opacity="0.6" />
                <rect x="383" y="307" width="7" height="28" rx="1.5" fill="#0a714e" opacity="0.8" />
            </g>

            {/* Decorative elements */}
            <circle cx="160" cy="220" r="3" fill="#5d71c4" opacity="0.2">
                <animate attributeName="opacity" values="0.15;0.3;0.15" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="290" cy="240" r="2.5" fill="#f59e0b" opacity="0.2">
                <animate attributeName="opacity" values="0.1;0.25;0.1" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="370" cy="150" r="2" fill="#0a714e" opacity="0.2" />
            <circle cx="45" cy="150" r="3.5" fill="#1a2d7a" opacity="0.12" />
            <rect x="152" y="350" width="6" height="6" rx="1" fill="#5d71c4" opacity="0.12" transform="rotate(45 155 353)" />
            <rect x="300" y="260" width="5" height="5" rx="1" fill="#f59e0b" opacity="0.15" transform="rotate(45 302.5 262.5)" />
        </svg>
    </div>
);

export default DealerFinancingIllustration;
