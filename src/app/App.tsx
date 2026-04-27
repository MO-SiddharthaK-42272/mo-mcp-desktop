import { lazy, Suspense, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Breadcrumb } from './components/Breadcrumb';
import { Hero } from './components/Hero';
// Import navigation targets directly to avoid lazy-loading issues
import { HowItWorks } from './components/HowItWorks';
import { Capabilities } from './components/Capabilities';
import { Security } from './components/Security';
import { DeviceSetup } from './components/DeviceSetup';
import { FAQ } from './components/FAQ';

// Global flag to disable scroll restoration during navigation
(window as any).__disableScrollRestoration = false;

// Lazy load non-navigation components
const AdvancedFeatures = lazy(() => import('./components/AdvancedFeatures').then(m => ({ default: m.AdvancedFeatures })));
const Benefits = lazy(() => import('./components/Benefits').then(m => ({ default: m.Benefits })));
const SocialProof = lazy(() => import('./components/SocialProof').then(m => ({ default: m.SocialProof })));
const ConnectSection = lazy(() => import('./components/ConnectSection').then(m => ({ default: m.ConnectSection })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

export default function App() {
  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Check if navigation just happened (flag set by Navigation component)
    const navigationInProgress = (window as any).__disableScrollRestoration;

    // Restore scroll position on page load (only if no navigation in progress)
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');

    if (savedScrollPosition && !navigationInProgress) {
      const scrollY = parseInt(savedScrollPosition, 10);

      const restoreScroll = () => {
        // Don't restore if navigation happened after load started
        if ((window as any).__disableScrollRestoration) {
          return;
        }
        window.scrollTo({
          top: scrollY,
          behavior: 'instant' as ScrollBehavior
        });
      };

      // Try to restore immediately
      requestAnimationFrame(restoreScroll);

      // Retry after delays to ensure lazy-loaded content is rendered
      setTimeout(restoreScroll, 100);
      setTimeout(restoreScroll, 300);
    }

    // Save scroll position on scroll events (throttled)
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    const handleScroll = () => {
      // Don't save if navigation is in progress
      if ((window as any).__disableScrollRestoration) {
        return;
      }

      // Throttle saves to once per 200ms
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        scrollTimeout = null;
        // Double-check flag hasn't been set during timeout
        if (!(window as any).__disableScrollRestoration) {
          sessionStorage.setItem('scrollPosition', window.scrollY.toString());
        }
      }, 200);
    };

    // Save scroll position before page unload
    const handleBeforeUnload = () => {
      // Don't save if navigation was in progress
      if (!(window as any).__disableScrollRestoration) {
        sessionStorage.setItem('scrollPosition', window.scrollY.toString());
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Breadcrumb />
      <main>
        <Hero />
        {/* Navigation targets loaded directly */}
        <HowItWorks />
        <Capabilities />
        <Suspense fallback={<div />}>
          <AdvancedFeatures />
        </Suspense>
        <DeviceSetup />
        <Suspense fallback={<div />}>
          <Benefits />
        </Suspense>
        <Security />
        <Suspense fallback={<div />}>
          <SocialProof />
        </Suspense>
        <FAQ />
        <Suspense fallback={<div />}>
          <ConnectSection />
        </Suspense>
      </main>
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </div>
  );
}