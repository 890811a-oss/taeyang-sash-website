import React, { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  altPrefix?: string;
}

export function Lightbox({ images, currentIndex, onClose, onNext, onPrev, altPrefix = '시공사진' }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    // Store the previously focused element
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Focus the dialog
    dialogRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
      
      // Restore focus to the previously focused element
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, [onClose, onNext, onPrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    // Swipe threshold: 50px
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left -> next
        onNext();
      } else {
        // Swiped right -> prev
        onPrev();
      }
    }
    
    setTouchStart(null);
  };

  return (
    <div 
      ref={dialogRef}
      className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="이미지 갤러리"
      tabIndex={-1}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 text-white/80 hover:text-white transition-colors z-10"
        aria-label="닫기"
      >
        <X className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />
      </button>

      {/* Previous Button */}
      {images.length > 1 && (
        <button
          onClick={onPrev}
          className="absolute left-4 md:left-8 text-white/80 hover:text-white transition-colors z-10"
          aria-label="이전 이미지"
        >
          <ChevronLeft className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1} />
        </button>
      )}

      {/* Image */}
      <div className="relative w-full h-full flex items-center justify-center p-4 md:p-16">
        <img
          src={images[currentIndex]}
          alt={`${altPrefix} ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={onNext}
          className="absolute right-4 md:right-8 text-white/80 hover:text-white transition-colors z-10"
          aria-label="다음 이미지"
        >
          <ChevronRight className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1} />
        </button>
      )}

      {/* Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm md:text-base font-light">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
