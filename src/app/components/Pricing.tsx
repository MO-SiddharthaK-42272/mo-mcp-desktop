import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for individual investors',
      features: [
        'Read-only portfolio access',
        'Basic market data',
        'Up to 50 queries per day',
        'ChatGPT integration',
        'Email support',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '₹499',
      period: '/month',
      description: 'For active traders',
      features: [
        'Full trading permissions',
        'Unlimited queries',
        'Real-time market data',
        'All AI assistants supported',
        'Advanced analytics',
        'Priority support',
        'API access',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For institutions and teams',
      features: [
        'Everything in Pro',
        'Multi-account management',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantee',
        'Advanced security controls',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  const scrollToConnect = () => {
    const element = document.getElementById('connect');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your investment style. All plans include bank-grade security.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all hover:shadow-xl ${plan.highlighted
                  ? 'border-[#2B2E8C] shadow-lg scale-105'
                  : 'border-gray-200'
                }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#2B2E8C] to-[#4a4eb8] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${plan.highlighted
                    ? 'bg-[#2B2E8C] hover:bg-[#1f2166]'
                    : ''
                  }`}
                variant={plan.highlighted ? 'default' : 'outline'}
                onClick={scrollToConnect}
              >
                {plan.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm text-muted-foreground"
        >
          <p>
            All plans include 256-bit encryption, OAuth security, and the ability to revoke access anytime.
          </p>
          <p className="mt-2">
            Questions about pricing?{' '}
            <a href="#" className="text-[#2B2E8C] hover:underline">
              Contact our sales team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}