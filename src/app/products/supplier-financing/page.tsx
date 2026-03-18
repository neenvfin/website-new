import { Metadata } from 'next';
import { Upload, CheckCircle, DollarSign, Calendar } from 'lucide-react';
import Header from '@/components/Header/Header';
import ProductHero from '@/components/ProductHero/ProductHero';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import SupplierFinancingIllustration from '@/components/ProductIllustrations/SupplierFinancingIllustration';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
    title: 'Supplier Financing - Neenv',
    description: 'Enable vendors to receive early payments against approved invoices, funded by Financial Institutions, without impacting the Brand corporate balance sheet.',
    openGraph: {
        title: 'Supplier Financing - Neenv',
        description: 'Early payments for suppliers at competitive rates. Off-balance sheet funding through partnered banks and NBFCs.',
        type: 'website',
    },
};

const howItWorks = {
    sectionTitle: 'From Delivery to Payment',
    steps: [
        {
            title: 'Invoice Submitted',
            description: 'Supplier submits invoice against goods delivered to the brand.',
            icon: <Upload size={16} strokeWidth={2} />,
        },
        {
            title: 'Brand Approves',
            description: 'Brand confirms receipt and approves the invoice on-platform.',
            icon: <CheckCircle size={16} strokeWidth={2} />,
        },
        {
            title: 'Supplier Gets Paid',
            description: 'Lender pays the supplier immediately, typically at a small discount.',
            icon: <DollarSign size={16} strokeWidth={2} />,
        },
        {
            title: 'Brand Pays on Due Date',
            description: 'Brand settles the full invoice amount with the lender on original terms.',
            icon: <Calendar size={16} strokeWidth={2} />,
        },
    ],
};

const benefits = {
    left: {
        title: 'Key Benefits for Suppliers',
        items: [
            {
                headline: 'Paid on Delivery',
                description: 'Get paid when you deliver, not 90 days later. Cash flow you can plan around.',
            },
            {
                headline: 'No New Debt',
                description: 'Early payment against approved invoices. No loan, no collateral, no interest burden on you.',
            },
            {
                headline: 'Scale With Confidence',
                description: 'Predictable cash flow means you can take on larger orders and invest in production capacity.',
            },
        ],
    },
    right: {
        title: 'Key Benefits for Brands',
        items: [
            {
                headline: 'Better Pricing From Suppliers',
                description: 'Suppliers price better when they know payment is immediate. Negotiate from strength.',
            },
            {
                headline: 'Reliable Supply Chain',
                description: 'Well-funded suppliers deliver on time. Fewer delays, fewer excuses, fewer production gaps.',
            },
            {
                headline: 'Build Supplier Loyalty That Sticks',
                description: 'Early payment makes you the preferred buyer. Suppliers prioritize brands that solve their cash flow.',
            },
        ],
    },
};

export default function SupplierFinancingPage() {
    return (
        <>
            <Header />
            <main>
                <ProductHero
                    title="Supplier Financing"
                    subtitle="Vendor Financing Program"
                    description="Vendors receive early payments against approved invoices, funded by Financial Institutions, without burdening the Brand corporate's balance sheet. Strengthen your supply chain with timely payments while maintaining healthy cash flows and working capital."
                    flowGraphic={<SupplierFinancingIllustration />}
                />
                <ProductDetails howItWorks={howItWorks} benefits={benefits} />
            </main>
            <Footer />
        </>
    );
}
