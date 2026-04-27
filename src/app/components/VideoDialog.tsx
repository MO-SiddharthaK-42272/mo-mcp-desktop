import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';
import { PDFViewerDialog } from './PDFViewerDialog';

interface VideoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoDialog({ isOpen, onClose }: VideoDialogProps) {
  const [isPdfViewerOpen, setIsPdfViewerOpen] = useState(false);

  const handleGetStarted = () => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById('device-setup');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  const handleViewDocs = () => {
    onClose();
    setTimeout(() => {
      setIsPdfViewerOpen(true);
    }, 300);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="video-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
              onClick={onClose}
            />

            {/* Dialog */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                key="video-dialog"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, type: 'spring', damping: 25 }}
                className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b bg-white">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Motilal Oswal MCP Server Demo
                  </h2>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Close dialog"
                  >
                    <X className="h-5 w-5 text-gray-500" />
                  </button>
                </div>

                {/* Video Container */}
                <div className="relative bg-black aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/7PRhU-1OdlY?autoplay=1&rel=0"
                    title="Motilal Oswal MCP Server Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Footer with CTAs */}
                <div className="p-6 bg-gray-50 border-t">
                  <p className="text-sm text-gray-600 text-center mb-4">
                    Learn how to connect your Motilal Oswal account with AI assistants in minutes
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                      size="lg"
                      onClick={handleGetStarted}
                      className="bg-[#2B2E8C] hover:bg-[#1f2166] text-white"
                    >
                      Get Started Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      size="lg"
                      onClick={handleViewDocs}
                      variant="outline"
                      className="border-gray-300 hover:bg-gray-100"
                    >
                      <BookOpen className="mr-2 h-4 w-4" />
                      View Documentation
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* PDF Viewer Dialog - Separate AnimatePresence */}
      <PDFViewerDialog
        isOpen={isPdfViewerOpen}
        onClose={() => setIsPdfViewerOpen(false)}
      />
    </>
  );
}