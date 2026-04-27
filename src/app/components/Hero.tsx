import { motion, AnimatePresence } from 'motion/react';
import { Check, AlertCircle, TrendingUp, TrendingDown, ArrowRight, Home, ChevronRight, Shield, Lock, Activity, Play } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import ClaudeIcon from '../../imports/ClaudeIcon';
import { VideoDialog } from './VideoDialog';

interface ChatMessage {
  user: string;
  ai: string;
  aiType?: 'success' | 'info' | 'warning' | 'analysis';
  stats?: {
    label: string;
    value: string;
    change?: string;
    trend?: 'up' | 'down';
  }[];
  suggestions?: string[];
}

export function Hero() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const chatMessages: ChatMessage[] = [
    {
      user: 'What is my current portfolio value?',
      ai: 'Your portfolio is worth ₹24,56,780 with a gain of +₹2,340 (0.96%) today. Top performers are Reliance and Infosys.',
      aiType: 'success',
      stats: [
        { label: 'Portfolio Value', value: '₹24.56L', change: '+0.96%', trend: 'up' },
        { label: 'Today\'s Gain', value: '₹2,340', trend: 'up' }
      ],
      suggestions: ['View detailed holdings', 'Check sector allocation']
    },
    {
      user: 'Show me my top performing stocks this week',
      ai: 'Here are your best performers: Reliance Industries +12.4% (₹45,600), Infosys +8.7% (₹32,100), HDFC Bank +6.2% (₹28,900)',
      aiType: 'analysis',
      stats: [
        { label: 'Reliance Ind.', value: '₹45,600', change: '+12.4%', trend: 'up' },
        { label: 'Infosys', value: '₹32,100', change: '+8.7%', trend: 'up' }
      ],
      suggestions: ['Sell partial holdings', 'Book profits']
    },
    {
      user: 'What is my P&L this month?',
      ai: 'Monthly P&L: +₹45,230 (1.87%). Realized gains: ₹28,500, Unrealized gains: ₹16,730. Great performance!',
      aiType: 'info',
      stats: [
        { label: 'Monthly P&L', value: '+₹45,230', change: '+1.87%', trend: 'up' },
        { label: 'Realized', value: '₹28,500', trend: 'up' }
      ],
      suggestions: ['View P&L report', 'Tax summary']
    },
    {
      user: 'Should I buy TCS at current price?',
      ai: 'TCS is trading at ₹3,456 (PE: 28.5). Based on your portfolio, it would add tech diversity. Consider 10-15 shares for ₹35K-50K allocation.',
      aiType: 'analysis',
      stats: [
        { label: 'TCS Current', value: '₹3,456', change: '+2.1%', trend: 'up' },
        { label: 'Suggested', value: '10-15 shares' }
      ],
      suggestions: ['Place buy order', 'Set price alert']
    },
    {
      user: 'Any stocks near stop loss?',
      ai: 'Alert: Tata Motors is at ₹623 (stop loss: ₹620). Down 4.2% today. Bharti Airtel stable at ₹845.',
      aiType: 'warning',
      stats: [
        { label: 'Tata Motors', value: '₹623', change: '-4.2%', trend: 'down' },
        { label: 'Stop Loss', value: '₹620', trend: 'down' }
      ],
      suggestions: ['Review position', 'Update stop loss']
    },
    {
      user: 'Buy 5 shares of Reliance at market price',
      ai: 'Order placed successfully! Bought 5 shares of Reliance Industries at ₹2,845 each. Total: ₹14,225. Order ID: #MO789456',
      aiType: 'success',
      stats: [
        { label: 'Shares', value: '5 units' },
        { label: 'Price', value: '₹2,845 each' },
        { label: 'Total', value: '₹14,225' }
      ],
      suggestions: ['View order status', 'Portfolio summary']
    },
  ];

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % chatMessages.length);
        setIsTyping(false);
      }, 600);
    }, 5000);
    return () => clearInterval(messageInterval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentChat = chatMessages[currentMessage];

  return (
    <section className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-blue-50/30 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1280px] mx-auto relative">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-sm mb-8"
          aria-label="Breadcrumb"
        >
          <a href="/" className="flex items-center gap-1.5 text-muted-foreground hover:text-[#2B2E8C] transition-colors">
            <Home className="h-3.5 w-3.5" />
            <span>Home</span>
          </a>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-[#2B2E8C] font-medium">MO MCP Server</span>
        </motion.nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Launch Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-white border-2 rounded-full mb-6 relative"
            >
              {/* Animated Border Gradient */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-75"
                style={{
                  background: 'linear-gradient(90deg, #10b981, #34d399, #10b981, #34d399)',
                  backgroundSize: '200% 100%',
                  padding: '2px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '200% 0%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Pulsing Dot */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                className="w-2.5 h-2.5 bg-green-500 rounded-full relative z-10 shadow-lg shadow-green-500/50"
              >
                {/* Ripple Effect */}
                <motion.div
                  className="absolute inset-0 bg-green-400 rounded-full"
                  animate={{
                    scale: [1, 2.5, 2.5],
                    opacity: [0.6, 0, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: 'easeOut'
                  }}
                />
              </motion.div>

              {/* Text */}
              <span className="text-sm font-medium text-gray-900 relative z-10">
                New Launch — Now Available
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
              <span className="block font-light text-gray-600 text-xl sm:text-2xl lg:text-3xl mb-3 tracking-wide">
                Smarter Investment Decisions Begin with
              </span>
              <span className="block relative">
                <span className="font-black text-[#2B2E8C] tracking-tight italic text-5xl sm:text-6xl lg:text-7xl">
                  MO MCP Server
                </span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="block font-black text-[#2B2E8C] tracking-tight italic text-5xl sm:text-6xl lg:text-7xl mt-1"
                >
                  Intelligence
                  <motion.div
                    className="absolute -bottom-2 left-0 w-32 h-1.5 bg-[#2B2E8C]"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                  />
                </motion.span>
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Connect your MO MCP to AI assistants just once and let AI track your portfolio 24/7 — identify risks, flag opportunities, and answer investment questions instantly. Your data stays secure — AI only reads insights, never executes trades.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-[#2B2E8C] hover:bg-[#1f2166] text-white"
                onClick={() => scrollToSection('device-setup')}
              >
                Start Using AI Insights
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setIsVideoOpen(true)}
              >
                <Play className="mr-2 h-4 w-4" />
                View Video
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Shield className="h-4 w-4 text-[#2B2E8C]" />
                Bank-grade security
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <Lock className="h-4 w-4 text-[#2B2E8C]" />
                Controlled permissions
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <Activity className="h-4 w-4 text-[#2B2E8C]" />
                Monitoring
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Enhanced Animated Chat Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Claude Desktop Interface */}
            <div className="bg-[#1E1E1E] rounded-xl shadow-2xl overflow-hidden border border-gray-700">
              {/* Window Title Bar */}
              <div className="bg-[#2B2B2B] px-4 py-3 flex items-center justify-between border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-gradient-to-br from-[#E07B53] to-[#C25E3A] flex items-center justify-center p-0.5">
                    <ClaudeIcon />
                  </div>
                  <span className="text-sm font-semibold text-gray-200">Claude</span>
                </div>
                <div className="w-[52px]" /> {/* Spacer for alignment */}
              </div>

              {/* Chat Container */}
              <div className="bg-[#1E1E1E] p-6 min-h-[480px] flex flex-col">
                <div className="flex-1 space-y-4 mb-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentMessage}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* User message */}
                      <div className="flex justify-end mb-4">
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-[#2F2F2F] text-gray-100 rounded-2xl rounded-tr-md px-5 py-3 max-w-[85%] shadow-lg border border-gray-700"
                        >
                          <div className="text-sm">{currentChat.user}</div>
                        </motion.div>
                      </div>

                      {/* Typing indicator */}
                      <AnimatePresence>
                        {isTyping && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-start gap-3 mb-4"
                          >
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#E07B53] to-[#C25E3A] flex items-center justify-center flex-shrink-0 mt-1 p-0.5">
                              <ClaudeIcon />
                            </div>
                            <div className="bg-[#2A2A2A] rounded-2xl rounded-tl-md px-5 py-3 border border-gray-700">
                              <div className="flex gap-1.5">
                                <motion.div
                                  animate={{ opacity: [0.3, 1, 0.3] }}
                                  transition={{ repeat: Infinity, duration: 1.2, delay: 0 }}
                                  className="w-2 h-2 bg-gray-500 rounded-full"
                                />
                                <motion.div
                                  animate={{ opacity: [0.3, 1, 0.3] }}
                                  transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }}
                                  className="w-2 h-2 bg-gray-500 rounded-full"
                                />
                                <motion.div
                                  animate={{ opacity: [0.3, 1, 0.3] }}
                                  transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }}
                                  className="w-2 h-2 bg-gray-500 rounded-full"
                                />
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* AI response */}
                      {!isTyping && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="flex items-start gap-3 mb-4"
                        >
                          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#E07B53] to-[#C25E3A] flex items-center justify-center flex-shrink-0 mt-1 p-0.5">
                            <ClaudeIcon />
                          </div>
                          <div className="flex-1">
                            <div className={`rounded-2xl rounded-tl-md px-5 py-3 shadow-lg border max-w-[90%] ${currentChat.aiType === 'success' ? 'bg-[#1A2E1A] border-green-800/50' :
                              currentChat.aiType === 'warning' ? 'bg-[#2E1F1A] border-orange-800/50' :
                                currentChat.aiType === 'analysis' ? 'bg-[#1A1E2E] border-blue-800/50' :
                                  'bg-[#2A2A2A] border-gray-700'
                              }`}>
                              <div className="flex items-start gap-2">
                                {currentChat.aiType === 'success' && <Check className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />}
                                {currentChat.aiType === 'warning' && <AlertCircle className="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0" />}
                                {currentChat.aiType === 'analysis' && <TrendingUp className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />}
                                <p className="text-gray-200 text-sm leading-relaxed">{currentChat.ai}</p>
                              </div>
                            </div>

                            {/* Stats Cards */}
                            {currentChat.stats && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                                className="grid grid-cols-2 gap-2 mt-3 max-w-[90%]"
                              >
                                {currentChat.stats.map((stat, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2, delay: 0.4 + idx * 0.1 }}
                                    className="bg-[#2A2A2A] border border-gray-700 rounded-lg p-3"
                                  >
                                    <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                                    <div className="flex items-center gap-1">
                                      <span className="font-bold text-sm text-gray-100">{stat.value}</span>
                                      {stat.change && (
                                        <span className={`text-xs font-medium flex items-center gap-0.5 ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                                          }`}>
                                          {stat.trend === 'up' ? (
                                            <TrendingUp className="h-3 w-3" />
                                          ) : (
                                            <TrendingDown className="h-3 w-3" />
                                          )}
                                          {stat.change}
                                        </span>
                                      )}
                                    </div>
                                  </motion.div>
                                ))}
                              </motion.div>
                            )}

                            {/* Suggestion Chips */}
                            {currentChat.suggestions && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.6 }}
                                className="flex flex-wrap gap-2 mt-3"
                              >
                                {currentChat.suggestions.map((suggestion, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2, delay: 0.6 + idx * 0.1 }}
                                    className="px-3 py-1.5 bg-[#2F2F2F] border border-gray-600 rounded-full text-xs text-gray-300 font-medium hover:bg-[#3A3A3A] hover:border-gray-500 transition-all cursor-pointer"
                                  >
                                    {suggestion}
                                  </motion.div>
                                ))}
                              </motion.div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Input Area */}
                <div className="border-t border-gray-700 pt-4">
                  <div className="bg-[#2A2A2A] rounded-xl border border-gray-700 p-3 flex items-center gap-3">
                    <input
                      type="text"
                      placeholder="Ask about your portfolio..."
                      className="flex-1 bg-transparent text-sm text-gray-400 outline-none placeholder-gray-600"
                      disabled
                    />
                    <div className="text-xs text-gray-600 px-2 py-1 bg-[#2F2F2F] rounded border border-gray-700">
                      ⌘ ↵
                    </div>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="flex justify-center gap-1.5 mt-4">
                  {chatMessages.map((_, idx) => (
                    <motion.div
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentMessage ? 'w-8 bg-[#E07B53]' : 'w-1.5 bg-gray-700'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating MCP Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -top-3 -left-3 bg-gradient-to-br from-[#2B2E8C] to-[#1f2166] rounded-xl shadow-xl px-4 py-2.5 border border-[#2B2E8C]/30"
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  className="w-2 h-2"
                >
                  <svg viewBox="0 0 24 24" fill="white">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </motion.div>
                <span className="text-xs font-bold text-white">MO MCP Connected</span>
              </div>
            </motion.div>

            {/* Floating Portfolio Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -bottom-3 -right-3 bg-white rounded-xl shadow-xl p-4 border border-gray-200"
            >
              <div className="text-xs text-muted-foreground mb-1">Real-time Portfolio</div>
              <div className="text-2xl font-bold">₹24.5L</div>
              <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
                <TrendingUp className="h-3 w-3" />
                +0.96% today
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Video Dialog */}
      <VideoDialog isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
}