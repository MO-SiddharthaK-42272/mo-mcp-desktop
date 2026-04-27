import { X, Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface PDFViewerDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PDFViewerDialog({ isOpen, onClose }: PDFViewerDialogProps) {
  const [pdfUrl, setPdfUrl] = useState<string>('');
  const [pdfDoc, setPdfDoc] = useState<jsPDF | null>(null);

  useEffect(() => {
    if (isOpen && !pdfUrl) {
      generatePDFPreview();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [isOpen, pdfUrl]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const generatePDFPreview = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let yPosition = 20;

    const primaryColor: [number, number, number] = [43, 46, 140];
    const textColor: [number, number, number] = [31, 31, 31];
    const lightGray: [number, number, number] = [156, 163, 175];

    const checkAddPage = (requiredSpace: number) => {
      if (yPosition + requiredSpace > pageHeight - 20) {
        doc.addPage();
        yPosition = 20;
        return true;
      }
      return false;
    };

    const addSection = (title: string, fontSize: number = 16) => {
      checkAddPage(15);
      doc.setFontSize(fontSize);
      doc.setTextColor(...primaryColor);
      doc.setFont('helvetica', 'bold');
      doc.text(title, 20, yPosition);
      yPosition += 10;
    };

    const addParagraph = (text: string, fontSize: number = 11) => {
      checkAddPage(20);
      doc.setFontSize(fontSize);
      doc.setTextColor(...textColor);
      doc.setFont('helvetica', 'normal');
      const lines = doc.splitTextToSize(text, pageWidth - 40);
      doc.text(lines, 20, yPosition);
      yPosition += lines.length * 5 + 5;
    };

    const addBullet = (text: string) => {
      checkAddPage(10);
      doc.setFontSize(11);
      doc.setTextColor(...textColor);
      doc.setFont('helvetica', 'normal');
      doc.text('•', 25, yPosition);
      const lines = doc.splitTextToSize(text, pageWidth - 50);
      doc.text(lines, 32, yPosition);
      yPosition += lines.length * 5 + 3;
    };

    // Cover Page
    doc.setFillColor(...primaryColor);
    doc.rect(0, 0, pageWidth, 80, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(28);
    doc.setFont('helvetica', 'bold');
    doc.text('Motilal Oswal MCP Server', pageWidth / 2, 35, { align: 'center' });

    doc.setFontSize(16);
    doc.setFont('helvetica', 'normal');
    doc.text('Complete Setup & Usage Guide', pageWidth / 2, 50, { align: 'center' });

    doc.setFontSize(11);
    doc.text('Version 1.0 | February 2026', pageWidth / 2, 65, { align: 'center' });

    yPosition = 100;

    // Table of Contents
    addSection('Table of Contents', 18);
    yPosition += 5;

    const tocItems = [
      { title: '1. Introduction', page: 2 },
      { title: '2. What is MCP Server?', page: 2 },
      { title: '3. Setup Guide', page: 3 },
      { title: '4. Platform-Specific Instructions', page: 4 },
      { title: '5. Use Cases & Possibilities', page: 6 },
      { title: '6. Available Capabilities', page: 8 },
      { title: '7. Security & Compliance', page: 9 },
      { title: '8. Troubleshooting', page: 10 },
      { title: '9. FAQ', page: 11 },
    ];

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.setTextColor(...textColor);

    tocItems.forEach(item => {
      checkAddPage(8);
      doc.text(item.title, 30, yPosition);
      doc.text(`Page ${item.page}`, pageWidth - 30, yPosition, { align: 'right' });
      yPosition += 7;
    });

    // Introduction
    doc.addPage();
    yPosition = 20;

    addSection('1. Introduction', 18);
    addParagraph(
      'Welcome to the Motilal Oswal MCP Server documentation. This guide will help you set up and use the MCP (Model Context Protocol) Server to connect your Motilal Oswal trading account with AI assistants like Claude and other AI-powered tools.'
    );
    addParagraph(
      'The MCP Server acts as a secure bridge between your trading account and AI assistants, allowing you to ask questions about your portfolio, get market insights, and execute trades using natural language.'
    );

    // What is MCP Server
    yPosition += 5;
    addSection('2. What is MCP Server?', 18);
    addParagraph(
      'The Model Context Protocol (MCP) is an open protocol that standardizes how applications provide context to Large Language Models (LLMs). The Motilal Oswal MCP Server implements this protocol to give AI assistants secure, controlled access to your trading account.'
    );

    yPosition += 5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...primaryColor);
    doc.text('Key Benefits:', 20, yPosition);
    yPosition += 7;

    addBullet('Natural Language Trading: Ask questions and execute trades using plain English');
    addBullet('Real-Time Portfolio Insights: Get instant answers about your holdings, P&L, and positions');
    addBullet('Market Analysis: Access market data and analytics through conversational AI');
    addBullet('Secure & Private: All data stays encrypted and is never shared with third parties');
    addBullet('Multi-Platform Support: Works on macOS, Windows, and Linux');

    // Setup Guide
    doc.addPage();
    yPosition = 20;

    addSection('3. Setup Guide Overview', 18);
    addParagraph(
      'Setting up the Motilal Oswal MCP Server involves three main steps:'
    );

    yPosition += 3;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...primaryColor);
    doc.text('Step 1: Install Prerequisites', 25, yPosition);
    yPosition += 7;
    addParagraph('Ensure you have Node.js (v18 or later) installed on your system.');

    yPosition += 3;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...primaryColor);
    doc.text('Step 2: Install the MCP Server', 25, yPosition);
    yPosition += 7;
    addParagraph('Install the server package using npm, pnpm, or other package managers.');

    yPosition += 3;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...primaryColor);
    doc.text('Step 3: Configure Your AI Assistant', 25, yPosition);
    yPosition += 7;
    addParagraph('Connect the MCP server to your preferred AI assistant (Claude Desktop, etc.).');

    // Platform-Specific Instructions
    doc.addPage();
    yPosition = 20;

    addSection('4. Platform-Specific Instructions', 18);

    // macOS
    yPosition += 5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.text('macOS Setup', 20, yPosition);
    yPosition += 10;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('1. Install Node.js:', 25, yPosition);
    yPosition += 6;
    doc.setFont('helvetica', 'normal');
    addBullet('Download from https://nodejs.org or use Homebrew: brew install node');

    doc.setFont('helvetica', 'bold');
    doc.text('2. Install MCP Server:', 25, yPosition);
    yPosition += 6;
    doc.setFont('helvetica', 'normal');
    addBullet('Open Terminal and run: npm install mo-mcp-bridge');

    doc.setFont('helvetica', 'bold');
    doc.text('3. Configure Claude Desktop:', 25, yPosition);
    yPosition += 6;
    doc.setFont('helvetica', 'normal');
    addBullet('Create config file at: ~/Library/Application Support/Claude/claude_desktop_config.json');
    addBullet('Add MCP server configuration to the file');
    addBullet('Restart Claude Desktop');

    // Windows
    checkAddPage(60);
    yPosition += 5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.text('Windows Setup', 20, yPosition);
    yPosition += 10;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('1. Install Node.js:', 25, yPosition);
    yPosition += 6;
    doc.setFont('helvetica', 'normal');
    addBullet('Download installer from https://nodejs.org');
    addBullet('Run installer and follow installation wizard');

    doc.setFont('helvetica', 'bold');
    doc.text('2. Install MCP Server:', 25, yPosition);
    yPosition += 6;
    doc.setFont('helvetica', 'normal');
    addBullet('Open Command Prompt or PowerShell');
    addBullet('Run: npm install mo-mcp-bridge');

    doc.setFont('helvetica', 'bold');
    doc.text('3. Configure Claude Desktop:', 25, yPosition);
    yPosition += 6;
    doc.setFont('helvetica', 'normal');
    addBullet('Create config at: %APPDATA%\\Claude\\claude_desktop_config.json');
    addBullet('Add server configuration and restart Claude');

    // Linux
    doc.addPage();
    yPosition = 20;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.text('Linux Setup', 20, yPosition);
    yPosition += 10;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('1. Install Node.js:', 25, yPosition);
    yPosition += 6;
    doc.setFont('helvetica', 'normal');
    addBullet('Ubuntu/Debian: sudo apt install nodejs npm');
    addBullet('Fedora: sudo dnf install nodejs npm');
    addBullet('Arch: sudo pacman -S nodejs npm');

    doc.setFont('helvetica', 'bold');
    doc.text('2. Install MCP Server:', 25, yPosition);
    yPosition += 6;
    doc.setFont('helvetica', 'normal');
    addBullet('Run: npm install mo-mcp-bridge');

    doc.setFont('helvetica', 'bold');
    doc.text('3. Configure AI Assistant:', 25, yPosition);
    yPosition += 6;
    doc.setFont('helvetica', 'normal');
    addBullet('Config location: ~/.config/Claude/claude_desktop_config.json');
    addBullet('Add configuration and restart');

    // Use Cases
    doc.addPage();
    yPosition = 20;

    addSection('5. Use Cases & Possibilities', 18);
    addParagraph(
      'The Motilal Oswal MCP Server opens up numerous possibilities for managing your trading account through AI:'
    );

    yPosition += 5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(...primaryColor);
    doc.text('Portfolio Management', 20, yPosition);
    yPosition += 8;

    addBullet('Check current portfolio value and performance');
    addBullet('View detailed holdings with real-time prices');
    addBullet('Analyze profit/loss by stock, sector, or time period');
    addBullet('Track daily, weekly, or monthly returns');
    addBullet('Monitor portfolio allocation and diversification');

    yPosition += 5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(...primaryColor);
    doc.text('Market Research & Analysis', 20, yPosition);
    yPosition += 8;

    addBullet('Get real-time stock quotes and market data');
    addBullet('Analyze stock fundamentals and technical indicators');
    addBullet('Compare multiple stocks side-by-side');
    addBullet('Access historical price data and charts');
    addBullet('Receive market news and sentiment analysis');

    yPosition += 5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(...primaryColor);
    doc.text('Example Queries You Can Ask:', 20, yPosition);
    yPosition += 8;

    addBullet('"What is my current portfolio value?"');
    addBullet('"Show me my top 5 performing stocks this month"');
    addBullet('"What is the current price of Reliance Industries?"');
    addBullet('"Buy 10 shares of TCS at market price"');
    addBullet('"What is my total profit/loss this year?"');

    // Capabilities
    doc.addPage();
    yPosition = 20;

    addSection('6. Available Capabilities', 18);
    addParagraph(
      'The MCP Server provides the following capabilities through AI assistants:'
    );

    yPosition += 5;

    autoTable(doc, {
      startY: yPosition,
      head: [['Category', 'Capabilities']],
      body: [
        ['Portfolio', 'View holdings, check balances, analyze performance, track P&L'],
        ['Market Data', 'Real-time quotes, historical data, charts, market indices'],
        ['Trading', 'Place orders, modify orders, cancel orders, view order book'],
        ['Research', 'Stock fundamentals, technical analysis, news, recommendations'],
        ['Reports', 'Performance reports, tax reports, dividend tracking'],
        ['Alerts', 'Price alerts, order notifications, portfolio updates'],
      ],
      theme: 'grid',
      headStyles: {
        fillColor: primaryColor,
        fontSize: 11,
        fontStyle: 'bold'
      },
      bodyStyles: {
        fontSize: 10
      },
      columnStyles: {
        0: { cellWidth: 40, fontStyle: 'bold' },
        1: { cellWidth: 130 }
      },
      margin: { left: 20, right: 20 },
    });

    yPosition = (doc as any).lastAutoTable.finalY + 15;

    // Security
    addSection('7. Security & Compliance', 18);
    addParagraph(
      'Your security and privacy are our top priorities. The Motilal Oswal MCP Server implements multiple layers of security:'
    );

    yPosition += 5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...primaryColor);
    doc.text('Security Features:', 20, yPosition);
    yPosition += 8;

    addBullet('End-to-End Encryption: All data transmitted is encrypted');
    addBullet('OAuth 2.0 Authentication: Industry-standard secure authentication');
    addBullet('No Data Storage: AI assistants do not store your financial data');
    addBullet('SEBI Compliant: Follows all regulatory requirements');
    addBullet('Two-Factor Authentication: Additional security layer');

    // Troubleshooting
    doc.addPage();
    yPosition = 20;

    addSection('8. Troubleshooting', 18);
    addParagraph('Common issues and their solutions:');

    yPosition += 5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...primaryColor);
    doc.text('Installation Issues:', 20, yPosition);
    yPosition += 8;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(...textColor);
    doc.text('Problem: npm install fails', 25, yPosition);
    yPosition += 6;
    doc.setFont('helvetica', 'normal');
    addBullet('Solution: Ensure Node.js v18+ is installed. Try: npm cache clean --force');

    doc.setFont('helvetica', 'bold');
    doc.text('Problem: Permission denied errors', 25, yPosition);
    yPosition += 6;
    doc.setFont('helvetica', 'normal');
    addBullet('Solution: Use sudo on macOS/Linux, or run as Administrator on Windows');

    yPosition += 5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...primaryColor);
    doc.text('For Additional Support:', 20, yPosition);
    yPosition += 8;

    addBullet('Email: query@motilaloswal.com');
    addBullet('Phone: +91 22 6749 0600');
    addBullet('Website: https://www.motilaloswal.com/support');

    // FAQ
    doc.addPage();
    yPosition = 20;

    addSection('9. Frequently Asked Questions', 18);
    yPosition += 5;

    const faqCategories = [
      {
        category: 'Security & Privacy',
        faqs: [
          {
            q: 'Is it safe to connect my account?',
            a: 'Yes, absolutely. We use OAuth-based authentication. We never store your password, and all data is encrypted with 256-bit SSL.'
          },
          {
            q: 'How do permissions work?',
            a: 'You choose between read-only access or trading permissions. All permissions are granted via OAuth - we never store your password.'
          },
          {
            q: 'What data do you access?',
            a: 'We only access what you authorize: portfolio holdings, P&L, account balance. We NEVER access your password, bank accounts, or personal documents.'
          },
          {
            q: 'What happens to my data?',
            a: 'Your data is encrypted in transit and at rest. We never sell your data to third parties. All data handling complies with Indian regulations.'
          },
        ]
      },
      {
        category: 'Trading & Permissions',
        faqs: [
          {
            q: 'Can the AI place trades without my permission?',
            a: 'Only if you explicitly grant trading permissions. By default, AI has read-only access. You maintain full control and can set limits or revoke access anytime.'
          },
          {
            q: 'How do I revoke access?',
            a: 'Revoke access instantly from your Motilal Oswal account settings under "Connected Apps" or from our dashboard.'
          },
        ]
      },
      {
        category: 'Getting Started',
        faqs: [
          {
            q: 'What AI assistants are supported?',
            a: 'Currently supports Claude Desktop, ChatGPT, and other MCP-compatible AI tools. New assistants are added regularly.'
          },
          {
            q: 'Is the MCP Server free to use?',
            a: 'Yes, the MCP Server is free for all Motilal Oswal trading account holders.'
          },
          {
            q: 'Do I need a Motilal Oswal trading account?',
            a: 'Yes, you need an active trading and demat account with Motilal Oswal.'
          },
        ]
      }
    ];

    faqCategories.forEach((category) => {
      checkAddPage(35);

      // Category Header
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.setTextColor(...primaryColor);
      doc.text(category.category, 20, yPosition);
      yPosition += 10;

      // FAQs in category
      category.faqs.forEach((faq) => {
        checkAddPage(25);

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.setTextColor(...primaryColor);
        doc.text(`Q: ${faq.q}`, 25, yPosition);
        yPosition += 6;

        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...textColor);
        const answerLines = doc.splitTextToSize(`A: ${faq.a}`, pageWidth - 50);
        doc.text(answerLines, 25, yPosition);
        yPosition += answerLines.length * 5 + 6;
      });

      yPosition += 5;
    });

    // Footer
    yPosition += 10;
    checkAddPage(30);
    doc.setDrawColor(...lightGray);
    doc.line(20, yPosition, pageWidth - 20, yPosition);
    yPosition += 10;

    doc.setFontSize(10);
    doc.setTextColor(...lightGray);
    doc.setFont('helvetica', 'normal');
    doc.text('Motilal Oswal Financial Services Limited', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 5;
    doc.text('© 2026 All Rights Reserved', pageWidth / 2, yPosition, { align: 'center' });

    // Page numbers
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(9);
      doc.setTextColor(...lightGray);
      doc.text(
        `Page ${i} of ${totalPages}`,
        pageWidth / 2,
        pageHeight - 10,
        { align: 'center' }
      );
    }

    setPdfDoc(doc);

    // Create blob URL for preview
    const pdfBlob = doc.output('blob');
    const url = URL.createObjectURL(pdfBlob);
    setPdfUrl(url);
  };

  const handleDownload = () => {
    if (pdfDoc) {
      pdfDoc.save('Motilal-Oswal-MCP-Server-Documentation.pdf');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Dialog */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, type: 'spring', damping: 25 }}
              className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
              style={{ height: '90vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b bg-white shrink-0">
                <h2 className="text-xl font-semibold text-gray-900">
                  MCP Server Documentation
                </h2>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={handleDownload}
                    className="bg-[#2B2E8C] hover:bg-[#1f2166] text-white"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Close dialog"
                  >
                    <X className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-auto bg-gray-100">
                {pdfUrl ? (
                  <iframe
                    src={pdfUrl}
                    className="w-full h-full border-0"
                    title="MCP Server Documentation"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#2B2E8C] border-r-transparent mb-4"></div>
                      <p className="text-gray-600">Generating documentation...</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-4 bg-gray-50 border-t shrink-0">
                <p className="text-sm text-gray-600 text-center">
                  Complete setup guide with platform-specific instructions, use cases, security features, and troubleshooting
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}