import { Metadata } from 'next';
import Header from '@/components/Header/Header';
import FiHero from '@/components/for-fis/FiHero';
import ValueProposition from '@/components/for-fis/ValueProposition';
import WhatWeBring from '@/components/for-fis/WhatWeBring';
import FiCTA from '@/components/for-fis/FiCTA';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
    title: 'Partner With Neenv | Channel Finance for Financial Institutions',
    description: 'Embed channel finance into your lending portfolio. Neenv provides the technology and underwriting infrastructure for banks and NBFCs to serve MSME dealer networks.',
    keywords: ['NBFC lending partner', 'co-lending platform', 'channel finance assets', 'loan origination platform', 'digital lending infrastructure'],
    openGraph: {
        title: 'Partner With Neenv | Channel Finance for Financial Institutions',
        description: 'Embed channel finance into your lending portfolio. Neenv provides the technology and underwriting infrastructure for banks and NBFCs to serve MSME dealer networks.',
        url: 'https://www.neenvfin.com/for-financial-institutions',
        siteName: 'Neenv',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.neenvfin.com/for-financial-institutions',
    },
};

export default function ForFinancialInstitutionsPage() {
    return (
        <>
            <Header />
            <main>
                <FiHero />
                <ValueProposition />
                <WhatWeBring />
                <FiCTA />
            </main>
            <Footer />
        </>
    );
}
