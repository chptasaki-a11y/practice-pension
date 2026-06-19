import { useState } from 'react';
import bottom from '@/assets/bottom.png';

export default function FloatingReservationButton() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
      {/* 電話ボタン */}
      <a
        href="tel:0269-XX-XXXX"
        className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-heading font-bold text-background-50 text-sm shadow-lg hover:opacity-80 transition-opacity duration-300 whitespace-nowrap cursor-pointer bg-cover bg-center bg-no-repeat"
        style={{ 
          // ここに背景にしたい画像のパスを指定します
          backgroundImage: "url('/path/to/your-image.jpg')" 
        }}
        aria-label="電話をかける: 0269-XX-XXXX"
      >
        <i className="ri-phone-line w-7 h-7 flex items-center justify-center"></i>
        0269-XX-XXXX
      </a>

      {/* ×ボタン */}
      <button
        type="button"
        onClick={() => setVisible(false)}
        className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-foreground-800 text-background-50 flex items-center justify-center shadow-md hover:bg-foreground-950 transition-colors cursor-pointer"
        aria-label="予約ボタンを閉じる"
      >
        <i className="ri-close-line w-4 h-4 flex items-center justify-center"></i>
      </button>
    </div>
  );
}