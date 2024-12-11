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

  const springConfig = { damping: 15, stiffness: 300 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotate = useTransform(x, [-100, 100], [-10, 10]);
  const translateX = useTransform(x, [-100, 100], [-5, 5]);
  const translateY = useTransform(y, [-100, 100], [-5, 5]);

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
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                style={{
                  translateX,
                  translateY,
                  rotate
                }}
                transition={{
                  duration: 0.15,
                  ease: 'easeOut'
                }}
                className='relative'
              >
                <div className='rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground shadow-xl'>
                  {content.title && (
                    <div className='font-medium'>{content.title}</div>
                  )}
                  {content.description && (
                    <div className='text-xs opacity-90'>
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
