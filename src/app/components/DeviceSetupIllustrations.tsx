import { motion } from 'motion/react';
import { FileDown, Download, CheckCircle2, Shield, Play, Youtube } from 'lucide-react';
import ClaudeLogoOriginal from '../../imports/LogoSvg';
import ClaudeLogoWhite from '../../imports/LogoSvg-321-101';

interface IllustrationProps {
  index: number;
  isActive: boolean;
  deviceType?: 'windows' | 'mac' | 'linux';
  onYouTubeClick?: () => void;
}

export function ClaudeDesktopInstallIllustration({ deviceType = 'windows' }: IllustrationProps) {
  const handleDownloadClaude = () => {
    if (deviceType === 'linux') {
      window.open('https://github.com/aaddrick/claude-desktop-debian#Installation', '_blank');
    } else {
      window.open('https://claude.com/download', '_blank');
    }
  };

  const getDeviceName = () => {
    switch (deviceType) {
      case 'mac':
        return 'Mac';
      case 'linux':
        return 'Linux';
      default:
        return 'Windows';
    }
  };

  return (
    <div className="relative w-full max-w-md">
      {/* Browser Window */}
      <motion.div
        className="bg-white rounded-xl shadow-2xl overflow-hidden"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {/* Browser Header */}
        <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500">
            claude.com/download
          </div>
        </div>

        {/* Browser Content */}
        <div className="p-8 bg-gradient-to-br from-[#F4F4F4] to-white">
          <div className="text-center space-y-6">
            {/* Claude Logo */}
            <motion.div
              className="inline-flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <div className="w-48 h-auto aspect-[375/81.25]">
                <ClaudeLogoOriginal />
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">Claude Desktop</h3>
              <p className="text-sm text-gray-600">AI assistant for your desktop</p>
            </motion.div>

            {/* Download Button */}
            <motion.button
              onClick={handleDownloadClaude}
              className="w-full bg-gradient-to-r from-[#CC785C] to-[#D97757] hover:from-[#D97757] hover:to-[#CC785C] text-white py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-lg transition-all"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(204, 120, 92, 0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="h-5 w-5" />
              Download Claude for {getDeviceName()}
            </motion.button>

            {/* Feature List */}
            <motion.div
              className="space-y-2 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              {[
                'Native desktop experience',
                'Offline-capable',
                'Secure & private'
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 text-xs text-gray-600"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                >
                  <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function DownloadConfigIllustration({ isActive }: IllustrationProps) {
  const handleDownload = () => {
    const configContent = {
      mcpServers: {
        "MO-TRADING": {
          command: "npx",
          args: [
            "-y",
            "mo-mcp-bridge",
            "https://mcp.motilaloswal.com/mcp/"
          ]
        }
      },
      preferences: {
        coworkScheduledTasksEnabled: false,
        sidebarMode: "task"
      }
    };

    const blob = new Blob([JSON.stringify(configContent, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'claude_desktop_config.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative w-full max-w-md">
      {/* Browser Window */}
      <motion.div
        className="bg-white rounded-xl shadow-2xl overflow-hidden"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {/* Browser Header */}
        <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500">
            Claude Desktop Settings
          </div>
        </div>

        {/* Browser Content */}
        <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <FileDown className="h-4 w-4 text-white" />
              </div>
              <div className="text-sm font-semibold text-gray-700">Developer Settings</div>
            </div>

            {/* File Item */}
            <motion.div
              className="bg-white border-2 border-blue-200 rounded-lg p-4 flex items-center gap-3"
              animate={{
                borderColor: isActive ? ['#BFDBFE', '#3B82F6', '#BFDBFE'] : '#BFDBFE',
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-700">claude_desktop_config.json</div>
                <div className="text-xs text-gray-500">Configuration File</div>
              </div>
            </motion.div>

            {/* Download Button */}
            <motion.button
              onClick={handleDownload}
              className="w-full mt-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 shadow-lg transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="h-4 w-4" />
              Download Configuration File
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Animated Download Arrow - REMOVED */}
    </div>
  );
}

export function InstallNodeIllustration() {
  const handleDownloadNode = () => {
    window.open('https://nodejs.org/en/download/', '_blank');
  };

  return (
    <div className="relative w-full max-w-md">
      {/* Terminal Window */}
      <motion.div
        className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {/* Terminal Header */}
        <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="text-xs text-gray-400 ml-2">Terminal</div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-green-400">
              <span>$</span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 'auto' }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                npm install mo-mcp-bridge
              </motion.span>
            </div>

            <motion.div
              className="text-blue-300 text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              Installing dependencies...
            </motion.div>

            {/* Success Indicator */}
            <motion.div
              className="flex items-center gap-2 text-emerald-400 mt-4 bg-emerald-950/30 px-3 py-2 rounded"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.5 }}
            >
              <CheckCircle2 className="h-4 w-4" />
              <span className="text-xs">Package installed successfully</span>
            </motion.div>

            {/* Download Button */}
            <motion.button
              onClick={handleDownloadNode}
              className="w-full mt-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 shadow-lg transition-all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="h-4 w-4" />
              Download Node.js
            </motion.button>
          </div>

          {/* Blinking Cursor */}
          <motion.div
            className="inline-block w-2 h-4 bg-green-400 ml-2 mt-3"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export function AuthenticationIllustration({ }: IllustrationProps) {
  return (
    <div className="relative w-full max-w-md">
      {/* Realistic Claude Desktop Interface */}
      <motion.div
        className="bg-[#F4F4F4] rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {/* Top Bar - Claude Desktop Style */}
        <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <span className="text-xs font-medium text-gray-700 ml-2">Claude</span>
          </div>
        </div>

        {/* Chat Area - Claude Style */}
        <div className="p-6 space-y-4 bg-white min-h-[300px]">
          {/* User Message - Right Aligned */}
          <motion.div
            className="flex justify-end"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-[#E8E8E8] text-gray-900 px-4 py-2.5 rounded-2xl rounded-tr-md max-w-[85%]">
              <p className="text-sm leading-relaxed">What is my current portfolio value?</p>
            </div>
          </motion.div>

          {/* Claude Avatar & Response */}
          <motion.div
            className="flex gap-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {/* Claude Avatar */}
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#CC785C] to-[#D97757] flex items-center justify-center flex-shrink-0 p-1">
              <div className="w-full h-auto aspect-[375/81.25]">
                <ClaudeLogoWhite />
              </div>
            </div>

            <div className="flex-1 space-y-3">
              {/* Claude Text Response */}
              <div className="bg-transparent">
                <p className="text-sm text-gray-900 leading-relaxed">
                  I'd be happy to help you check your portfolio value. To access your Motilal Oswal trading account, I'll need you to authenticate first.
                </p>
              </div>

              {/* Authentication Card - Inline Tool */}
              <motion.div
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.8, type: "spring" }}
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-[#2B2E8C] to-[#1f2166] px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white">Motilal Oswal Authentication</div>
                    <div className="text-xs text-white/80">Secure Login Required</div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 space-y-3">
                  {/* Info Text */}
                  <p className="text-xs text-gray-600">
                    Please log in with your Motilal Oswal credentials to continue
                  </p>

                  {/* Client ID Input (Animated) */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Client ID
                    </label>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5">
                      <motion.div
                        className="flex gap-1"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 2.5, duration: 0.8 }}
                      >
                        {[...Array(10)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-1 h-1 bg-[#2B2E8C] rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 2.5 + i * 0.08 }}
                          />
                        ))}
                      </motion.div>
                    </div>
                  </div>

                  {/* Password Input (Animated) */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Password
                    </label>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5">
                      <motion.div
                        className="flex gap-1"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 3.3, duration: 0.6 }}
                      >
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-1.5 h-1.5 bg-[#2B2E8C] rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 3.3 + i * 0.06 }}
                          />
                        ))}
                      </motion.div>
                    </div>
                  </div>

                  {/* Login Button */}
                  <motion.button
                    className="w-full bg-gradient-to-r from-[#2B2E8C] to-[#1f2166] hover:from-[#1f2166] hover:to-[#2B2E8C] text-white py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4 }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Shield className="h-4 w-4" />
                    Authenticate
                  </motion.button>

                  {/* Security Badge */}
                  <motion.div
                    className="flex items-center justify-center gap-1.5 pt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.3 }}
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                    <span className="text-xs text-gray-500">Secured by 256-bit encryption</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Typing Indicator */}
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.8 }}
          >
            <div className="w-7 h-7" />
            <div className="bg-gray-100 rounded-2xl rounded-tl-md px-4 py-3 flex items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gray-400"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Input Area - Claude Style */}
        <div className="border-t border-gray-200 bg-white px-4 py-3">
          <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 flex items-center gap-2">
            <span className="text-sm text-gray-400 flex-1">Send a message...</span>
            <div className="w-6 h-6 rounded-md bg-gray-200 flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function YouTubeVideoIllustration({ isActive, onYouTubeClick }: IllustrationProps) {
  return (
    <div className="relative w-full max-w-md">
      {/* YouTube Video Player */}
      <motion.div
        className="bg-black rounded-xl shadow-2xl overflow-hidden cursor-pointer group"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        onClick={onYouTubeClick}
        whileHover={{ scale: 1.02 }}
      >
        {/* Video Container - 16:9 Aspect Ratio */}
        <div className="relative aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          {/* Video Thumbnail Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000]/20 to-purple-600/20" />

          {/* NPM Logo/Icon in Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <svg className="w-32 h-32 text-red-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z" />
            </svg>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
            {/* YouTube Play Button */}
            <motion.div
              className="relative"
              animate={{
                scale: isActive ? [1, 1.1, 1] : 1,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              {/* Pulsing Ring */}
              <motion.div
                className="absolute inset-0 bg-red-600 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />

              {/* Play Button */}
              <motion.button
                className="relative w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:bg-red-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onYouTubeClick}
              >
                <Play className="h-9 w-9 text-white ml-1 fill-white" />
              </motion.button>
            </motion.div>

            {/* Video Title */}
            <motion.div
              className="mt-6 text-center"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-lg font-bold mb-1">Install NodeJS and NPM for Windows, Linux and macOS</h3>
              <p className="text-sm text-gray-300">Step-by-step installation guide</p>
            </motion.div>

            {/* YouTube Badge */}
            <motion.div
              className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Youtube className="h-4 w-4 text-red-600" />
              <span className="text-xs font-medium">Watch on YouTube</span>
            </motion.div>

            {/* Duration Badge */}
            <motion.div
              className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              5:24
            </motion.div>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Video Info Bar (YouTube Style) */}
        <div className="bg-[#0F0F0F] p-4 space-y-3">
          <div className="flex items-start gap-3">
            {/* Channel Avatar */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D97757] to-[#CC785C] flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
              MO
            </div>

            <div className="flex-1">
              <h4 className="text-white text-sm font-medium mb-1">
                Install NPM Package for MO MCP Server
              </h4>
              <p className="text-gray-400 text-xs">
                Motilal Oswal • 2 days ago
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <motion.button
              className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onYouTubeClick}
            >
              <Youtube className="h-4 w-4" />
              Watch Tutorial
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Floating "Click to Watch" Indicator */}
      <motion.div
        className="absolute -top-3 -right-3 bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg"
        animate={{
          y: [0, -5, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        Click to Watch!
      </motion.div>
    </div>
  );
}