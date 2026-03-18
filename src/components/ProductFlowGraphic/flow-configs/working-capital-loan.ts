import type { FlowEntity, FlowConnection, FlowBadge, FlowStep, LegendItem } from '../ProductFlowGraphic';

export const workingCapitalEntities: FlowEntity[] = [
    {
        label: 'Dealer',
        sublabel: 'MSME Partner',
        x: 175, y: 20, width: 200, height: 72,
        fill: '#f8f9fc', stroke: '#f59e0b', strokeWidth: 1.5,
    },
    {
        label: 'Neenv',
        sublabel: 'Platform',
        x: 175, y: 150, width: 200, height: 72,
        fill: '#1a2d7a', stroke: '#1a2d7a',
        textColor: '#ffffff', sublabelColor: '#b5c4e8',
    },
    {
        label: 'Lender',
        sublabel: 'NBFC / Bank',
        x: 340, y: 280, width: 170, height: 72,
        fill: '#f8f9fc', stroke: '#e2e5eb',
    },
    {
        label: 'Business Use',
        sublabel: 'Inventory, Ops, Growth',
        x: 40, y: 280, width: 170, height: 72,
        fill: '#fefce8', stroke: '#f59e0b', strokeWidth: 0.5,
    },
];

export const workingCapitalConnections: FlowConnection[] = [
    // 1. Dealer → Neenv (application)
    {
        from: [290, 92],
        to: [290, 150],
        color: '#5d71c4',
        label: 'Application + KYC',
        labelPosition: [345, 125],
        animated: true,
        animationDirection: 'forward',
    },
    // 2. Neenv → Lender (credit assessment)
    {
        from: [375, 222],
        to: [400, 280],
        color: '#5d71c4',
        label: 'Credit assessment',
        labelPosition: [440, 252],
        animated: true,
        animationDirection: 'forward',
    },
    // 3. Lender → Neenv (sanction)
    {
        from: [365, 280],
        to: [340, 222],
        color: '#0a714e',
        label: 'Sanction',
        labelPosition: [310, 260],
        animated: true,
        animationDirection: 'reverse',
    },
    // 4. Neenv → Dealer (disbursement)
    {
        from: [260, 150],
        to: [260, 92],
        color: '#0a714e',
        strokeWidth: 2,
        label: '\u20B9 Disbursed',
        labelPosition: [210, 125],
        animated: true,
        animationDirection: 'reverse',
    },
    // 5. Dealer → Business Use (capital deployed)
    {
        path: 'M 175 56 C 100 56, 60 160, 80 280',
        from: [175, 56],
        to: [80, 280],
        color: '#f59e0b',
        label: 'Inventory, ops, growth',
        labelPosition: [60, 170],
        animated: true,
        animationDirection: 'forward',
    },
    // 6. Dealer → Lender (EMI repayment — dashed)
    {
        path: 'M 375 56 C 460 56, 490 160, 470 280',
        from: [375, 56],
        to: [470, 280],
        color: '#6b7280',
        dashed: true,
        animated: false,
        label: 'Monthly EMI',
        labelPosition: [490, 170],
    },
];

export const workingCapitalBadges: FlowBadge[] = [
    {
        text: '72 Hr Disbursal',
        x: 275, y: 128,
        bgColor: '#ecfdf5', textColor: '#0a714e',
    },
    {
        text: 'No Collateral',
        x: 275, y: 8,
        bgColor: '#eff6ff', textColor: '#1a2d7a',
    },
];

export const workingCapitalSteps: FlowStep[] = [
    { number: 1, x: 308, y: 110, bgColor: '#5d71c4' },
    { number: 2, x: 408, y: 245, bgColor: '#5d71c4' },
    { number: 3, x: 242, y: 245, bgColor: '#0a714e' },
    { number: 4, x: 110, y: 245, bgColor: '#f59e0b' },
];

export const workingCapitalLegend: LegendItem[] = [
    { color: '#5d71c4', label: 'Application flow' },
    { color: '#0a714e', label: 'Fund flow' },
    { color: '#f59e0b', label: 'Capital deployed' },
    { color: '#6b7280', label: 'Repayment' },
];
