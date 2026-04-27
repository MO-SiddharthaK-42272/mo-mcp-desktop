import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Zap } from 'lucide-react';
import { Button } from './ui/button';

export function ConnectSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="connect"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 scroll-mt-32"
    >
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2B2E8C] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageSquare className="h-4 w-4" />
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Start Using MO MCP Intelligence on Your Portfolio Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Activate MO MCP to start receiving real-time insights, risk alerts, and intelligent portfolio guidance.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Email Card */}
          <motion.a
            href="mailto:query@motilaloswal.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#2B2E8C] transition-all shadow-sm hover:shadow-xl cursor-pointer"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-[#2B2E8C] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="h-7 w-7 text-white" />
            </div>
            <h4 className="font-bold text-lg mb-2">Email Us</h4>
            <p className="text-sm text-[#2B2E8C] font-medium mb-2">
              query@motilaloswal.com
            </p>
            <p className="text-xs text-muted-foreground">
              Response within 24 hours
            </p>
          </motion.a>

          {/* Phone Card */}
          <motion.a
            href="tel:+912267490600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#2B2E8C] transition-all shadow-sm hover:shadow-xl cursor-pointer"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="h-7 w-7 text-white" />
            </div>
            <h4 className="font-bold text-lg mb-2">Call Us</h4>
            <p className="text-sm text-[#2B2E8C] font-medium mb-2">
              +91 22 6749 0600
            </p>
            <p className="text-xs text-muted-foreground">
              Mon-Fri, 9 AM - 6 PM IST
            </p>
          </motion.a>

          {/* Office Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#2B2E8C] transition-all shadow-sm hover:shadow-xl"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Clock className="h-7 w-7 text-white" />
            </div>
            <h4 className="font-bold text-lg mb-2">Support Hours</h4>
            <p className="text-sm text-gray-700 mb-1">
              Mon-Fri: 9 AM - 6 PM
            </p>
            <p className="text-xs text-muted-foreground">
              Sat: 9 AM - 1 PM IST
            </p>
          </motion.div>

          {/* Office Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -4 }}
            className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#2B2E8C] transition-all shadow-sm hover:shadow-xl"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="h-7 w-7 text-white" />
            </div>
            <h4 className="font-bold text-lg mb-2">Head Office</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Motilal Oswal Tower, Mumbai
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Maharashtra - 400025
            </p>
          </motion.div>
        </div>

        {/* Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-12"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('device-setup')}
            className="bg-gradient-to-r from-[#2B2E8C] to-blue-600 hover:from-[#1f2166] hover:to-blue-700 text-white font-bold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            <Zap className="mr-2 h-6 w-6" />
            Activate MO MCP Now
          </Button>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-br from-[#2B2E8C] to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Need Help Connecting MO MCP? Our Experts Can Assist.
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get guidance on setup, configuration, or integrating MO MCP with your AI workflow.
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection('connect')}
            className="bg-white text-[#2B2E8C] hover:bg-gray-100 font-semibold"
          >
            <Send className="mr-2 h-5 w-5" />
            Get Setup Assistance
          </Button>
        </motion.div>
      </div>
    </section>
  );
}