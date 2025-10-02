import type { Metadata } from 'next'
import "./css/euclid-circular-a-font.css";
import "./css/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { ModalProvider } from "./context/QuickViewModalContext";
import { CartModalProvider } from "./context/CartSidebarModalContext";
import { ReduxProvider } from "@/redux/provider";
import QuickViewModal from "@/components/Common/QuickViewModal";
import CartSidebarModal from "@/components/Common/CartSidebarModal";
import { PreviewSliderProvider } from "./context/PreviewSliderContext";
import PreviewSliderModal from "@/components/Common/PreviewSlider";

import ScrollToTop from "@/components/Common/ScrollToTop";

export const metadata: Metadata = {
  title: 'Bombay Delights | Authentic Indian Food Court - Southern Cross Melbourne',
  description: 'Order fresh Indian takeaway online. Curry, biryani, naan & more. Located at Stall 23, Southern Cross Food Court. Ready in 8-12 minutes. Lunch specials available.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <ReduxProvider>
          <CartModalProvider>
            <ModalProvider>
              <PreviewSliderProvider>
                <Header />
                {children}
                <Footer />

                <QuickViewModal />
                <CartSidebarModal />
                <PreviewSliderModal />
              </PreviewSliderProvider>
            </ModalProvider>
          </CartModalProvider>
        </ReduxProvider>
        <ScrollToTop />
      </body>
    </html>
  );
}