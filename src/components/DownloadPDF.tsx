import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';

const DownloadPDF = () => {
    return (
        <PDFDownloadLink
            document={<PDFDocument />}
            fileName="Zadock_Selasi_CV.pdf"
            className="px-10 py-5 border-2 border-secondary rounded-full font-bold uppercase transition-all hover:bg-secondary hover:text-white text-sm tracking-widest inline-block"
        >
            {/* @ts-ignore - renderer type issue */}
            {({ loading }) => (loading ? 'Preparing CV...' : 'Download CV')}
        </PDFDownloadLink>
    );
};

export default DownloadPDF;
