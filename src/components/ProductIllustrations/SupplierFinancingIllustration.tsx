'use client';

import styles from './ProductIllustrations.module.css';

const SupplierFinancingIllustration = () => (
    <div className={styles.wrapper}>
        <svg className={styles.svg} viewBox="0 0 440 420" width="100%" xmlns="http://www.w3.org/2000/svg">
            {/* Background dot grid (outer edges only) */}
            <g opacity="0.06">
                {Array.from({ length: 10 }).map((_, r) =>
                    Array.from({ length: 11 }).map((_, c) => {
                        const x = c * 40 + 20;
                        const y = r * 40 + 20;
                        if (x > 100 && x < 340 && y > 80 && y < 360) return null;
                        return <circle key={`d${r}-${c}`} cx={x} cy={y} r="1.5" fill="#1a2d7a" />;
                    })
                )}
            </g>

            {/* Vertical divider */}
            <line x1="220" y1="60" x2="220" y2="380" stroke="#e2e5eb" strokeWidth="0.8" strokeDasharray="4 4" />

            {/* Brand building (top-center) */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.1s both', transformOrigin: '220px 55px' }}>
                <polygon points="220,28 192,45 248,45" fill="#1a2d7a" />
                <rect x="192" y="45" width="56" height="40" rx="3" fill="#f8f9fc" stroke="#1a2d7a" strokeWidth="0.8" />
                <rect x="200" y="52" width="7" height="7" rx="1" fill="#5d71c4" opacity="0.45" />
                <rect x="213" y="52" width="7" height="7" rx="1" fill="#5d71c4" opacity="0.3" />
                <rect x="226" y="52" width="7" height="7" rx="1" fill="#5d71c4" opacity="0.45" />
                <rect x="211" y="68" width="14" height="17" rx="2" fill="#1a2d7a" opacity="0.15" />
                {/* Lines going left-down and right-down */}
                <path d="M 198 85 Q 150 120 100 140" fill="none" stroke="#e2e5eb" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.4" />
                <path d="M 242 85 Q 290 120 340 140" fill="none" stroke="#5d71c4" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.4">
                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.5s" repeatCount="indefinite" />
                </path>
            </g>

            {/* Neenv shield (center) */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.2s both', transformOrigin: '220px 200px' }}>
                <circle cx="220" cy="200" r="44" fill="#1a2d7a" opacity="0.04">
                    <animate attributeName="opacity" values="0.04;0.1;0.04" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="220" cy="200" r="40" fill="none" stroke="#5d71c4" strokeWidth="0.5" opacity="0.1">
                    <animate attributeName="opacity" values="0.06;0.14;0.06" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="220" cy="200" r="36" fill="#1a2d7a" />
                <path d="M 220 178 L 237 186 L 237 202 Q 237 212 220 218 Q 203 212 203 202 L 203 186 Z" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinejoin="round" />
                <polyline points="212,197 218,205 230,191" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* ===== LEFT HALF: "Before" (gray/muted) ===== */}

            {/* Supplier factory (left, gray) */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.3s both', transformOrigin: '75px 145px' }}>
                <rect x="40" y="125" width="70" height="50" rx="4" fill="#f8f9fc" stroke="#e2e5eb" strokeWidth="0.8" />
                {/* Flat roof */}
                <rect x="38" y="120" width="74" height="7" rx="2" fill="#e2e5eb" />
                {/* Chimney (no smoke — idle) */}
                <rect x="90" y="108" width="10" height="14" rx="1.5" fill="#e2e5eb" />
                {/* Gray windows */}
                <rect x="50" y="135" width="10" height="10" rx="1.5" fill="#e2e5eb" />
                <rect x="65" y="135" width="10" height="10" rx="1.5" fill="#e2e5eb" />
                <rect x="80" y="135" width="10" height="10" rx="1.5" fill="#e2e5eb" />
                <rect x="60" y="155" width="14" height="20" rx="2" fill="#e2e5eb" />
            </g>

            {/* Empty cash indicators (left) */}
            <g>
                <circle cx="50" cy="205" r="6" fill="none" stroke="#e2e5eb" strokeWidth="1" />
                <circle cx="68" cy="205" r="6" fill="none" stroke="#e2e5eb" strokeWidth="1" />
                <circle cx="86" cy="205" r="6" fill="none" stroke="#e2e5eb" strokeWidth="1" />
                {/* Empty bar */}
                <rect x="42" y="220" width="52" height="5" rx="2.5" fill="none" stroke="#e2e5eb" strokeWidth="0.8" />
                {/* X mark */}
                <g opacity="0.3">
                    <line x1="104" y1="200" x2="112" y2="208" stroke="#dc2626" strokeWidth="1.2" strokeLinecap="round" />
                    <line x1="112" y1="200" x2="104" y2="208" stroke="#dc2626" strokeWidth="1.2" strokeLinecap="round" />
                </g>
            </g>

            {/* Waiting calendar (left) */}
            <g>
                <rect x="45" y="248" width="55" height="44" rx="6" fill="#fef2f2" stroke="#e2e5eb" strokeWidth="0.7" />
                {/* Calendar grid lines */}
                <line x1="45" y1="260" x2="100" y2="260" stroke="#e2e5eb" strokeWidth="0.5" />
                {[0, 1, 2].map((r) =>
                    [0, 1, 2, 3].map((c) => (
                        <rect key={`cal${r}${c}`} x={52 + c * 12} y={264 + r * 8} width="6" height="4" rx="1" fill="#e2e5eb" />
                    ))
                )}
                {/* Red overdue dot */}
                <circle cx="92" cy="284" r="4" fill="#dc2626" opacity="0.2" />
            </g>

            {/* Red X marks scattered */}
            <g opacity="0.25">
                <line x1="30" y1="300" x2="36" y2="306" stroke="#dc2626" strokeWidth="1" strokeLinecap="round" />
                <line x1="36" y1="300" x2="30" y2="306" stroke="#dc2626" strokeWidth="1" strokeLinecap="round" />
                <line x1="110" y1="260" x2="116" y2="266" stroke="#dc2626" strokeWidth="1" strokeLinecap="round" />
                <line x1="116" y1="260" x2="110" y2="266" stroke="#dc2626" strokeWidth="1" strokeLinecap="round" />
            </g>

            {/* ===== RIGHT HALF: "After" (green/alive) ===== */}

            {/* Supplier factory (right, green/alive) */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.4s both, floatGentle 3.5s ease-in-out infinite', transformOrigin: '365px 145px' }}>
                <rect x="300" y="125" width="70" height="50" rx="4" fill="#f0fdf4" stroke="#0a714e" strokeWidth="0.8" />
                <rect x="298" y="120" width="74" height="7" rx="2" fill="#0a714e" opacity="0.2" />
                {/* Chimney with smoke puffs */}
                <rect x="350" y="108" width="10" height="14" rx="1.5" fill="#0a714e" opacity="0.15" />
                <circle cx="355" cy="104" r="3" fill="#0a714e" opacity="0.1">
                    <animate attributeName="cy" values="104;92" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.1;0" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="358" cy="100" r="2.5" fill="#0a714e" opacity="0.08">
                    <animate attributeName="cy" values="100;88" dur="3.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.08;0" dur="3.5s" repeatCount="indefinite" />
                </circle>
                {/* Green windows */}
                <rect x="310" y="135" width="10" height="10" rx="1.5" fill="#0a714e" opacity="0.2" />
                <rect x="325" y="135" width="10" height="10" rx="1.5" fill="#0a714e" opacity="0.2" />
                <rect x="340" y="135" width="10" height="10" rx="1.5" fill="#0a714e" opacity="0.2" />
                <rect x="322" y="155" width="14" height="20" rx="2" fill="#0a714e" opacity="0.12" />
            </g>

            {/* Filled cash indicators (right) */}
            <g>
                {[0, 1, 2].map((i) => (
                    <circle key={`fc${i}`} cx={310 + i * 18} cy="205" r="6" fill="#0a714e"
                        style={{ animation: `checkPop 0.3s ease-out ${0.7 + i * 0.15}s both` }} />
                ))}
                {/* Filled bar */}
                <rect x="302" y="220" width="52" height="5" rx="2.5" fill="#e2e5eb" />
                <rect x="302" y="220" width="52" height="5" rx="2.5" fill="#0a714e">
                    <animate attributeName="width" from="0" to="52" dur="0.8s" begin="1.0s" fill="freeze" />
                </rect>
            </g>

            {/* Coins arriving (right, above factory) */}
            {[
                { cx: 320, cy: 108, r: 7, color: '#0a714e', delay: 0.9 },
                { cx: 340, cy: 102, r: 9, color: '#f59e0b', delay: 1.1 },
                { cx: 360, cy: 110, r: 6, color: '#0a714e', delay: 1.3 },
            ].map((coin, i) => (
                <g key={`rc${i}`} style={{ animation: `coinDrop 0.6s ease-out ${coin.delay}s both`, transformOrigin: `${coin.cx}px ${coin.cy}px` }}>
                    <circle cx={coin.cx} cy={coin.cy} r={coin.r} fill={coin.color} />
                    <text x={coin.cx} y={coin.cy + coin.r * 0.35} textAnchor="middle" fill="#fff" fontSize={coin.r * 0.8} fontWeight="700" fontFamily="Poppins, sans-serif">&#x20B9;</text>
                </g>
            ))}

            {/* Green check card (right) */}
            <g style={{ animation: 'slideInLeft 0.5s ease-out 0.7s both' }}>
                <rect x="310" y="248" width="85" height="44" rx="8" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.8" />
                {[0, 1].map((i) => (
                    <g key={`gck${i}`}>
                        <circle cx="326" cy={262 + i * 16} r="5" fill="#0a714e" style={{ animation: `checkPop 0.3s ease-out ${0.9 + i * 0.15}s both` }} />
                        <polyline points={`323,${262 + i * 16} 325.5,${265 + i * 16} 330,${259 + i * 16}`} fill="none" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
                        <rect x="337" y={259 + i * 16} width={35 - i * 8} height="4" rx="2" fill="#e2e5eb" />
                    </g>
                ))}
            </g>

            {/* Growth chart card (right, below) */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.9s both' }} opacity="0.8">
                <rect x="355" y="308" width="60" height="40" rx="8" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.8" />
                <rect x="365" y="332" width="6" height="10" rx="1.5" fill="#0a714e" opacity="0.3" />
                <rect x="375" y="326" width="6" height="16" rx="1.5" fill="#0a714e" opacity="0.5" />
                <rect x="385" y="320" width="6" height="22" rx="1.5" fill="#0a714e" opacity="0.7" />
                <rect x="395" y="314" width="6" height="28" rx="1.5" fill="#0a714e" />
            </g>

            {/* Decorative — only right half */}
            <circle cx="280" cy="300" r="3" fill="#0a714e" opacity="0.18">
                <animate attributeName="opacity" values="0.12;0.25;0.12" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="400" cy="180" r="2.5" fill="#f59e0b" opacity="0.2" />
            <circle cx="260" cy="350" r="2" fill="#5d71c4" opacity="0.15" />
            <rect x="380" y="140" width="5" height="5" rx="1" fill="#0a714e" opacity="0.12" transform="rotate(45 382.5 142.5)" />
            <rect x="270" y="110" width="4" height="4" rx="1" fill="#5d71c4" opacity="0.1" transform="rotate(45 272 112)" />
        </svg>
    </div>
);

export default SupplierFinancingIllustration;
