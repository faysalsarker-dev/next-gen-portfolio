 @theme {
  /* Register colors under Tailwind's theme namespace */
  --color-background: var(--color-bg-base);
  --color-surface1: var(--color-surface-1);
  --color-surface2: var(--color-surface-2);

  --color-primary: var(--color-primary);
  --color-secondary: var(--color-secondary);
  --color-tertiary: var(--color-tertiary);
  --color-accent: var(--color-accent);

  /* Register text colors */
  --color-text-main: var(--color-text-main);
  --color-text-muted: var(--color-text-muted);

  /* Shadows */
  --shadow-glow: var(--shadow-glow);
  --shadow-hover: var(--shadow-hover);

  /* Radii */
  --radius-rounded: var(--radius);
} 


@layer base {
  :root {
    /* ✅ Your base tokens */
    --color-bg-base: #0D0914;
    --color-surface-1: #1B1427;
    --color-surface-2: #15101E;

    --color-text-main: #FFFFFF;
    --color-text-muted: #D1D5DB;

    --color-primary: #782EFA;
    --color-secondary: #F622C2;
    --color-tertiary: #2CD3E1;
    --color-accent: #3DF2B3;

    --shadow-glow: 0 0 12px var(--color-primary);
    --shadow-hover: 0 0 16px var(--color-secondary);
    --radius: 12px;

    /* ✅ Override shadcn variables using your tokens */
    --background: var(--color-bg-base);
    --foreground: var(--color-text-main);
    --card: var(--color-surface-1);
    --card-foreground: var(--color-text-main);
    --popover: var(--color-surface-2);
    --popover-foreground: var(--color-text-main);

    --primary: var(--color-primary);
    --primary-foreground: #ffffff;

    --secondary: var(--color-secondary);
    --secondary-foreground: #ffffff;

    --muted: var(--color-surface-2);
    --muted-foreground: var(--color-text-muted);

    --accent: var(--color-accent);
    --accent-foreground: #0D0914;

    --destructive: #ff4d4d;
    --destructive-foreground: #ffffff;

    --border: var(--color-surface-2);
    --input: var(--color-surface-2);
    --ring: var(--color-tertiary);

    --radius: 0.625rem;
  }
}