'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface LiveCounterProps {
  endValue: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  label: string;
}

// Easing function for natural deceleration
function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function LiveCounter({
  endValue,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 2000,
  label,
}: LiveCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const liveIntervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentValueRef = useRef(0);

  // Format number with commas and decimals
  const formatNumber = useCallback(
    (num: number): string => {
      const fixed = num.toFixed(decimals);
      const [intPart, decPart] = fixed.split('.');
      const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return decPart !== undefined ? `${withCommas}.${decPart}` : withCommas;
    },
    [decimals]
  );

  // IntersectionObserver — start animation only when in view
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
    };
  }, []);

  // Primary count-up animation
  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const current = easedProgress * endValue;

      currentValueRef.current = current;
      setDisplayValue(current);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(tick);
      } else {
        currentValueRef.current = endValue;
        setDisplayValue(endValue);
        setHasAnimated(true);
      }
    };

    animationRef.current = requestAnimationFrame(tick);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, hasAnimated, endValue, duration]);

  // Live incrementing after initial animation completes
  useEffect(() => {
    if (!hasAnimated) return;

    const scheduleTick = () => {
      // Random delay between 1-3 seconds
      const delay = 1000 + Math.random() * 2000;

      liveIntervalRef.current = setTimeout(() => {
        // Small random increment relative to the endValue magnitude
        const magnitude = Math.max(1, endValue * 0.00005);
        const increment = Math.random() * magnitude + magnitude * 0.2;
        currentValueRef.current += increment;
        setDisplayValue(currentValueRef.current);
        scheduleTick();
      }, delay);
    };

    scheduleTick();

    return () => {
      if (liveIntervalRef.current !== null) {
        clearTimeout(liveIntervalRef.current);
      }
    };
  }, [hasAnimated, endValue]);

  // Split formatted number into individual characters for digit animation
  const formatted = formatNumber(displayValue);
  const characters = formatted.split('');

  return (
    <div ref={containerRef} className="flex flex-col items-center gap-2">
      {/* Number row */}
      <div
        className="flex items-baseline justify-center font-mono font-bold text-4xl md:text-6xl gradient-text select-none"
        aria-label={`${prefix}${formatted}${suffix} ${label}`}
      >
        {/* Prefix */}
        {prefix && (
          <span className="counter-digit mr-0.5 opacity-80">{prefix}</span>
        )}

        {/* Individual digits / separators */}
        {characters.map((char, i) => {
          const isDigit = /\d/.test(char);
          return (
            <span
              key={`${i}-${char}`}
              className={`counter-digit inline-block ${
                isDigit
                  ? 'transition-transform duration-150'
                  : 'mx-[1px] opacity-60'
              }`}
              style={
                isDigit
                  ? {
                      // Subtle vertical jitter on change to sell the "live" feel
                      transform: `translateY(${
                        hasAnimated && displayValue !== endValue
                          ? `${(Math.random() - 0.5) * 1.2}px`
                          : '0px'
                      })`,
                    }
                  : undefined
              }
            >
              {char}
            </span>
          );
        })}

        {/* Suffix */}
        {suffix && (
          <span className="counter-digit ml-0.5 opacity-80">{suffix}</span>
        )}
      </div>

      {/* Label */}
      <span className="text-sm md:text-base text-white/50 tracking-wide uppercase font-medium">
        {label}
      </span>
    </div>
  );
}
