import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Modal from '@/components/Modal'


export const metadata: Metadata = {
    title: 'Trello',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className='bg-#75F6F8'>
                {children}
                <Modal/>
            </body>
        </html>
    )
}
