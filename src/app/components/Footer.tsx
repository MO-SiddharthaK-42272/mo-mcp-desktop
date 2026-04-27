import { Download, Eye } from 'lucide-react';
import { generateDocumentationPDF } from '../utils/generatePDF';
import { useState } from 'react';
import { PDFViewerDialog } from './PDFViewerDialog';

export function Footer() {
  const [isPdfViewerOpen, setIsPdfViewerOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#2B2E8C] text-white px-4 sm:px-6 lg:px-8">
        {/* Investor Alert Banner */}
        <div className="border-b border-white/10 py-3">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex items-start gap-4">
              <p className="text-sm font-semibold shrink-0">Investor Alert:</p>
              <div className="overflow-x-auto">
                <p className="text-sm text-white/90">
                  <span className="font-bold">1</span>. For Stock Broking, Prevent Unauthorized
                  Transactions in your account -- update your Mobile Number with your Stock broker.
                  Receive alerts on your Registered Mobile for all debit and other important
                  transactions in your demat account directly from Exchanges on the same day...issued
                  in the interest of investors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-[1280px] mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-white/90 mb-3">
                  Registered Office Address
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Motilal Oswal Tower, Rahimtullah Sayani Road,
                  <br />
                  Opposite Parel ST Depot, Prabhadevi,
                  <br />
                  Mumbai - 400025
                </p>
                <p className="text-sm text-white/80 mt-2">query@motilaloswal.com</p>
                <p className="text-sm text-white/80">022 3828 1085</p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-white/90 mb-3">
                  Correspondence Address
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Palm Spring Centre, 2nd Floor, Palm Court Complex,
                  <br />
                  New Link Road, Malad (West),
                  <br />
                  Mumbai - 400 064
                </p>
                <p className="text-sm text-white/80 mt-2">022 7188 1000</p>
              </div>

              {/* Copyright */}
              <div className="pt-4">
                <p className="text-sm text-white/80 leading-relaxed">
                  © 2025 Motilal Oswal Financial Services Limited
                  <br />
                  (MOFSL)* Member of NSE, BSE, MCX, NCDEX CIN No.:
                  <br />
                  L67190MH2005PLC153397
                </p>
              </div>

              {/* Social Media */}
              <div className="flex gap-3 pt-2">
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-md flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-md flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 26 24"
                  >
                    <path d="M25.4146 24L15.82 10.0124L15.8364 10.0255L24.4873 0H21.5964L14.5491 8.16L8.95273 0H1.37091L10.3284 13.0593L10.3273 13.0582L0.880005 24H3.77091L11.6058 14.9215L17.8327 24H25.4146Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-md flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.7609 7.1998C23.7609 7.1998 23.5266 5.54512 22.8047 4.81855C21.8906 3.8623 20.8688 3.85762 20.4 3.80137C17.0438 3.55762 12.0047 3.55762 12.0047 3.55762H11.9953C11.9953 3.55762 6.95625 3.55762 3.6 3.80137C3.13125 3.85762 2.10938 3.8623 1.19531 4.81855C0.473438 5.54512 0.24375 7.1998 0.24375 7.1998C0.24375 7.1998 0 9.14512 0 11.0857V12.9045C0 14.8451 0.239062 16.7904 0.239062 16.7904C0.239062 16.7904 0.473437 18.4451 1.19062 19.1717C2.10469 20.1279 3.30469 20.0951 3.83906 20.1982C5.76094 20.3811 12 20.4373 12 20.4373C12 20.4373 17.0438 20.4279 20.4 20.1889C20.8688 20.1326 21.8906 20.1279 22.8047 19.1717C23.5266 18.4451 23.7609 16.7904 23.7609 16.7904C23.7609 16.7904 24 14.8498 24 12.9045V11.0857C24 9.14512 23.7609 7.1998 23.7609 7.1998ZM9.52031 15.1123V8.36699L16.0031 11.7514L9.52031 15.1123Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-md flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" />
                  </svg>
                </a>
              </div>

              {/* Download App Section */}
              <div className="pt-4">
                <p className="text-sm text-white/90 mb-3">Download Our App</p>
                <div className="flex flex-col gap-2 max-w-[160px]">
                  <a
                    href="#"
                    className="bg-black hover:bg-black/80 rounded-md px-3 py-2 flex items-center gap-2 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] text-white/70">Download on the</div>
                      <div className="text-xs font-semibold">App Store</div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="bg-black hover:bg-black/80 rounded-md px-3 py-2 flex items-center gap-2 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3.609 1.814L13.792 12.001L3.609 22.188C3.41 21.852 3.299 21.458 3.299 21.034V2.968C3.299 2.544 3.41 2.15 3.609 1.814ZM14.853 13.064L17.279 15.491C17.771 15.983 17.771 16.781 17.279 17.273L5.37 23.229C5.034 23.428 4.64 23.539 4.216 23.539L14.853 13.064ZM18.34 11.062L20.766 13.489C21.258 13.981 21.258 14.779 20.766 15.271L18.34 17.698L15.914 15.271L18.34 12.844L15.914 10.417L18.34 11.062ZM4.216 0.463C4.64 0.463 5.034 0.574 5.37 0.773L17.279 6.729C17.771 7.221 17.771 8.019 17.279 8.511L14.853 10.938L4.216 0.463Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] text-white/70">GET IT ON</div>
                      <div className="text-xs font-semibold">Google Play</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Investment Options */}
            <div>
              <h3 className="text-sm font-bold text-white/90 mb-4">Investment Options</h3>
              <div className="text-sm text-white/80 space-y-2 leading-relaxed">
                <p>
                  Stocks | Upcoming IPOs | Futures and Options Trading | Commodity Trading | Mutual
                  Funds | NRI Demat Account
                </p>
                <p>
                  Intelligent Advisory Portfolio | US Stocks | Alternate Investment Fund | Portfolio
                  Management Services
                </p>
                <p>Fixed Deposit | Pay Later (MTF) | Exchange Traded Funds (ETF) | Insurance</p>
              </div>

              <h3 className="text-sm font-bold text-white/90 mb-4 mt-6">Financial Calculators</h3>
              <div className="text-sm text-white/80 space-y-2 leading-relaxed">
                <p>
                  SIP Calculator | Lumpsum Calculator | Mutual Fund Calculator | SIP Calculator | EMI
                  Calculator | PPF Calculator
                </p>
                <p>
                  Sukanya Samriddhi Yojana Calculator | CAGR Calculator | Gratuity Calculator | NPS
                  Calculator | APY Calculator
                </p>
              </div>

              <h3 className="text-sm font-bold text-white/90 mb-4 mt-6">Platforms</h3>
              <div className="text-sm text-white/80 space-y-2">
                <p>
                  MO Investor App | Trade + Chart | MO Arthmitra | MO Wealth App | MO Money | Trading
                  Platform
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-bold text-white/90 mb-4">Quick Links</h3>
              <div className="text-sm text-white/80 space-y-2 leading-relaxed">
                <p>Open Demat Account | Trading Account | Demat Account</p>
                <p>Market Today | Stock Brokers | Career</p>
                <p>Investor Charter | Disclaimer | Grievances</p>
                <p>SCORES | NSC | Customer Feedback</p>
                <p>BSE STAR MF | Compliance Officer</p>
              </div>

              <h3 className="text-sm font-bold text-white/90 mb-4 mt-6">Support</h3>
              <div className="text-sm text-white/80 space-y-2">
                <p>Customer Service | Write to us</p>
                <p>Give us a missed call: 8108022022</p>
                <p>Email: service@motilaloswal.com</p>
              </div>

              <h3 className="text-sm font-bold text-white/90 mb-4 mt-6">Trending Blogs</h3>
              <div className="text-sm text-white/80 space-y-2">
                <p>SGB Holdings 2025 | NSE Holidays 2025</p>
                <p>Budget 2025 Expectation | Interim Top Gainer</p>
              </div>

              <h3 className="text-sm font-bold text-white/90 mb-4 mt-6">MCP Server Resources</h3>
              <div className="text-sm text-white/80 space-y-3">
                <p>Setup Guide | Documentation | FAQs</p>
                <button
                  onClick={generateDocumentationPDF}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm font-medium mt-2"
                >
                  <Download className="h-4 w-4" />
                  Download PDF Guide
                </button>
                <button
                  onClick={() => setIsPdfViewerOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm font-medium mt-2"
                >
                  <Eye className="h-4 w-4" />
                  View PDF Guide
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stock Directory */}
        <div className="border-t border-white/10 py-8">
          <div className="max-w-[1280px] mx-auto">
            <h3 className="text-sm font-bold text-white/90 mb-4">Stock Directory</h3>
            <div className="text-xs text-white/70 space-y-2">
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map((letter) => (
                  <a key={letter} href="#" className="hover:text-white transition-colors">
                    {letter}
                  </a>
                ))}
              </div>
            </div>

            <h3 className="text-sm font-bold text-white/90 mb-4 mt-6">Mutual Fund Directory</h3>
            <div className="text-xs text-white/70 space-y-2">
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map((letter) => (
                  <a key={letter} href="#" className="hover:text-white transition-colors">
                    {letter}
                  </a>
                ))}
              </div>
            </div>

            <h3 className="text-sm font-bold text-white/90 mb-4 mt-6">US Stocks Directory</h3>
            <div className="text-xs text-white/70 space-y-2">
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map((letter) => (
                  <a key={letter} href="#" className="hover:text-white transition-colors">
                    {letter}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 py-6">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-xs text-white/60 leading-relaxed space-y-3">
              <p>
                <strong>Disclaimer:</strong> Investment in securities market are subject to market
                risks, read all the related documents carefully before investing. Registration
                granted by SEBI and certification from NISM in no way guarantee performance of the
                intermediary or provide any assurance of returns to investors. The securities quoted
                are exemplary and are not recommendatory.
              </p>
              <p>
                *Motilal Oswal Financial Services Limited (MOFSL) is a distributor of Mutual Funds,
                PMS, Fixed Deposit, Bonds, NCDs, Insurance, and IPO products.
              </p>
              <p className="text-white/50 text-[10px]">
                © {new Date().getFullYear()} Motilal Oswal Financial Services Limited. All rights
                reserved. | Privacy Policy | Terms & Conditions | Sitemap
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* PDF Viewer Dialog */}
      <PDFViewerDialog
        isOpen={isPdfViewerOpen}
        onClose={() => setIsPdfViewerOpen(false)}
      />
    </>
  );
}