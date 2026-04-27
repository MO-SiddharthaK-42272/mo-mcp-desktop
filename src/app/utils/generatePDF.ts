import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export function generateDocumentationPDF() {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPosition = 20;

  // Add custom font settings
  const primaryColor: [number, number, number] = [43, 46, 140]; // #2B2E8C
  const textColor: [number, number, number] = [31, 31, 31];
  const lightGray: [number, number, number] = [156, 163, 175];

  // Helper function to add new page if needed
  const checkAddPage = (requiredSpace: number) => {
    if (yPosition + requiredSpace > pageHeight - 20) {
      doc.addPage();
      yPosition = 20;
      return true;
    }
    return false;
  };

  // Helper function to add section
  const addSection = (title: string, fontSize: number = 16) => {
    checkAddPage(15);
    doc.setFontSize(fontSize);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text(title, 20, yPosition);
    yPosition += 10;
  };

  // Helper function to add paragraph
  const addParagraph = (text: string, fontSize: number = 11) => {
    checkAddPage(20);
    doc.setFontSize(fontSize);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'normal');
    const lines = doc.splitTextToSize(text, pageWidth - 40);
    doc.text(lines, 20, yPosition);
    yPosition += lines.length * 5 + 5;
  };

  // Helper function to add bullet point
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

  // Helper function to add a code/config block with gray background
  const addCodeBlock = (lines: string[]) => {
    checkAddPage(lines.length * 5 + 16);
    const blockX = 22;
    const blockWidth = pageWidth - 44;
    const lineHeight = 5;
    const padding = 5;
    const blockHeight = lines.length * lineHeight + padding * 2;

    // Draw gray background
    doc.setFillColor(240, 242, 248);
    doc.setDrawColor(200, 204, 230);
    doc.roundedRect(blockX, yPosition - 2, blockWidth, blockHeight, 2, 2, 'FD');

    doc.setFont('courier', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(40, 40, 80);

    lines.forEach((line, idx) => {
      doc.text(line, blockX + padding, yPosition + padding + idx * lineHeight);
    });

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...textColor);
    yPosition += blockHeight + 6;
  };

  // ========== COVER PAGE ==========
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

  // ========== TABLE OF CONTENTS ==========
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

  // ========== INTRODUCTION ==========
  doc.addPage();
  yPosition = 20;

  addSection('1. Introduction', 18);
  addParagraph(
    'Welcome to the Motilal Oswal MCP Server documentation. This guide will help you set up and use the MCP (Model Context Protocol) Server to connect your Motilal Oswal trading account with AI assistants like Claude, ChatGPT, and other AI-powered tools.'
  );
  addParagraph(
    'The MCP Server acts as a secure bridge between your trading account and AI assistants, allowing you to ask questions about your portfolio, get market insights, and execute trades using natural language.'
  );

  // ========== WHAT IS MCP SERVER ==========
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

  // ========== SETUP GUIDE ==========
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
  addParagraph('Connect the MCP server to your preferred AI assistant (Claude Desktop, ChatGPT, etc.).');

  // ========== PLATFORM-SPECIFIC INSTRUCTIONS ==========
  doc.addPage();
  yPosition = 20;

  addSection('4. Platform-Specific Instructions', 18);

  // macOS Setup
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
  addBullet('Add the following MCP server configuration to the file:');
  addCodeBlock([
    '{',
    '  "mcpServers": {',
    '    "MO-TRADING": {',
    '      "command": "npx",',
    '      "args": [',
    '        "-y",',
    '        "mo-mcp-bridge",',
    '        "https://mcp.motilaloswal.com/mcp/"',
    '      ]',
    '    }',
    '  },',
    '  "preferences": {',
    '    "coworkScheduledTasksEnabled": false,',
    '    "sidebarMode": "task"',
    '  }',
    '}',
  ]);
  addBullet('Restart Claude Desktop');

  // Windows Setup
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
  addBullet('Add the following MCP server configuration to the file:');
  addCodeBlock([
    '{',
    '  "mcpServers": {',
    '    "MO-TRADING": {',
    '      "command": "npx",',
    '      "args": [',
    '        "-y",',
    '        "mo-mcp-bridge",',
    '        "https://mcp.motilaloswal.com/mcp/"',
    '      ]',
    '    }',
    '  },',
    '  "preferences": {',
    '    "coworkScheduledTasksEnabled": false,',
    '    "sidebarMode": "task"',
    '  }',
    '}',
  ]);
  addBullet('Restart Claude Desktop');

  // Linux Setup
  doc.addPage();
  yPosition = 20;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(...primaryColor);
  doc.text('Linux Setup', 20, yPosition);
  yPosition += 10;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('1. Update System Packages:', 25, yPosition);
  yPosition += 6;
  doc.setFont('helvetica', 'normal');
  addBullet('Before installing Node.js, update your system packages:');
  addCodeBlock([
    'sudo apt update && sudo apt upgrade',
  ]);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...textColor);
  doc.text('2. Install Node.js:', 25, yPosition);
  yPosition += 6;
  doc.setFont('helvetica', 'normal');
  addBullet('Ubuntu/Debian: sudo apt install nodejs npm');
  addBullet('Fedora: sudo dnf install nodejs npm');
  addBullet('Arch: sudo pacman -S nodejs npm');

  doc.setFont('helvetica', 'bold');
  doc.text('3. Install MCP Server:', 25, yPosition);
  yPosition += 6;
  doc.setFont('helvetica', 'normal');
  addBullet('Run: npm install mo-mcp-bridge');

  doc.setFont('helvetica', 'bold');
  doc.text('4. Configure AI Assistant:', 25, yPosition);
  yPosition += 6;
  doc.setFont('helvetica', 'normal');
  addBullet('Config location: ~/.config/Claude/claude_desktop_config.json');
  addBullet('Add the following MCP server configuration to the file:');
  addCodeBlock([
    '{',
    '  "mcpServers": {',
    '    "MO-TRADING": {',
    '      "command": "npx",',
    '      "args": [',
    '        "-y",',
    '        "mo-mcp-bridge",',
    '        "https://mcp.motilaloswal.com/mcp/"',
    '      ]',
    '    }',
    '  },',
    '  "preferences": {',
    '    "coworkScheduledTasksEnabled": false,',
    '    "sidebarMode": "task"',
    '  }',
    '}',
  ]);
  addBullet('Restart your AI assistant');

  // ========== USE CASES ==========
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
  doc.text('Trading Operations', 20, yPosition);
  yPosition += 8;

  addBullet('Place buy and sell orders using natural language');
  addBullet('Set up stop-loss and target orders');
  addBullet('Modify or cancel existing orders');
  addBullet('Track order status and execution');
  addBullet('Review trade history and performance');

  checkAddPage(60);
  yPosition += 5;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...primaryColor);
  doc.text('Reporting & Insights', 20, yPosition);
  yPosition += 8;

  addBullet('Generate portfolio performance reports');
  addBullet('Tax loss harvesting analysis');
  addBullet('Dividend income tracking');
  addBullet('Sector and industry exposure analysis');
  addBullet('Risk assessment and recommendations');

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
  addBullet('"Show me all stocks in my portfolio that are down today"');
  addBullet('"What is my exposure to the banking sector?"');
  addBullet('"Calculate my realized gains for tax purposes"');

  // ========== CAPABILITIES ==========
  doc.addPage();
  yPosition = 20;

  addSection('6. Available Capabilities', 18);
  addParagraph(
    'The MCP Server provides the following capabilities through AI assistants:'
  );

  yPosition += 5;

  // Create table for capabilities
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

  // ========== SECURITY ==========
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

  addBullet('End-to-End Encryption: All data transmitted between your device and servers is encrypted');
  addBullet('OAuth 2.0 Authentication: Industry-standard secure authentication protocol');
  addBullet('No Data Storage: AI assistants do not store your financial data');
  addBullet('API Key Security: Secure key management and rotation');
  addBullet('SEBI Compliant: Follows all regulatory requirements for trading platforms');
  addBullet('Two-Factor Authentication: Additional security layer for sensitive operations');

  yPosition += 5;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...primaryColor);
  doc.text('Best Practices:', 20, yPosition);
  yPosition += 8;

  addBullet('Never share your API keys or credentials');
  addBullet('Use strong, unique passwords for your account');
  addBullet('Enable two-factor authentication');
  addBullet('Regularly review your connected applications');
  addBullet('Log out from shared or public devices');
  addBullet('Monitor your account for suspicious activity');

  // ========== TROUBLESHOOTING ==========
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
  addBullet('Solution: Use sudo on macOS/Linux, or run Command Prompt as Administrator on Windows');

  yPosition += 5;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...primaryColor);
  doc.text('Connection Issues:', 20, yPosition);
  yPosition += 8;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...textColor);
  doc.text('Problem: AI assistant cannot connect to MCP server', 25, yPosition);
  yPosition += 6;
  doc.setFont('helvetica', 'normal');
  addBullet('Solution: Verify config file location and JSON syntax. Restart AI assistant.');

  doc.setFont('helvetica', 'bold');
  doc.text('Problem: Authentication failed', 25, yPosition);
  yPosition += 6;
  doc.setFont('helvetica', 'normal');
  addBullet('Solution: Re-authenticate using your Motilal Oswal credentials');

  yPosition += 5;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...primaryColor);
  doc.text('For Additional Support:', 20, yPosition);
  yPosition += 8;

  addBullet('Email: query@motilaloswal.com');
  addBullet('Phone: +91 22 6749 0600');
  addBullet('Website: https://www.motilaloswal.com/support');
  addBullet('Documentation: https://docs.motilaloswal.com/mcp-server');

  // ========== FAQ ==========
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

  // ========== FOOTER ON LAST PAGE ==========
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
  yPosition += 5;
  doc.text('For support, visit www.motilaloswal.com or call +91 22 6749 0600', pageWidth / 2, yPosition, { align: 'center' });

  // Add page numbers to all pages
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

  // Save the PDF
  doc.save('Motilal-Oswal-MCP-Server-Documentation.pdf');
}