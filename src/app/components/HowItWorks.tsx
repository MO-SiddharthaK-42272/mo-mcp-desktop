import { motion } from 'motion/react';
import { Sparkles, Shield, ArrowRight, CheckCircle2, Lock, Zap, TrendingUp } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Lock,
      step: '01',
      title: 'Connect Your Portfolio Securely',
      description: 'Link your Motilal Oswal account in seconds using safe, read-only access.',
      details: [
        'Bank-grade encryption',
        'You control permissions',
        'No passwords stored'
      ],
      color: 'from-[#2B2E8C] to-[#1f2166]',
      bgColor: 'bg-blue-50',
      iconColor: 'text-[#2B2E8C]',
      bgGradient: 'from-blue-500/10 to-[#2B2E8C]/10',
      accentColor: '#2B2E8C',
    },
    {
      icon: Zap,
      step: '02',
      title: 'Choose Your AI Assistant',
      description: 'Pick your preferred AI and connect it instantly to your portfolio insights.',
      details: [
        'Works with popular AI tools',
        'One-click setup',
        'Ready in minutes'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      bgGradient: 'from-purple-500/10 to-purple-600/10',
      accentColor: '#9333ea',
    },
    {
      icon: TrendingUp,
      step: '03',
      title: 'Ask Questions & Get Smart Insights',
      description: 'Use natural language to monitor risks, discover opportunities, and make informed decisions.',
      details: [
        'Real-time portfolio tracking',
        'Instant risk alerts',
        'AI-powered investment insights'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      bgGradient: 'from-green-500/10 to-green-600/10',
      accentColor: '#16a34a',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden scroll-mt-32">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#2B2E8C]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1280px] mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#2B2E8C]/10 rounded-full mb-6"
          >
            <Sparkles className="h-4 w-4 text-[#2B2E8C]" />
            <span className="text-sm font-medium text-[#2B2E8C]">Simple Setup Process</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Start using MO MCP for your investments{' '}
            <span className="bg-gradient-to-r from-[#2B2E8C] to-blue-600 bg-clip-text text-transparent">
              in under 5 minutes.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No complex setup — just connect once and let AI track your portfolio 24/7
          </p>
        </motion.div>

        {/* Steps - Enhanced Design with Better Visuals */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="relative group h-full"
                >
                  {/* Subtle Gradient Border on Hover */}
                  <div className={`absolute -inset-[1px] bg-gradient-to-br ${step.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Main Card */}
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-xl transition-all duration-300 h-full border border-gray-100 overflow-hidden">
                    {/* Top Accent Bar */}
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl z-10"
                      style={{
                        background: `linear-gradient(to right, ${index === 0 ? '#2B2E8C, #1f2166' :
                          index === 1 ? '#a855f7, #9333ea' :
                            '#22c55e, #16a34a'
                          })`,
                        transformOrigin: 'left'
                      }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.5, ease: "easeOut" }}
                    />

                    {/* Subtle Background Gradient */}
                    <div className="absolute top-0 right-0 w-40 h-40 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
                      <div className={`w-full h-full bg-gradient-to-br ${step.color} rounded-full blur-3xl`} />
                    </div>

                    {/* Step Number Badge - Subtle Design */}
                    <div className="absolute top-4 right-4">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm`}>
                        <span className="text-xs font-medium text-gray-500">Step</span>
                        <span className={`text-sm font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>{step.step}</span>
                      </div>
                    </div>

                    {/* Icon Container */}
                    <div className="flex justify-center mb-6 mt-6">
                      <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <step.icon className="h-10 w-10 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900 text-center leading-tight px-2 min-h-[64px] flex items-center justify-center">
                        {step.title}
                      </h3>
                      <p className="text-base text-gray-600 text-center leading-relaxed px-2 min-h-[72px]">
                        {step.description}
                      </p>

                      {/* Divider */}
                      <div className="flex justify-center py-2">
                        <motion.div
                          className={`h-0.5 w-12 rounded-full bg-gradient-to-r ${step.color} opacity-40`}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                        />
                      </div>

                      {/* Details List */}
                      <div className="space-y-3 pt-2">
                        {step.details.map((detail, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + idx * 0.05, duration: 0.4, ease: "easeOut" }}
                          >
                            <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm`}>
                              <CheckCircle2 className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-sm text-gray-700 font-medium leading-relaxed flex-1">
                              {detail}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Connector Arrow */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden md:flex absolute top-1/2 -right-8 lg:-right-10 z-20 items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="w-12 h-12 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center">
                      <ArrowRight className="h-5 w-5 text-[#2B2E8C]" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#2B2E8C]/5 via-blue-500/5 to-purple-500/5 rounded-xl border border-[#2B2E8C]/10">
            <Shield className="h-5 w-5 text-[#2B2E8C]" />
            <p className="text-sm text-gray-700 font-medium italic">
              Your portfolio access is read-only — you can disconnect anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}