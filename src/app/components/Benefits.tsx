import { motion } from 'motion/react';
import { MessageCircle, Zap, Lock, Shield } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: MessageCircle,
      title: 'Just Ask. Get Instant Answers.',
      description: 'No dashboards, no searching — simply ask AI about your investments and get clear insights instantly.',
      gradient: 'from-[#2B2E8C] to-[#1f2166]',
    },
    {
      icon: Zap,
      title: 'Stay Ahead with Real-Time Intelligence',
      description: 'AI continuously tracks your portfolio to alert you about risks, opportunities, and market movements.',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Lock,
      title: 'Full Control. Zero Compromise.',
      description: 'You decide what AI can access — with read-only permissions and complete transparency.',
      gradient: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Invest smarter with MO MCP that works alongside you.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get real-time portfolio awareness, instant answers, and full control — without compromising security.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 h-full hover:shadow-xl transition-all hover:border-blue-200">
                <div className={`w-14 h-14 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#2B2E8C]/5 via-blue-500/5 to-purple-500/5 rounded-xl border border-[#2B2E8C]/10">
            <Shield className="h-5 w-5 text-[#2B2E8C]" />
            <p className="text-sm text-gray-700 font-medium">
              Trusted by thousands of Motilal Oswal investors with 100% secure infrastructure.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}