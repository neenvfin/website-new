import type { FlowEntity, FlowConnection, FlowBadge, FlowStep, LegendItem } from '../ProductFlowGraphic';

export const factoringEntities: FlowEntity[] = [
    {
        label: 'Dealer',
        sublabel: 'Supplier / Seller',
        x: 20, y: 120, width: 150, height: 72,
        fill: '#f8f9fc', stroke: '#f59e0b', strokeWidth: 1.5,
    },
    {
        label: 'Neenv',
        sublabel: 'Platform',
        x: 200, y: 120, width: 150, height: 72,
        fill: '#1a2d7a', stroke: '#1a2d7a',
        textColor: '#ffffff', sublabelColor: '#b5c4e8',
    },
    {
        label: 'Brand',
        sublabel: 'Buyer / OEM',
        x: 380, y: 30, width: 150, height: 72,
        fill: '#f8f9fc', stroke: '#e2e5eb',
    },
    {
        label: 'Lender',
        sublabel: 'NBFC / Bank',
        x: 380, y: 220, width: 150, height: 72,
        fill: '#f8f9fc', stroke: '#e2e5eb',
    },
];

export const factoringConnections: FlowConnection[] = [
    // 1. Dealer → Neenv (invoice submitted)
    {
        from: [170, 148],
        to: [200, 148],
        color: '#5d71c4',
        label: 'Invoice submitted',
        labelPosition: [185, 138],
        animated: true,
        animationDirection: 'forward',
    },
    // 2. Neenv → Brand (verify invoice)
    {
        from: [350, 140],
        to: [380, 66],
        color: '#5d71c4',
        label: 'Verify invoice',
        labelPosition: [395, 110],
        animated: true,
        animationDirection: 'forward',
    },
    // 3. Brand → Neenv (confirmed)
    {
        from: [380, 80],
        to: [330, 140],
        color: '#0a714e',
        label: 'Confirmed',
        labelPosition: [335, 118],
        animated: true,
        animationDirection: 'reverse',
    },
    // 4. Neenv → Dealer (90% advance)
    {
        from: [200, 170],
        to: [170, 170],
        color: '#0a714e',
        strokeWidth: 2,
        label: '90% advance same day',
        labelPosition: [185, 205],
        animated: true,
        animationDirection: 'reverse',
    },
    // 5. Brand → Lender (pays on due date — dashed)
    {
        from: [455, 102],
        to: [455, 220],
        color: '#6b7280',
        dashed: true,
        animated: false,
        label: 'Pays on due date',
        labelPosition: [455, 165],
    },
];

export const factoringBadges: FlowBadge[] = [
    {
        text: 'Same-day funds',
        x: 120, y: 210,
        bgColor: '#ecfdf5', textColor: '#0a714e',
    },
    {
        text: 'Not a loan',
        x: 95, y: 108,
        bgColor: '#fefce8', textColor: '#92400e',
    },
];

export const factoringSteps: FlowStep[] = [
    { number: 1, x: 185, y: 140, bgColor: '#5d71c4' },
    { number: 2, x: 370, y: 100, bgColor: '#5d71c4' },
    { number: 3, x: 340, y: 130, bgColor: '#0a714e' },
    { number: 4, x: 455, y: 160, bgColor: '#6b7280' },
];

export const factoringLegend: LegendItem[] = [
    { color: '#5d71c4', label: 'Invoice flow' },
    { color: '#0a714e', label: 'Fund flow' },
    { color: '#6b7280', label: 'Settlement' },
];
