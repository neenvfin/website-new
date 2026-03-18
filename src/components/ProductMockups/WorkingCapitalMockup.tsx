'use client';

import styles from './ProductMockups.module.css';

const Tick = ({ delay, size = 16 }: { delay: number; size?: number }) => (
    <div className={styles.tickIcon} style={{ animationDelay: `${delay}s`, width: size, height: size }}>
        <svg viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: size * 0.6, height: size * 0.6 }}>
            <polyline points="10 3 5 9 2 6" />
        </svg>
    </div>
);

interface TimelineStepProps {
    time: string;
    dotColor: string;
    event: string;
    sub: string;
    isLast?: boolean;
    isLarge?: boolean;
    isGreen?: boolean;
    badge?: { text: string; variant: string };
    tickDelay: number;
}

const TimelineStep = ({ time, dotColor, event, sub, isLast, isLarge, isGreen, badge, tickDelay }: TimelineStepProps) => (
    <div className={styles.timelineStep}>
        <div className={styles.timelineLeft}>{time}</div>
        <div className={styles.timelineDotCol}>
            <div
                className={isLarge ? styles.timelineDotLarge : styles.timelineDot}
                style={{ background: dotColor }}
            />
            {!isLast && <div className={styles.timelineLine} />}
        </div>
        <div className={styles.timelineRight}>
            <div className={isGreen ? styles.timelineEventGreen : styles.timelineEvent}>{event}</div>
            <div className={styles.timelineSub}>{sub}</div>
            <div className={styles.timelineBadges}>
                <Tick delay={tickDelay} size={16} />
                {badge && (
                    <span className={`${styles.statusBadge} ${badge.variant === 'info' ? styles.statusInfo : styles.statusWarning}`}>
                        {badge.text}
                    </span>
                )}
            </div>
        </div>
    </div>
);

const WorkingCapitalMockup = () => (
    <div className={styles.mockupCard}>
        {/* Header */}
        <div className={styles.headerRow}>
            <span className={styles.headerName}>Loan Application</span>
            <span className={`${styles.statusBadge} ${styles.statusSuccess}`}>Disbursed</span>
        </div>
        <div className={styles.subHeaderMuted}>WCL-20260312-0847</div>
        <div className={styles.bigAmount} style={{ marginTop: 4 }}>&rupee;12,00,000</div>

        <div className={styles.divider} />

        {/* Timeline */}
        <TimelineStep time="10:00 AM" dotColor="#1a2d7a" event="Application Received" sub="Digital submission" tickDelay={0.4} />
        <TimelineStep time="10:15 AM" dotColor="#1a2d7a" event="KYC Verified" sub="PAN + Aadhaar + GSTIN" tickDelay={0.5} badge={{ text: '100% Digital', variant: 'info' }} />
        <TimelineStep time="2:30 PM" dotColor="#5d71c4" event="Credit Assessed" sub="AI-powered decisioning" tickDelay={0.6} badge={{ text: 'AI Scored', variant: 'warning' }} />
        <TimelineStep time="Day 2, 11 AM" dotColor="#5d71c4" event="Loan Sanctioned" sub="&rupee;12,00,000 approved" tickDelay={0.7} />
        <TimelineStep time="Day 2, 3 PM" dotColor="#0a714e" event="&rupee;12,00,000 Disbursed" sub="Funds in dealer's account" tickDelay={0.8} isLast isLarge isGreen />

        <div className={styles.divider} />

        {/* Comparison */}
        <div className={styles.comparisonRow}>
            <div className={`${styles.comparisonItem} ${styles.comparisonGreen}`}>
                <div className={styles.comparisonLabel} style={{ color: '#0a714e' }}>Neenv</div>
                <div className={styles.comparisonValue} style={{ color: '#0a714e' }}>&lt; 48 hours</div>
                <div className={styles.comparisonBar} style={{ background: '#0a714e', width: '30%' }} />
            </div>
            <div className={`${styles.comparisonItem} ${styles.comparisonRed}`}>
                <div className={styles.comparisonLabel} style={{ color: '#dc2626' }}>Traditional Bank</div>
                <div className={styles.comparisonValue} style={{ color: '#dc2626' }}>15-30 days</div>
                <div className={styles.comparisonBar} style={{ background: '#fecaca', width: '100%' }} />
            </div>
        </div>

        <div className={styles.divider} />

        {/* Quote */}
        <div className={styles.wittyQuote}>
            &ldquo;Your bank&apos;s &lsquo;fast-track&rsquo; is our &lsquo;sorry for the delay.&rsquo;&rdquo;
            <div className={styles.wittyAttribution}>&mdash; Neenv</div>
        </div>
    </div>
);

export default WorkingCapitalMockup;
