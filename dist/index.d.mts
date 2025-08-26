import React from 'react';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    color?: string;
}
declare const GlowButton: React.FC<GlowButtonProps>;

export { GlowButton, type GlowButtonProps, GlowButton as default };
