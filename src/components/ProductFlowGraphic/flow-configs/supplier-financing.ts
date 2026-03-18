import type { FlowEntity, FlowConnection, FlowBadge, FlowStep, LegendItem } from '../ProductFlowGraphic';

export const supplierFinancingEntities: FlowEntity[] = [
    {
        label: 'Brand',
        sublabel: 'Buyer / OEM',
        x: 195, y: 20, width: 160, height: 72,
        fill: '#f8f9fc', stroke: '#e2e5eb',
    },
    {
        label: 'Neenv',
        sublabel: 'Platform',
        x: 195, y: 140, width: 160, height: 64,
        fill: '#1a2d7a', stroke: '#1a2d7a',
        textColor: '#ffffff', sublabelColor: '#b5c4e8',
    },
    {
        label: 'Supplier',
        sublabel: 'Vendor / MSME',
        x: 30, y: 240, width: 170, height: 72,
        fill: '#f8f9fc', stroke: '#f59e0b', strokeWidth: 1.5,
    },
    {
        label: 'Lender',
        sublabel: 'NBFC / Bank',
        x: 350, y: 240, width: 170, height: 72,
        fill: '#f8f9fc', stroke: '#e2e5eb',
    },
];

export const supplierFinancingConnections: FlowConnection[] = [
    // 1. Supplier → Brand (goods + invoice)
    {
        path: 'M 115 240 C 115 160, 195 92, 195 56',
        from: [115, 240],
        to: [195, 56],
        color: '#5d71c4',
        label: 'Goods + invoice',
        labelPosition: [110, 150],
        animated: true,
        animationDirection: 'forward',
    },
    // 2. Brand → Neenv (approves invoice)
    {
        from: [275, 92],
        to: [275, 140],
        color: '#5d71c4',
        label: 'Approves invoice',
        labelPosition: [330, 118],
        animated: true,
        animationDirection: 'forward',
    },
    // 3. Neenv → Lender (funding request)
    {
        from: [355, 186],
        to: [400, 240],
        color: '#5d71c4',
        label: 'Funding request',
        labelPosition: [415, 215],
        animated: true,
        animationDirection: 'forward',
    },
    // 4. Lender → Supplier (early payment)
    {
        from: [350, 276],
        to: [200, 276],
        color: '#0a714e',
        strokeWidth: 2,
        label: 'Early payment',
        labelPosition: [275, 266],
        animated: true,
        animationDirection: 'reverse',
    },
    // 5. Brand → Lender (pays on due date — dashed)
    {
        path: 'M 355 56 C 460 56, 490 160, 470 240',
        from: [355, 56],
        to: [470, 240],
        color: '#6b7280',
        dashed: true,
        animated: false,
        label: 'Pays on due date',
        labelPosition: [480, 150],
    },
];

export const supplierFinancingBadges: FlowBadge[] = [
    {
        text: 'Paid on delivery',
        x: 115, y: 320,
        bgColor: '#ecfdf5', textColor: '#0a714e',
    },
    {
        text: 'Terms unchanged',
        x: 275, y: 8,
        bgColor: '#eff6ff', textColor: '#1a2d7a',
    },
];

export const supplierFinancingSteps: FlowStep[] = [
    { number: 1, x: 155, y: 155, bgColor: '#5d71c4' },
    { number: 2, x: 293, y: 115, bgColor: '#5d71c4' },
    { number: 3, x: 275, y: 290, bgColor: '#0a714e' },
    { number: 4, x: 460, y: 115, bgColor: '#6b7280' },
];

export const supplierFinancingLegend: LegendItem[] = [
    { color: '#5d71c4', label: 'Invoice flow' },
    { color: '#0a714e', label: 'Early payment' },
    { color: '#6b7280', label: 'Settlement on due date' },
];
