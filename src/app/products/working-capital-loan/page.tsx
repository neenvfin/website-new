import { Metadata } from 'next';
import { ClipboardCheck, Landmark, Briefcase, Receipt } from 'lucide-react';
import Header from '@/components/Header/Header';
import ProductHero from '@/components/ProductHero/ProductHero';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import WorkingCapitalIllustration from '@/components/ProductIllustrations/WorkingCapitalIllustration';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
    title: 'Short-Term Working Capital Loan - Neenv',
    description: 'Flexible financing solution for immediate liquidity needs. Address day-to-day operations, seasonal demand, and short-term growth opportunities with collateral-free lending.',
    openGraph: {
        title: 'Short-Term Working Capital Loan - Neenv',
        description: 'Rapid access to collateral-free capital for your business. Flexible repayment aligned with your cash flow cycles.',
        type: 'website',
    },
};

const howItWorks = {
    sectionTitle: 'From Application to Funds',
    steps: [
        {
            title: 'Eligibility Check',
            description: 'Dealer\u2019s anchor trade data and business profile assessed digitally.',
            icon: <ClipboardCheck size={16} strokeWidth={2} />,
        },
        {
            title: 'Loan Sanctioned',
            description: 'Approved amount disbursed directly to dealer\u2019s bank account.',
            icon: <Landmark size={16} strokeWidth={2} />,
        },
        {
            title: 'Capital Deployed',
            description: 'Funds used for inventory, operations, or seasonal demand spikes.',
            icon: <Briefcase size={16} strokeWidth={2} />,
        },
        {
            title: 'Structured Repayment',
            description: 'Monthly EMIs over agreed tenor. Auto-debit via NACH.',
            icon: <Receipt size={16} strokeWidth={2} />,
        },
    ],
};

const benefits = {
    left: {
        title: 'Key Benefits for Dealers',
        items: [
            {
                headline: 'No Collateral Required',
                description: 'Backed by your trade relationship with the brand, not property or collateral.',
            },
            {
                headline: 'Instant Liquidity When You Need It',
                description: 'Digital KYC, instant verification, and fast credit decisioning. Funds in your account within 72 hours. No branch visits.',
            },
            {
                headline: 'Predictable Repayment',
                description: 'Fixed monthly EMIs. No floating rates, no surprises. Plan your cash flow with confidence.',
            },
        ],
    },
    right: {
        title: 'Key Benefits for Brands',
        items: [
            {
                headline: 'Boost Channel Sales',
                description: 'Financially stable dealers maintain consistent purchase volumes and take larger orders.',
            },
            {
                headline: 'Reduce Dealer Churn',
                description: 'Working capital stress is the #1 reason dealers leave a network. Remove it.',
            },
            {
                headline: 'Build Dealer Loyalty That Sticks',
                description: 'Brands that solve funding become irreplaceable. Your dealers won\u2019t look elsewhere.',
            },
        ],
    },
};

export default function WorkingCapitalLoanPage() {
    return (
        <>
            <Header />
            <main>
                <ProductHero
                    title="Short-Term Working Capital Loan"
                    subtitle="Flexible Business Financing"
                    description="A flexible financing solution designed to address immediate liquidity needs across the channel ecosystem. It supports day-to-day operations, seasonal demand, and short-term growth opportunities when invoice-based financing may not be sufficient."
                    flowGraphic={<WorkingCapitalIllustration />}
                />
                <ProductDetails howItWorks={howItWorks} benefits={benefits} />
            </main>
            <Footer />
        </>
    );
}
