import { motion } from 'motion/react';
import { MessageSquare, LineChart, FileText, Settings, ExternalLink } from 'lucide-react';

export function AdvancedFeatures() {
  // Toggle to hide/show strategy builder section (currently hidden until feature is live)
  const showStrategyBuilder = false;

  const features = [
    {
      icon: MessageSquare,
      title: 'Conversational Strategy Builder',
      description: 'Multileg Strategy upto 8 Legs auto trade mode',
    },
    {
      icon: LineChart,
      title: 'Live Payoff Analyzer & Greeks Display',
      description: 'Real-time Greeks Display per Strategy',
    },
    {
      icon: FileText,
      title: '24+ Prebuilt Strategy Templates',
      description: 'Ready-to-use strategies for quick deployment',
    },
    {
      icon: Settings,
      title: 'Runtime Strategy Adjustments',
      description: 'Live Position vs. Target Tracking',
    },
  ];

  return (
    <section className={`${showStrategyBuilder ? 'py-20' : 'py-8'} px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white`}>
      <div className="max-w-[1280px] mx-auto">
        {showStrategyBuilder && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Build Strategies. Automate Trades. Execute via MO MCP
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Advanced capabilities designed to elevate your trading experience
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-[#2B2E8C] rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`text-center ${showStrategyBuilder ? 'mt-12' : 'mt-0'}`}
        >
          <motion.a
            href="claude://open"
            onClick={() => {
              // Attempt to open Claude Desktop app
              window.location.href = 'claude://open';
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#2B2E8C] text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            Try now in Claude Desktop
            <ExternalLink className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}