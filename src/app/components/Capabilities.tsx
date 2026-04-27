import { motion } from 'motion/react';
import { TrendingUp, BarChart3, ShoppingCart, Zap } from 'lucide-react';

export function Capabilities() {
  const capabilities = [
    {
      icon: TrendingUp,
      title: 'AI-Powered Portfolio Intelligence',
      features: [
        'Real-time portfolio health analysis',
        'Sector exposure and risk concentration insights',
        'Performance trend explanations (not just charts)',
        'Tax optimization opportunities',
        'AI-driven rebalancing suggestions',
      ],
      gradient: 'from-[#2B2E8C] to-[#1f2166]',
    },
    {
      icon: BarChart3,
      title: 'Context-Aware Market Intelligence',
      features: [
        'Live market tracking with AI commentary',
        'Technical signals interpreted instantly',
        'Earnings & event impact alerts',
        'Sector momentum analysis',
        'News summarized with portfolio relevance',
      ],
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: ShoppingCart,
      title: 'AI-Assisted Order Execution',
      features: [
        'Place and modify orders using guided prompts',
        'Smart stop-loss and target suggestions',
        'Intelligent order routing insights',
        'Execution summaries in plain language',
      ],
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: Zap,
      title: 'Always-On AI Automation',
      features: [
        'Conditional alerts based on portfolio risk',
        'Auto rebalancing recommendations',
        'SIP monitoring & optimization alerts',
        'Real-time price trigger notifications',
        'Strategy-based signal generation',
      ],
      gradient: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section id="capabilities" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 scroll-mt-32">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What the MO MCP Server Can Do With Your Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From insights to execution, MCP connects intelligence across your entire investment journey. All capabilities are connected through a single AI intelligence layer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${capability.gradient} rounded-xl flex items-center justify-center`}>
                  <capability.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">{capability.title}</h3>
              </div>

              <ul className="space-y-3">
                {capability.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full flex-shrink-0 mt-2" />
                    <span className="text-muted-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}