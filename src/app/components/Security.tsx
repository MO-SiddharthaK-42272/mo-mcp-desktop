import { motion } from 'motion/react';
import { Shield, Lock, Eye, Key, CheckCircle, Check, X } from 'lucide-react';

export function Security() {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Secure OAuth Authentication',
      description: 'Connect safely using token-based authentication — your password is never shared or stored.',
    },
    {
      icon: Lock,
      title: 'Bank-Grade Data Encryption',
      description: 'All data is protected using industry-standard SSL/TLS encryption during transmission.',
    },
    {
      icon: Eye,
      title: 'Granular Access Control',
      description: 'Choose exactly what AI can access — with secure, read-only permissions by default.',
    },
    {
      icon: Key,
      title: 'Revoke Access Anytime',
      description: 'Disconnect MCP instantly from your settings — no lock-in, full control.',
    },
  ];

  const trustIndicators = [
    'ISO 27001 Certified',
    'SOC 2 Type II Compliant',
    '256-bit SSL Encryption',
    'GDPR Compliant',
  ];

  const permissions = [
    { feature: 'View portfolio holdings', readOnly: true, trading: true },
    { feature: 'Check account balance', readOnly: true, trading: true },
    { feature: 'Get P&L reports', readOnly: true, trading: true },
    { feature: 'Market data & insights', readOnly: true, trading: true },
    { feature: 'Place buy/sell orders', readOnly: false, trading: true },
    { feature: 'Modify existing orders', readOnly: false, trading: true },
    { feature: 'Access password', readOnly: false, trading: false },
  ];

  return (
    <section id="security" className="py-20 px-4 sm:px-6 lg:px-8 pb-8 bg-gradient-to-br from-gray-50 to-white scroll-mt-32">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full mb-6">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-semibold">Bank-Grade Security</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Your Portfolio Stays Fully<br className="hidden sm:block" /> Protected — Always.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            MO MCP is designed with strict security controls — ensuring your data remains encrypted, read-only, and fully under your control.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#2B2E8C]/30 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Permission Control Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">
              What MO MCP Can — and Cannot — Access
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              The MO MCP Server uses strict permission controls — ensuring AI can only access approved, read-only information unless you explicitly enable trading actions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden border border-gray-200">
            {/* Table Header */}
            <div className="grid grid-cols-[minmax(200px,2fr)_minmax(120px,1fr)_minmax(120px,1fr)] gap-4 px-6 sm:px-8 py-3 bg-gray-50 border-b border-gray-200">
              <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Feature</div>
              <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide text-center">Read-Only</div>
              <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide text-center">Trading Enabled</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-100">
              {permissions.map((permission, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{
                    backgroundColor: 'rgba(43, 46, 140, 0.03)',
                    transition: { duration: 0.2 }
                  }}
                  className="grid grid-cols-[minmax(200px,2fr)_minmax(120px,1fr)_minmax(120px,1fr)] gap-4 px-6 sm:px-8 py-3 items-center cursor-default group"
                >
                  <div className="text-gray-700 text-sm">
                    {permission.feature}
                  </div>
                  <div className="flex justify-center items-center">
                    {permission.readOnly ? (
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center"
                      >
                        <Check className="h-3.5 w-3.5 text-green-600 stroke-[2.5]" />
                      </motion.div>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center"
                      >
                        <X className="h-3.5 w-3.5 text-gray-400 stroke-[2.5]" />
                      </motion.div>
                    )}
                  </div>
                  <div className="flex justify-center items-center">
                    {permission.trading ? (
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center"
                      >
                        <Check className="h-3.5 w-3.5 text-green-600 stroke-[2.5]" />
                      </motion.div>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center"
                      >
                        <X className="h-3.5 w-3.5 text-gray-400 stroke-[2.5]" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-2">Industry-Leading Compliance</h3>
            <p className="text-muted-foreground">Certified and audited by global security standards</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#2B2E8C]/10 to-blue-500/10 rounded-full flex items-center justify-center mb-3">
                  <CheckCircle className="h-8 w-8 text-[#2B2E8C]" />
                </div>
                <p className="text-sm font-medium text-gray-700">{indicator}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}