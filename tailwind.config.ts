import type { Config } from 'tailwindcss';

export default {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                border: 'hsl(var(--border))',
                'brown-1': '#D3AD88',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
        },
        fontSize: {
            'body-regular': [
                '1.125rem',
                {
                    fontWeight: '400',
                },
            ],
            'body-medium': [
                '1.125rem',
                {
                    fontWeight: '500',
                },
            ],
            'body-semibold': [
                '1.125rem',
                {
                    fontWeight: '600',
                },
            ],
            'body-bold': [
                '1.125rem',
                {
                    fontWeight: '700',
                },
            ],
            'base-regular': [
                '1rem',
                {
                    fontWeight: '400',
                },
            ],
            'base-medium': [
                '1rem',
                {
                    fontWeight: '500',
                },
            ],
            'subtitle-regular': [
                '0.95rem',
                {
                    fontWeight: '400',
                },
            ],
            'subtitle-medium': [
                '0.95rem',
                {
                    fontWeight: '500',
                },
            ],
            'small-regular': [
                '0.875rem',
                {
                    fontWeight: '400',
                },
            ],
            'small-medium': [
                '0.875rem',
                {
                    fontWeight: '500',
                },
            ],
            'small-bold': [
                '0.875rem',
                {
                    fontWeight: '700',
                },
            ],
            'little-regular': [
                '0.75rem',
                {
                    fontWeight: '400',
                },
            ],
            'little-medium': [
                '0.75rem',
                {
                    fontWeight: '500',
                },
            ],
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config;
