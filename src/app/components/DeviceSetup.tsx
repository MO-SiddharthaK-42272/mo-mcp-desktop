import { motion } from 'motion/react';
import { Monitor, Apple, Download, Terminal, CheckCircle2, Copy, BookOpen, MessageCircle, ArrowRight, ChevronRight, FileDown, Shield, Sparkles, Package, Eye } from 'lucide-react';
import { useState } from 'react';
import { PDFViewerDialog } from './PDFViewerDialog';
import { ImageZoomDialog } from './ImageZoomDialog';
import { YouTubePlayerDialog } from './YouTubePlayerDialog';
import { ClaudeDesktopInstallIllustration, DownloadConfigIllustration, AuthenticationIllustration, YouTubeVideoIllustration } from './DeviceSetupIllustrations';
import claudeDesktopScreenshot from '../../assets/c7d8101be1b09f087318fac8f67b794e9d0d1ef3.png';

export function DeviceSetup() {
  const [activeTab, setActiveTab] = useState<'mac' | 'windows' | 'linux'>('windows');
  const [copiedStep, setCopiedStep] = useState<number | null>(null);
  const [showPDFModal, setShowPDFModal] = useState(false);
  const [showImageZoom, setShowImageZoom] = useState(false);
  const [showYouTubeModal, setShowYouTubeModal] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [setupComplete, setSetupComplete] = useState(false);

  const handleCopy = (text: string, stepIndex: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const handleViewDocumentation = () => {
    setShowPDFModal(true);
  };

  const handleContactSupport = () => {
    const connectSection = document.getElementById('connect');
    if (connectSection) {
      connectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const devices = [
    {
      id: 'windows' as const,
      name: 'Windows',
      icon: Monitor,
      requirements: 'Windows 10/11 (64-bit)',
      steps: [
        {
          title: 'Install Claude Desktop',
          description: 'Download and install Claude Desktop for Windows:',
          code: 'https://claude.com/download',
          isPath: true,
          visual: {
            icon: Download,
            image: ClaudeDesktopInstallIllustration,
            color: 'from-blue-100 to-blue-200',
          },
        },
        {
          title: 'Download Configuration File',
          description: 'Download the "claude_desktop_config.json" file and replace the default Claude Desktop config file (in Settings > Developer) with our file:',
          code: 'Settings > Developer > claude_desktop_config.json',
          isPath: true,
          visual: {
            icon: FileDown,
            image: DownloadConfigIllustration,
            color: 'from-slate-100 to-slate-200',
          },
        },
        {
          title: 'Verify Configuration',
          description: 'When you open Settings > Developer now, you should see the following -',
          code: 'Check that MO-TRADING server appears in your MCP servers list',
          isPath: true,
          screenshot: claudeDesktopScreenshot,
          visual: {
            icon: Eye,
            image: null,
            color: 'from-purple-100 to-purple-200',
          },
        },
        {
          title: 'Install Node.js & NPM Package',
          description: 'Watch our step-by-step video tutorial showing how to install Node.js and the required NPM package:',
          code: '# install node using the instructions on the left\n# then, run the following command –\nnpm install mo-mcp-bridge',
          isPath: false,
          videoTimestamps: {
            windows: '5:36 - 8:00',
            mac: '0:46 - 3:12',
            linux: '0:46 - 3:12'
          },
          visual: {
            icon: Package,
            image: YouTubeVideoIllustration,
            color: 'from-red-50 to-red-100',
          },
        },
        {
          title: 'Authenticate with Claude',
          description: 'Ask a query about your portfolio on Claude. Claude will initiate a broker login flow. Authenticate with your credentials:',
          code: 'Example: "What is my current portfolio value?"',
          isPath: true,
          visual: {
            icon: Shield,
            image: AuthenticationIllustration,
            color: 'from-gray-100 to-gray-200',
          },
        },
      ],
    },
    {
      id: 'mac' as const,
      name: 'macOS',
      icon: Apple,
      requirements: 'macOS 11.0 or later',
      steps: [
        {
          title: 'Install Claude Desktop',
          description: 'Download and install Claude Desktop for macOS:',
          code: 'https://claude.com/download',
          isPath: true,
          visual: {
            icon: Download,
            image: ClaudeDesktopInstallIllustration,
            color: 'from-blue-100 to-blue-200',
          },
        },
        {
          title: 'Download Configuration File',
          description: 'Download the "claude_desktop_config.json" file and replace the default Claude Desktop config file (in Settings > Developer) with our file:',
          code: '~/Library/Application Support/Claude/claude_desktop_config.json',
          isPath: true,
          visual: {
            icon: FileDown,
            image: DownloadConfigIllustration,
            color: 'from-slate-100 to-slate-200',
          },
        },
        {
          title: 'Verify Configuration',
          description: 'When you open Settings > Developer now, you should see the following -',
          code: 'Check that MO-TRADING server appears in your MCP servers list',
          isPath: true,
          screenshot: claudeDesktopScreenshot,
          visual: {
            icon: Eye,
            image: null,
            color: 'from-purple-100 to-purple-200',
          },
        },
        {
          title: 'Install Node.js & NPM Package',
          description: 'Watch our step-by-step video tutorial showing how to install Node.js and the required NPM package:',
          code: '# install node using the instructions on the left\n# then, run the following command –\nnpm install mo-mcp-bridge',
          isPath: false,
          videoTimestamps: {
            windows: '5:36 - 8:00',
            mac: '0:46 - 3:12',
            linux: '0:46 - 3:12'
          },
          visual: {
            icon: Package,
            image: YouTubeVideoIllustration,
            color: 'from-red-50 to-red-100',
          },
        },
        {
          title: 'Authenticate with Claude',
          description: 'Ask a query about your portfolio on Claude. Claude will initiate a broker login flow. Authenticate with your credentials:',
          code: 'Example: "What is my current portfolio value?"',
          isPath: true,
          visual: {
            icon: Shield,
            image: AuthenticationIllustration,
            color: 'from-gray-100 to-gray-200',
          },
        },
      ],
    },
    {
      id: 'linux' as const,
      name: 'Linux',
      icon: Terminal,
      requirements: 'Ubuntu 20.04+, Debian, Fedora, or similar',
      steps: [
        {
          title: 'Install Claude Desktop',
          description: 'Download and install Claude Desktop for Linux:',
          code: 'https://github.com/aaddrick/claude-desktop-debian#Installation',
          isPath: true,
          visual: {
            icon: Download,
            image: ClaudeDesktopInstallIllustration,
            color: 'from-blue-100 to-blue-200',
          },
        },
        {
          title: 'Download Configuration File',
          description: 'Download the "claude_desktop_config.json" file and replace the default Claude Desktop config file (in Settings > Developer) with our file:',
          code: '~/.config/Claude/claude_desktop_config.json',
          isPath: true,
          visual: {
            icon: FileDown,
            image: DownloadConfigIllustration,
            color: 'from-slate-100 to-slate-200',
          },
        },
        {
          title: 'Verify Configuration',
          description: 'When you open Settings > Developer now, you should see the following -',
          code: 'Check that MO-TRADING server appears in your MCP servers list',
          isPath: true,
          screenshot: claudeDesktopScreenshot,
          visual: {
            icon: Eye,
            image: null,
            color: 'from-purple-100 to-purple-200',
          },
        },
        {
          title: 'Install Node.js & NPM Package',
          description: 'Watch our step-by-step video tutorial showing how to install Node.js and the required NPM package:',
          code: '# install node using the instructions on the left\n# then, run the following command –\nnpm install mo-mcp-bridge',
          isPath: false,
          videoTimestamps: {
            windows: '5:36 - 8:00',
            mac: '0:46 - 3:12',
            linux: '0:46 - 3:12'
          },
          visual: {
            icon: Package,
            image: YouTubeVideoIllustration,
            color: 'from-red-50 to-red-100',
          },
        },
        {
          title: 'Authenticate with Claude',
          description: 'Ask a query about your portfolio on Claude. Claude will initiate a broker login flow. Authenticate with your credentials:',
          code: 'Example: "What is my current portfolio value?"',
          isPath: true,
          visual: {
            icon: Shield,
            image: AuthenticationIllustration,
            color: 'from-gray-100 to-gray-200',
          },
        },
      ],
    },
  ];

  const activeDevice = devices.find((d) => d.id === activeTab)!;

  return (
    <section id="device-setup" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 scroll-mt-32">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2B2E8C] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Download className="h-4 w-4" />
            Platform Support
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Set Up the MO MCP Server in Minutes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with Motilal Oswal MCP Server on macOS, Windows, or Linux in just a few minutes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-gray-100 rounded-xl p-1">
            {devices.map((device) => {
              const Icon = device.icon;
              const isActive = activeTab === device.id;
              
              // Determine which icon to show
              let iconElement;
              if (device.id === 'mac') {
                iconElement = (
                  <img 
                    src={isActive ? '/apple 2.svg' : '/apple 1.svg'} 
                    alt="macOS" 
                    className="h-5 w-5"
                  />
                );
              } else if (device.id === 'linux') {
                iconElement = (
                  <img 
                    src={isActive ? '/layer1-1.svg' : '/layer1.svg'} 
                    alt="Linux" 
                    className="h-5 w-5"
                  />
                );
              } else {
                iconElement = <Icon className="h-5 w-5" />;
              }
              
              return (
                <button
                  key={device.id}
                  onClick={() => setActiveTab(device.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${isActive
                    ? 'bg-white text-[#2B2E8C] shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  {iconElement}
                  {device.name}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Setup Instructions */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          {/* Requirements */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
            <p className="text-sm text-blue-800">
              <strong>System Requirements:</strong> {activeDevice.requirements}
            </p>
          </div>

          {/* Installation Steps */}
          <div className="space-y-6">
            {activeDevice.steps.map((step, index) => {
              const StepIcon = step.visual.icon;
              return (
                <div key={index} id={`step-${activeTab}-${index}`} className="scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                    onMouseEnter={() => setActiveStep(index)}
                    onViewportEnter={() => {
                      if (index === 3) {
                        setSetupComplete(true);
                      }
                    }}
                    viewport={{ once: true, amount: 0.6 }}
                  >
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Visual Side - Left */}
                      <div className={`relative overflow-hidden bg-gradient-to-br ${step.visual.color} p-12 flex items-center justify-center min-h-[400px]`}>
                        {/* Render Screenshot or Illustration Component */}
                        {step.screenshot ? (
                          <motion.div
                            className="relative cursor-pointer group/screenshot"
                            onClick={() => setShowImageZoom(true)}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          >
                            <img
                              src={step.screenshot}
                              alt={step.title}
                              className="rounded-xl shadow-2xl max-w-full h-auto transition-shadow group-hover/screenshot:shadow-3xl"
                            />
                            {/* Zoom Indicator Overlay */}
                            <motion.div
                              className="absolute inset-0 bg-black/0 group-hover/screenshot:bg-black/20 rounded-xl flex items-center justify-center transition-all"
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                            >
                              <motion.div
                                className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl opacity-0 group-hover/screenshot:opacity-100 transition-opacity"
                                whileHover={{ scale: 1.1 }}
                              >
                                <Eye className="h-6 w-6 text-gray-700" />
                              </motion.div>
                            </motion.div>
                          </motion.div>
                        ) : (
                          <>
                            {index === 0 && <ClaudeDesktopInstallIllustration index={index} isActive={activeStep === index} deviceType={activeTab} />}
                            {index === 1 && <DownloadConfigIllustration index={index} isActive={activeStep === index} />}
                            {index === 3 && <YouTubeVideoIllustration index={index} isActive={activeStep === index} onYouTubeClick={() => setShowYouTubeModal(true)} />}
                            {index === 4 && <AuthenticationIllustration index={index} isActive={activeStep === index} />}
                          </>
                        )}

                        {/* Step Number Badge */}
                        <motion.div
                          className="absolute top-8 left-8 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl z-20"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.15 + 0.3, type: "spring" }}
                        >
                          <span className="text-3xl font-bold text-gray-700">
                            {index + 1}
                          </span>
                        </motion.div>
                      </div>

                      {/* Content Side - Right */}
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex items-start gap-3 mb-4">
                          <motion.div
                            className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center flex-shrink-0"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                          >
                            <StepIcon className="h-5 w-5 text-white" />
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                              {step.title}
                              {index === 4 ? (
                                // Celebration animation for final step
                                <motion.div
                                  className="relative"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                                >
                                  <motion.div
                                    className="relative flex items-center justify-center"
                                    animate={{
                                      rotate: [0, 10, -10, 10, 0],
                                    }}
                                    transition={{
                                      duration: 0.6,
                                      repeat: Infinity,
                                      repeatDelay: 2,
                                    }}
                                  >
                                    <Sparkles className="h-6 w-6 text-yellow-500 fill-yellow-400" />
                                  </motion.div>

                                  {/* Confetti particles */}
                                  {[...Array(8)].map((_, i) => (
                                    <motion.div
                                      key={i}
                                      className="absolute w-1.5 h-1.5 rounded-full"
                                      style={{
                                        background: ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899'][i % 6],
                                        left: '50%',
                                        top: '50%',
                                      }}
                                      animate={{
                                        x: [0, Math.cos(i * 45 * Math.PI / 180) * 25],
                                        y: [0, Math.sin(i * 45 * Math.PI / 180) * 25],
                                        opacity: [1, 0],
                                        scale: [1, 0.5],
                                      }}
                                      transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        repeatDelay: 1.5,
                                        delay: index * 0.1 + 0.5 + (i * 0.1),
                                      }}
                                    />
                                  ))}
                                </motion.div>
                              ) : (
                                // Green checkmark for other steps
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: index * 0.1 + 0.5 }}
                                >
                                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                                </motion.div>
                              )}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        {/* Code Block */}
                        <div className="relative group/code mt-4">
                          <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm text-blue-300 relative overflow-hidden">
                            {/* Animated Background Effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                              animate={{
                                x: ['0%', '100%'],
                                opacity: [0, 0.5, 0],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            />

                            <code className={`relative z-10 ${index === 3 ? 'whitespace-pre-wrap' : 'whitespace-nowrap overflow-x-auto'} block`}>{step.code}</code>

                            {/* Copy Button */}
                            <motion.button
                              onClick={() => handleCopy(step.code, index)}
                              className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg opacity-0 group-hover/code:opacity-100 transition-all"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              title="Copy to clipboard"
                            >
                              {copiedStep === index ? (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ type: "spring" }}
                                >
                                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                                </motion.div>
                              ) : (
                                <Copy className="h-4 w-4 text-gray-300" />
                              )}
                            </motion.button>
                          </div>

                          {/* Video Timestamps (only for step 3 - merged Node.js & NPM Package) */}
                          {index === 3 && step.videoTimestamps && (
                            <motion.div
                              className="mt-4 bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-xl p-4"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 + 0.7 }}
                            >
                              <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                <Package className="h-4 w-4 text-red-600" />
                                Video Timestamps by Platform:
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div className="flex items-center gap-2 text-sm">
                                  <Terminal className="h-4 w-4 text-orange-600 flex-shrink-0" />
                                  <div>
                                    <div className="font-medium text-gray-900">Linux</div>
                                    <div className="text-xs text-gray-600">{step.videoTimestamps.linux}</div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <Apple className="h-4 w-4 text-gray-700 flex-shrink-0" />
                                  <div>
                                    <div className="font-medium text-gray-900">macOS</div>
                                    <div className="text-xs text-gray-600">{step.videoTimestamps.mac}</div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <Monitor className="h-4 w-4 text-blue-600 flex-shrink-0" />
                                  <div>
                                    <div className="font-medium text-gray-900">Windows</div>
                                    <div className="text-xs text-gray-600">{step.videoTimestamps.windows}</div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}

                          {/* Hint Text */}
                          <motion.p
                            className="text-xs text-muted-foreground mt-2 flex items-center gap-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.6 }}
                          >
                            <ArrowRight className="h-3 w-3" />
                            {index === 0 && 'Download and install Claude Desktop to get started'}
                            {index === 1 && 'Replace the default config file with the MO MCP configuration'}
                            {index === 2 && 'Verify that the MO-TRADING server appears in your settings'}
                            {index === 3 && 'Watch the video tutorial to install Node.js and the NPM package'}
                            {index === 4 && 'Start using Claude to interact with your portfolio data'}
                          </motion.p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Animated Arrow Connector Between Steps */}
                  {index < activeDevice.steps.length - 1 && (
                    <motion.div
                      className="flex justify-center my-6"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    >
                      <motion.button
                        onClick={() => {
                          const nextStep = document.getElementById(`step-${activeTab}-${index + 1}`);
                          if (nextStep) {
                            nextStep.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }}
                        className="cursor-pointer focus:outline-none"
                        animate={{
                          y: [0, 8, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center shadow-2xl border-4 border-white hover:from-gray-700 hover:to-gray-800 transition-colors">
                          <ChevronRight className="h-8 w-8 text-white rotate-90" strokeWidth={3} />
                        </div>
                      </motion.button>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Setup Complete Celebration */}
          {setupComplete && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              className="mt-12 relative"
            >
              {/* Confetti Background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(40)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      background: ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899', '#14B8A6', '#F43F5E'][i % 8],
                      left: `${Math.random() * 100}%`,
                      top: -40,
                    }}
                    animate={{
                      y: [0, 600],
                      x: [0, (Math.random() - 0.5) * 300],
                      rotate: [0, Math.random() * 720],
                      opacity: [1, 0.8, 0],
                    }}
                    transition={{
                      duration: 2.5 + Math.random() * 2,
                      repeat: Infinity,
                      repeatDelay: Math.random() * 4,
                      delay: Math.random() * 2,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </div>

              {/* Success Card */}
              <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 border-2 border-green-300 rounded-2xl p-10 text-center relative overflow-hidden">
                {/* Animated gradient background shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative z-10">
                  {/* Success Icon */}
                  <motion.div
                    className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-6 shadow-2xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  >
                    <CheckCircle2 className="h-12 w-12 text-white" strokeWidth={2.5} />
                  </motion.div>

                  {/* Success Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      🎉 Setup Complete!
                    </h3>
                    <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
                      Congratulations! Your MO MCP Server is now ready to use. Start exploring your portfolio with AI-powered insights.
                    </p>

                    {/* CTA Button */}
                    <motion.a
                      href="claude://open"
                      onClick={() => {
                        window.location.href = "claude://open";
                      }}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-semibold shadow-xl transition-all text-lg cursor-pointer"
                      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Sparkles className="h-6 w-6" />
                      Start Using MO MCP
                      <ArrowRight className="h-5 w-5" />
                    </motion.a>
                  </motion.div>

                  {/* Floating particles around the card */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-green-400"
                      style={{
                        left: `${10 + (i * 7)}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2 + Math.random(),
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Additional Help - Minimal Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground mb-6">
              Need help getting started?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                className="group flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-lg font-medium text-gray-700 hover:border-[#2B2E8C] hover:text-[#2B2E8C] transition-all"
                onClick={handleViewDocumentation}
              >
                <BookOpen className="h-4 w-4" />
                View Documentation
              </button>
              <button
                className="group flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-lg font-medium text-gray-700 hover:border-[#2B2E8C] hover:text-[#2B2E8C] transition-all"
                onClick={handleContactSupport}
              >
                <MessageCircle className="h-4 w-4" />
                Contact Support
              </button>
            </div>
          </motion.div>

          {/* Troubleshooting Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-8 bg-white rounded-xl border border-gray-200 p-6"
          >
            <h3 className="text-lg font-bold mb-4">Common Issues & Solutions</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="text-foreground">Permission Denied:</strong> On Linux/Mac, you may need to use <code className="bg-gray-100 px-2 py-0.5 rounded">sudo</code> for global installations.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="text-foreground">Port Already in Use:</strong> Check if another instance is running with <code className="bg-gray-100 px-2 py-0.5 rounded">mcp-server status</code>
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="text-foreground">API Connection Failed:</strong> Verify your API credentials and ensure your Motilal Oswal account has API access enabled.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* PDF Documentation Dialog */}
      <PDFViewerDialog
        isOpen={showPDFModal}
        onClose={() => setShowPDFModal(false)}
      />

      {/* Image Zoom Dialog */}
      <ImageZoomDialog
        isOpen={showImageZoom}
        onClose={() => setShowImageZoom(false)}
        imageSrc={claudeDesktopScreenshot}
        imageAlt="Claude Desktop MCP Server Configuration - Verify MO-TRADING server appears in Settings > Developer"
      />

      {/* YouTube Player Dialog */}
      <YouTubePlayerDialog
        isOpen={showYouTubeModal}
        onClose={() => setShowYouTubeModal(false)}
        videoId="PDN34oTwq74"
        title="Install Node.js and NPM on Windows, Mac and Linux"
      />
    </section>
  );
}