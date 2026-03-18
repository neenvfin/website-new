import { Metadata } from 'next';
import { FileText, ShieldCheck, Zap, ArrowRightLeft } from 'lucide-react';
import Header from '@/components/Header/Header';
import ProductHero from '@/components/ProductHero/ProductHero';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import FactoringIllustration from '@/components/ProductIllustrations/FactoringIllustration';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
    title: 'Factoring - Neenv',
    description: 'Convert approved receivables into immediate working capital. Same-day liquidity on invoices, collateral-free. Non-recourse options available.',
    openGraph: {
        title: 'Factoring - Neenv',
        description: 'Unlock cash tied in receivables. Same-day liquidity on approved invoices. Digital-first, collateral-free Factoring for channel partners.',
        type: 'website',
    },
};

const howItWorks = {
    sectionTitle: 'From Invoice to Cash',
    steps: [
        {
            title: 'Invoice Raised',
            description: 'Dealer raises invoice against goods delivered or services rendered.',
            icon: <FileText size={16} strokeWidth={2} />,
        },
        {
            title: 'Invoice Verified',
            description: 'Brand confirms the invoice on the platform.',
            icon: <ShieldCheck size={16} strokeWidth={2} />,
        },
        {
            title: 'Funds Disbursed',
            description: 'Lender advances up to 90% of invoice value to the dealer same day.',
            icon: <Zap size={16} strokeWidth={2} />,
        },
        {
            title: 'Brand Settles',
            description: 'Brand pays the full invoice amount to the lender on due date.',
            icon: <ArrowRightLeft size={16} strokeWidth={2} />,
        },
    ],
};

const benefits = {
    left: {
        title: 'Key Benefits for Dealers',
        items: [
            {
                headline: 'Same-Day Cash Flow',
                description: 'Don\u2019t wait 60\u201390 days for payment. Get funds the day your invoice is verified.',
            },
            {
                headline: 'Not a Loan, No Debt',
                description: 'This is sale of receivables. Nothing sits on your balance sheet. No EMI, no collateral.',
            },
            {
                headline: 'Grow Without Waiting',
                description: 'Use the cash to take on more orders instead of waiting for past ones to clear. Unlock your next purchase cycle.',
            },
        ],
    },
    right: {
        title: 'Key Benefits for Brands',
        items: [
            {
                headline: 'Boost Channel Sales',
                description: 'Dealers with liquidity place larger and more frequent orders. Your channel velocity increases.',
            },
            {
                headline: 'No Early Payment Pressure',
                description: 'Dealers stop chasing you for advances. The platform handles their liquidity needs.',
            },
            {
                headline: 'Build Dealer Loyalty That Sticks',
                description: 'Dealers get paid faster through your network. That\u2019s a competitive advantage other brands can\u2019t match.',
            },
        ],
    },
};

export default function InvoiceFactoringPage() {
    return (
        <>
            <Header />
            <main>
                <ProductHero
                    title="Factoring"
                    subtitle="Receivables to Cash. Same Day."
                    description="Don't let unpaid invoices throttle your working capital. Upload approved sales invoices, get funded the same day. Built for distributors, dealers, and suppliers operating on credit terms within Brand ecosystems."
                    flowGraphic={<FactoringIllustration />}
                />
                <ProductDetails howItWorks={howItWorks} benefits={benefits} />
            </main>
            <Footer />
        </>
    );
}
