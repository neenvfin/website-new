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
            description: 'Seller raises invoice against goods delivered or services rendered.',
            icon: <FileText size={16} strokeWidth={2} />,
        },
        {
            title: 'Invoice Verified',
            description: 'Buyer confirms the invoice on the platform.',
            icon: <ShieldCheck size={16} strokeWidth={2} />,
        },
        {
            title: 'Funds Disbursed',
            description: 'Lender advances up to 90% of invoice value to the seller.',
            icon: <Zap size={16} strokeWidth={2} />,
        },
        {
            title: 'Buyer Settles',
            description: 'Buyer pays the full invoice amount to the lender on or before due date.',
            icon: <ArrowRightLeft size={16} strokeWidth={2} />,
        },
    ],
};

const benefits = {
    left: {
        title: 'Key Benefits for Seller',
        items: [
            {
                headline: 'Enhances Liquidity Planning',
                description: 'Streamline cash flow forecasting with predictable payment behaviour.',
            },
            {
                headline: 'Off Balance Sheet Credit',
                description: 'Keep your balance sheet clean while enabling channel growth.',
            },
            {
                headline: 'Boost Sales',
                description: 'Additional sales growth based on strength of the seller and its ecosystem.',
            },
        ],
    },
    right: {
        title: 'Key Benefits for Buyer',
        items: [
            {
                headline: 'Boost Business Volumes',
                description: 'Additional working capital to support business growth.',
            },
            {
                headline: 'Limited Documentation',
                description: 'Eligibility based on past performance with the seller.',
            },
            {
                headline: 'Flexibility of Repayments',
                description: 'Repayment aligned to your actual cash flows.',
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
                    subtitle="Receivables to Cash"
                    description="Don't let unpaid invoices throttle your working capital. Upload approved sales invoices, get funded the same day. Built for channel partners and suppliers operating on credit terms within Brand ecosystems."
                    flowGraphic={<FactoringIllustration />}
                />
                <ProductDetails howItWorks={howItWorks} benefits={benefits} />
            </main>
            <Footer />
        </>
    );
}
