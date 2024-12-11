'use client';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform
} from 'motion/react';
import React, { type ReactNode } from 'react';

interface TooltipProps {
  content: {
    title?: string;
    description?: string;
  };
  children: ReactNode;
}

export const AnimatedTooltip = ({ content, children }: TooltipProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotate = useTransform(x, [-100, 100], [-5, 5]);
  const translateX = useTransform(x, [-100, 100], [-3, 3]);
  const translateY = useTransform(y, [-100, 100], [-3, 3]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.x + rect.width / 2;
    const centerY = rect.y + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  return (
    <TooltipPrimitive.Provider delayDuration={0}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild onMouseMove={handleMouseMove}>
          {children}
        </TooltipPrimitive.Trigger>
        <AnimatePresence>
          <TooltipPrimitive.Portal>
            <TooltipPrimitive.Content
              side='top'
              align='center'
              sideOffset={4}
              alignOffset={4}
              collisionPadding={8}
              avoidCollisions={true}
              className='z-50 select-none'
              asChild
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                style={{
                  translateX,
                  translateY,
                  rotate
                }}
                transition={{
                  duration: 0.2,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className='relative'
              >
                <div className='rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground shadow-xl'>
                  {content.title && (
                    <div className='font-semibold leading-tight'>
                      {content.title}
                    </div>
                  )}
                  {content.description && (
                    <div className='text-[13px] leading-snug opacity-95'>
                      {content.description}
                    </div>
                  )}
                  <TooltipPrimitive.Arrow
                    className='fill-primary'
                    style={{
                      position: 'absolute',
                      bottom: -4,
                      left: '50%',
                      transform: 'translateX(-50%)'
                    }}
                  />
                </div>
              </motion.div>
            </TooltipPrimitive.Content>
          </TooltipPrimitive.Portal>
        </AnimatePresence>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};
