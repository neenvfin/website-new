'use client';

import styles from './ProductMockups.module.css';

const Tick = ({ delay, size = 14 }: { delay: number; size?: number }) => (
    <div className={styles.tickIcon} style={{ animationDelay: `${delay}s`, width: size, height: size }}>
        <svg viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: size * 0.55, height: size * 0.55 }}>
            <polyline points="10 3 5 9 2 6" />
        </svg>
    </div>
);

const FactoringMockup = () => (
    <div className={styles.mockupCard}>
        {/* Invoice Header */}
        <div className={styles.invoiceHeader}>
            <div>
                <div className={styles.label} style={{ marginBottom: 2 }}>INVOICE</div>
                <span className={styles.subHeaderMuted}>INV-2847</span>
            </div>
            <span className={`${styles.statusBadge} ${styles.statusSuccess}`}>Funded</span>
        </div>

        <div className={styles.divider} />

        {/* Invoice Details */}
        <div className={styles.invoiceDetails}>
            <div>
                <div className={styles.invoiceDetailsLabel}>From</div>
                <div className={styles.invoiceDetailsValue}>Raj Electronics</div>
            </div>
            <div>
                <div className={styles.invoiceDetailsLabel}>To</div>
                <div className={styles.invoiceDetailsValue}>Polar Electricals</div>
            </div>
        </div>
        <div className={styles.bigAmount} style={{ marginTop: 10 }}>&rupee;4,50,000</div>
        <div style={{ display: 'flex', gap: 16, marginTop: 4 }}>
            <span className={styles.subHeaderMuted}>Date: 12 Mar 2026</span>
            <span className={styles.subHeaderMuted}>Due: 11 May 2026</span>
        </div>

        <div className={styles.divider} />

        {/* Status Steps */}
        <div className={styles.statusSteps}>
            <div className={styles.statusStep}>
                <div className={styles.statusStepDot} style={{ background: '#1a2d7a' }}>
                    <Tick delay={0.4} size={14} />
                </div>
                <div className={styles.statusStepLabel}>Submitted</div>
            </div>
            <div className={styles.statusStepConnector} />
            <div className={styles.statusStep}>
                <div className={styles.statusStepDot} style={{ background: '#5d71c4' }}>
                    <Tick delay={0.5} size={14} />
                </div>
                <div className={styles.statusStepLabel}>Brand Verified</div>
            </div>
            <div className={styles.statusStepConnector} />
            <div className={styles.statusStep}>
                <div className={styles.statusStepDotGlow} style={{ background: '#0a714e' }}>
                    <Tick delay={0.6} size={14} />
                </div>
                <div className={styles.statusStepLabel} style={{ fontWeight: 600, color: '#0a714e' }}>Funded</div>
            </div>
        </div>

        <div className={styles.divider} />

        {/* Funding Summary */}
        <div className={styles.statsGrid}>
            <div className={styles.statChip}>
                <div className={`${styles.statValue} ${styles.statValueGreen}`}>&rupee;4,05,000</div>
                <div className={styles.statLabel}>Amount Credited</div>
            </div>
            <div className={styles.statChip}>
                <div className={styles.statValue}>90%</div>
                <div className={styles.statLabel}>Advance Rate</div>
            </div>
            <div className={styles.statChip}>
                <div className={`${styles.statValue} ${styles.statValueGreen}`}>Same Day</div>
                <div className={styles.statLabel}>Turnaround</div>
            </div>
            <div className={styles.statChip}>
                <div className={styles.statValue}>&rupee;0</div>
                <div className={styles.statLabel}>Collateral</div>
            </div>
        </div>

        <div className={styles.divider} />

        {/* Benefit pills */}
        <div className={styles.pillsRow}>
            <span className={styles.pillGreen}>Not a Loan</span>
            <span className={styles.pillNavy}>No EMI</span>
            <span className={styles.pillAmber}>Off Balance Sheet</span>
        </div>

        <div className={styles.divider} />

        {/* Quote */}
        <div className={styles.wittyQuote}>
            &ldquo;He turned a 60-day receivable into today&apos;s working capital. His CA still doesn&apos;t believe it.&rdquo;
            <div className={styles.wittyAttribution}>&mdash; Neenv</div>
        </div>
    </div>
);

export default FactoringMockup;
