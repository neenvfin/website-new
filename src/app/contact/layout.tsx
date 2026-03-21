import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Neenv | Get in Touch',
    description: 'Reach out to the Neenv team for channel finance partnerships, dealer network financing, or general inquiries.',
    openGraph: {
        title: 'Contact Neenv | Get in Touch',
        description: 'Reach out to the Neenv team for channel finance partnerships, dealer network financing, or general inquiries.',
        url: 'https://www.neenvfin.com/contact',
        siteName: 'Neenv',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.neenvfin.com/contact',
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
