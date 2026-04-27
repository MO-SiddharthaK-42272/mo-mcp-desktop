import { motion } from 'motion/react';
import { useState } from 'react';
import { Shield, TrendingUp, Rocket, Plus, Minus } from 'lucide-react';
import { PDFViewerDialog } from './PDFViewerDialog';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  faqs: FAQItem[];
}

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>('security');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);
  const [showPDFModal, setShowPDFModal] = useState(false);

  const categories: FAQCategory[] = [
    {
      id: 'security',
      title: 'Security & Privacy',
      description: 'Your data protection and account safety',
      icon: <Shield className="w-6 h-6" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      faqs: [
        {
          question: 'Is it safe to connect my account?',
          answer: 'Yes, absolutely. We use OAuth-based authentication (the same technology used by Google and Facebook). We never store your password, and all data is encrypted with 256-bit SSL. You can revoke access anytime from your account settings.',
        },
        {
          question: 'How do permissions work?',
          answer: 'You choose between read-only access (view portfolio data) or trading permissions (AI can place orders). All permissions are granted via OAuth - we never store your password. You can revoke access instantly from your account settings.',
        },
        {
          question: 'What data do you access?',
          answer: 'We only access what you explicitly authorize. For read-only: portfolio holdings, P&L, account balance. For trading: ability to place and modify orders. We NEVER access your password, linked bank accounts, or personal documents.',
        },
        {
          question: 'What happens to my data?',
          answer: 'Your data is encrypted in transit and at rest. We only access what you authorize, and we never sell your data to third parties. All data handling complies with Indian data protection regulations.',
        },
      ],
    },
    {
      id: 'trading',
      title: 'Trading & Permissions',
      description: 'Control over AI trading capabilities',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      faqs: [
        {
          question: 'Can the AI place trades without my permission?',
          answer: 'Only if you explicitly grant trading permissions. By default, AI has read-only access. Even with trading permissions enabled, you maintain full control and can set limits, approve orders, or revoke access at any time.',
        },
        {
          question: 'How do I revoke access?',
          answer: 'You can revoke access instantly from your Motilal Oswal account settings under "Connected Apps" or from our dashboard. Once revoked, AI assistants immediately lose all access to your account.',
        },
        {
          question: 'Can I set trading limits?',
          answer: 'Yes! You can configure maximum order sizes, daily limits, and restrict trading to specific stocks or sectors. All limits are enforced before any order is placed.',
        },
        {
          question: 'What if an AI makes a mistake?',
          answer: 'You can cancel any pending order instantly. For executed trades, standard broker policies apply. We recommend starting with read-only access and small limits when enabling trading.',
        },
      ],
    },
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Setup, compatibility, and first steps',
      icon: <Rocket className="w-6 h-6" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      faqs: [
        {
          question: 'What AI assistants are supported?',
          answer: 'We support Claude, and other major AI platforms. We also provide API access for custom integrations. New assistants are added regularly based on user demand.',
        },
        {
          question: 'Is there a free trial?',
          answer: 'Yes! The MCP Server is completely free for all Motilal Oswal trading account holders. No trial period, no hidden fees - just connect and start using it.',
        },
        {
          question: 'Do I need a Motilal Oswal account?',
          answer: 'Yes, you need an active trading and demat account with Motilal Oswal. If you don\'t have one, you can open an account on our website in minutes.',
        },
        {
          question: 'How long does setup take?',
          answer: 'Setup takes about 5-10 minutes. Install the MCP server, configure your AI assistant, and you\'re ready to go. Our step-by-step guide walks you through the entire process.',
        },
        {
          question: 'Can I use it on mobile?',
          answer: 'Currently, the MCP Server works with desktop AI assistants on macOS, Windows, and Linux. Mobile support is coming soon based on AI platform updates.',
        },
      ],
    },
  ];

  const activeData = categories.find(cat => cat.id === activeCategory) || categories[0];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const connectSection = document.getElementById('connect');
    if (connectSection) {
      connectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDocumentationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPDFModal(true);
  };

  return (
    <>
      <section id="faq" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 scroll-mt-32">
        <div className="max-w-[1280px] mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about the Motilal Oswal MCP Server
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                onClick={() => {
                  setActiveCategory(category.id);
                  setExpandedFAQ(0);
                }}
                className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${activeCategory === category.id
                    ? `${category.bgColor} ${category.borderColor} shadow-lg scale-[1.02]`
                    : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
              >
                <div className={`${activeCategory === category.id ? category.color : 'text-gray-400'} mb-2 transition-colors`}>
                  {category.icon}
                </div>
                <h3 className={`font-bold text-sm mb-1 transition-colors ${activeCategory === category.id ? 'text-gray-900' : 'text-gray-700'
                  }`}>
                  {category.title}
                </h3>
                <p className={`text-xs transition-colors ${activeCategory === category.id ? 'text-gray-600' : 'text-gray-500'
                  }`}>
                  {category.description}
                </p>
                <div className={`mt-2 text-xs font-medium transition-colors ${activeCategory === category.id ? category.color : 'text-gray-400'
                  }`}>
                  {category.faqs.length} questions
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* FAQ List */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-3">
              {activeData.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  className={`bg-white rounded-xl border-2 overflow-hidden transition-all duration-300 ${expandedFAQ === index
                      ? `${activeData.borderColor} shadow-lg`
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-start justify-between text-left gap-4"
                  >
                    <span className="font-semibold text-gray-900 flex-1">
                      {faq.question}
                    </span>
                    <span className={`shrink-0 mt-1 ${activeData.color} transition-transform duration-300 ${expandedFAQ === index ? 'rotate-180' : ''
                      }`}>
                      {expandedFAQ === index ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedFAQ === index ? 'auto' : 0,
                      opacity: expandedFAQ === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className={`px-6 pb-5 text-gray-600 leading-relaxed ${activeData.bgColor}/30 border-t ${activeData.borderColor}`}>
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative text-center mt-12 p-8 bg-gradient-to-r from-[#2B2E8C]/5 to-blue-500/5 rounded-2xl border border-[#2B2E8C]/10 overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="faq-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1.5" fill="#2B2E8C" />
                    <circle cx="0" cy="0" r="1.5" fill="#2B2E8C" />
                    <circle cx="40" cy="0" r="1.5" fill="#2B2E8C" />
                    <circle cx="0" cy="40" r="1.5" fill="#2B2E8C" />
                    <circle cx="40" cy="40" r="1.5" fill="#2B2E8C" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#faq-grid)" />
              </svg>
            </div>

            <div className="relative z-10">
              <p className="text-gray-700 mb-4">
                Still have questions?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#2B2E8C] text-white font-medium rounded-lg hover:bg-[#1f2166] transition-colors"
                  onClick={handleContactClick}
                >
                  Contact Support
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#2B2E8C] text-[#2B2E8C] font-medium rounded-lg hover:bg-[#2B2E8C]/5 transition-colors"
                  onClick={handleDocumentationClick}
                >
                  View Documentation →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PDF Documentation Modal */}
      <PDFViewerDialog
        isOpen={showPDFModal}
        onClose={() => setShowPDFModal(false)}
      />
    </>
  );
}