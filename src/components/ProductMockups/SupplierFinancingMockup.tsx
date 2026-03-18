'use client';

import styles from './ProductMockups.module.css';

const Tick = ({ delay }: { delay: number }) => (
    <div className={styles.tickIcon} style={{ animationDelay: `${delay}s`, width: 18, height: 18 }}>
        <svg viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 10, height: 10 }}>
            <polyline points="10 3 5 9 2 6" />
        </svg>
    </div>
);

const Cross = ({ delay }: { delay: number }) => (
    <div className={styles.crossIcon} style={{ animationDelay: `${delay}s`, width: 18, height: 18 }}>
        <svg viewBox="0 0 10 10" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
            <line x1="2" y1="2" x2="8" y2="8" />
            <line x1="8" y1="2" x2="2" y2="8" />
        </svg>
    </div>
);

const SupplierFinancingMockup = () => (
    <div className={styles.mockupCard}>
        {/* Header */}
        <div style={{ textAlign: 'center' }}>
            <div className={styles.headerName}>Payment Timeline</div>
            <div className={styles.subHeader}>How your suppliers experience getting paid</div>
        </div>

        <div className={styles.divider} />

        {/* Split layout */}
        <div className={styles.splitLayout}>
            {/* Without Neenv */}
            <div className={`${styles.splitCol} ${styles.splitColRed}`}>
                <div className={styles.splitHeader} style={{ color: '#dc2626' }}>Without Neenv</div>
                <div className={styles.splitPayment} style={{ color: '#dc2626' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    Day 90
                </div>
                <div className={styles.progressTrack} style={{ height: 4 }}>
                    <div className={styles.progressFillRed} style={{ width: '15%' }} />
                </div>
                <div className={styles.splitBarLabel} style={{ color: '#dc2626' }}>Cash flow: critical</div>
                <div className={styles.crossRow}><Cross delay={0.4} /> Waiting 90 days</div>
                <div className={styles.crossRow}><Cross delay={0.5} /> Production stalled</div>
                <div className={styles.crossRow}><Cross delay={0.6} /> Chasing payments</div>
            </div>

            {/* With Neenv */}
            <div className={`${styles.splitCol} ${styles.splitColGreen}`}>
                <div className={styles.splitHeader} style={{ color: '#0a714e' }}>With Neenv</div>
                <div className={styles.splitPayment} style={{ color: '#0a714e' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a714e" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    Day 1
                </div>
                <div className={styles.progressTrack} style={{ height: 4 }}>
                    <div className={styles.progressFillGreen} style={{ width: '95%' }} />
                </div>
                <div className={styles.splitBarLabel} style={{ color: '#0a714e' }}>Cash flow: healthy</div>
                <div className={styles.tickRow} style={{ fontSize: 12 }}><Tick delay={0.4} /> Paid on delivery</div>
                <div className={styles.tickRow} style={{ fontSize: 12 }}><Tick delay={0.5} /> Scale production</div>
                <div className={styles.tickRow} style={{ fontSize: 12 }}><Tick delay={0.6} /> Plan with confidence</div>
            </div>
        </div>

        <div className={styles.divider} />

        {/* Brand pills */}
        <div className={styles.pillsRow}>
            <span className={styles.pillNavy}>Better Pricing</span>
            <span className={styles.pillGreen}>On-Time Delivery</span>
            <span className={styles.pillAmber}>Terms Unchanged</span>
        </div>

        <div className={styles.divider} />

        {/* Quote */}
        <div className={styles.wittyQuote}>
            &ldquo;His supplier used to call on Day 89 asking &lsquo;where&apos;s my payment?&rsquo; Now he calls on Day 1 saying &lsquo;got it, thanks.&rsquo;&rdquo;
            <div className={styles.wittyAttribution}>&mdash; Neenv</div>
        </div>
    </div>
);

export default SupplierFinancingMockup;
