import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function DemoSection() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'ai'; content: string }>>([
    { role: 'ai', content: 'Hi! I\'m your investment assistant. Try asking me about your portfolio!' },
  ]);

  const sampleQueries = [
    'What is my current portfolio value?',
    'Show me my top performing stocks',
    'What stocks should I consider?',
    'Give me a summary of today\'s market',
  ];

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { role: 'user', content: message }]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const responses: { [key: string]: string } = {
        'What is my current portfolio value?': 'Your current portfolio value is ₹24,56,780 with a gain of +₹2,340 (0.96%) today. Great performance!',
        'Show me my top performing stocks': 'Your top performers: 1) Reliance Industries: +12.4% | 2) Infosys: +8.7% | 3) HDFC Bank: +6.2%',
        'What stocks should I consider?': 'Based on your portfolio and risk profile, consider diversifying into IT sector stocks like TCS or financial services.',
        'Give me a summary of today\'s market': 'Markets are up today. Nifty 50 +0.8%, Bank Nifty +1.2%. IT and Banking sectors leading the gains.',
      };

      const response = responses[message] || 'I can help you with portfolio insights, market data, and investment queries. Try one of the suggested questions!';
      setMessages((prev) => [...prev, { role: 'ai', content: response }]);
    }, 1000);
  };

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Interactive Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Try It Yourself
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the power of conversational investing. This demo uses sample data.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Chat interface */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#2B2E8C] to-[#4a4eb8] text-white px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Investment Assistant</h3>
                  <p className="text-xs text-white/80">Demo Mode • Sample Data</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-[400px] overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${message.role === 'user'
                        ? 'bg-[#2B2E8C] text-white rounded-tr-sm'
                        : 'bg-gray-100 text-gray-900 rounded-tl-sm'
                      }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sample queries */}
            <div className="px-6 pb-4">
              <p className="text-xs text-muted-foreground mb-2">Try asking:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {sampleQueries.map((query, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(query)}
                    className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-full text-xs text-blue-700 transition-colors"
                  >
                    {query}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage(input);
                    }
                  }}
                  placeholder="Ask about your portfolio..."
                  className="flex-1"
                />
                <Button
                  onClick={() => handleSendMessage(input)}
                  className="bg-gradient-to-r from-[#2B2E8C] to-[#4a4eb8] hover:from-[#1f2166] hover:to-[#2B2E8C]"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Ready to connect your real account?{' '}
            <button
              onClick={() => {
                const element = document.getElementById('connect');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[#2B2E8C] font-medium hover:underline"
            >
              Get started →
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}