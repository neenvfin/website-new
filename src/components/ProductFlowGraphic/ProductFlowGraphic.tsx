'use client';

import styles from './ProductFlowGraphic.module.css';

export interface FlowEntity {
    label: string;
    sublabel: string;
    x: number;
    y: number;
    width: number;
    height: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    textColor?: string;
    sublabelColor?: string;
}

export interface FlowConnection {
    from: [number, number];
    to: [number, number];
    path?: string;
    color: string;
    strokeWidth?: number;
    animated?: boolean;
    animationDirection?: 'forward' | 'reverse';
    dashed?: boolean;
    label?: string;
    labelPosition?: [number, number];
}

export interface FlowBadge {
    text: string;
    x: number;
    y: number;
    bgColor: string;
    textColor: string;
}

export interface FlowStep {
    number: number;
    x: number;
    y: number;
    bgColor: string;
}

export interface LegendItem {
    color: string;
    label: string;
}

export interface ProductFlowGraphicProps {
    entities: FlowEntity[];
    connections: FlowConnection[];
    badges?: FlowBadge[];
    steps?: FlowStep[];
    legend: LegendItem[];
    viewBoxWidth?: number;
    viewBoxHeight?: number;
}

const ProductFlowGraphic = ({
    entities,
    connections,
    badges = [],
    steps = [],
    legend,
    viewBoxWidth = 550,
    viewBoxHeight = 380,
}: ProductFlowGraphicProps) => {
    return (
        <div className={styles.wrapper}>
            <svg
                className={styles.svg}
                viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter id="entityShadow" x="-4%" y="-4%" width="108%" height="116%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#1a2d7a" floodOpacity="0.06" />
                    </filter>
                    <filter id="badgeShadow" x="-8%" y="-12%" width="116%" height="132%">
                        <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000" floodOpacity="0.08" />
                    </filter>
                </defs>

                {/* Connections */}
                {connections.map((conn, i) => {
                    const pathD = conn.path
                        ? conn.path
                        : `M ${conn.from[0]} ${conn.from[1]} L ${conn.to[0]} ${conn.to[1]}`;

                    const lineClass = conn.dashed
                        ? styles.dashedLine
                        : conn.animated !== false
                            ? conn.animationDirection === 'reverse'
                                ? styles.flowLineReverse
                                : styles.flowLineForward
                            : '';

                    return (
                        <g key={`conn-${i}`}>
                            <path
                                d={pathD}
                                fill="none"
                                stroke={conn.color}
                                strokeWidth={conn.strokeWidth || 1.5}
                                className={lineClass}
                                strokeLinecap="round"
                            />
                            {/* Pulse dot at midpoint for animated lines */}
                            {conn.animated !== false && !conn.dashed && (
                                <circle
                                    cx={conn.path ? undefined : (conn.from[0] + conn.to[0]) / 2}
                                    cy={conn.path ? undefined : (conn.from[1] + conn.to[1]) / 2}
                                    r="3"
                                    fill={conn.color}
                                    className={styles.pulseDot}
                                />
                            )}
                            {/* Label */}
                            {conn.label && conn.labelPosition && (
                                <text
                                    x={conn.labelPosition[0]}
                                    y={conn.labelPosition[1]}
                                    className={styles.connectionLabel}
                                    fill="#6b7280"
                                    textAnchor="middle"
                                >
                                    {conn.label}
                                </text>
                            )}
                        </g>
                    );
                })}

                {/* Entities */}
                {entities.map((entity, i) => (
                    <g
                        key={`entity-${i}`}
                        className={styles.flowEntity}
                        style={{ animationDelay: `${i * 0.15}s` }}
                    >
                        <rect
                            x={entity.x}
                            y={entity.y}
                            width={entity.width}
                            height={entity.height}
                            rx="10"
                            fill={entity.fill || '#f8f9fc'}
                            stroke={entity.stroke || '#e2e5eb'}
                            strokeWidth={entity.strokeWidth || 1}
                            filter="url(#entityShadow)"
                        />
                        <text
                            x={entity.x + entity.width / 2}
                            y={entity.y + entity.height / 2 - 6}
                            textAnchor="middle"
                            className={styles.entityLabel}
                            fill={entity.textColor || '#1a1a2e'}
                        >
                            {entity.label}
                        </text>
                        <text
                            x={entity.x + entity.width / 2}
                            y={entity.y + entity.height / 2 + 12}
                            textAnchor="middle"
                            className={styles.entitySublabel}
                            fill={entity.sublabelColor || '#6b7280'}
                        >
                            {entity.sublabel}
                        </text>
                    </g>
                ))}

                {/* Step Numbers */}
                {steps.map((step, i) => (
                    <g key={`step-${i}`} className={styles.flowBadge} style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                        <circle cx={step.x} cy={step.y} r="11" fill={step.bgColor} />
                        <text
                            x={step.x}
                            y={step.y + 4}
                            textAnchor="middle"
                            className={styles.stepNumber}
                            fill="#ffffff"
                        >
                            {step.number}
                        </text>
                    </g>
                ))}

                {/* Badges */}
                {badges.map((badge, i) => {
                    const textLen = badge.text.length * 6.5 + 20;
                    return (
                        <g key={`badge-${i}`} className={styles.flowBadge} style={{ animationDelay: `${0.5 + i * 0.15}s` }}>
                            <rect
                                x={badge.x - textLen / 2}
                                y={badge.y - 12}
                                width={textLen}
                                height={24}
                                rx="12"
                                fill={badge.bgColor}
                                filter="url(#badgeShadow)"
                            />
                            <text
                                x={badge.x}
                                y={badge.y + 4}
                                textAnchor="middle"
                                className={styles.badgeText}
                                fill={badge.textColor}
                            >
                                {badge.text}
                            </text>
                        </g>
                    );
                })}
            </svg>

            {/* Legend */}
            <div className={styles.legend}>
                {legend.map((item, i) => (
                    <div key={i} className={styles.legendItem}>
                        <div className={styles.legendDot} style={{ backgroundColor: item.color }} />
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductFlowGraphic;
