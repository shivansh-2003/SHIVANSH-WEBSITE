# Public Assets

This folder contains static assets that are served directly by Vite/Vercel.

## Directory Structure

```
public/
└── assets/
    ├── 1750518668825.pdf              # Zeron Experience Certificate
    ├── 1768408227545.pdf              # Stremly Experience Certificate
    ├── certificate_Shivansh Mahajan.jpg  # InnovateX Delhi Certificate
    ├── 00a460ec-968b-4fbb-b87f-305192fcd51e.png  # Hackout Certificate
    └── hackthemountain.jpeg           # Hack The Mountains Certificate
```

## Usage

Files in this folder are accessible at the root URL:
- `/assets/filename.ext` in the code
- `https://yourdomain.com/assets/filename.ext` in production

## Important Notes

1. **Do not move or delete** these files - they are referenced in `constants.ts`
2. All certificate paths use `/assets/` prefix for production compatibility
3. Vite automatically serves these files without any configuration
4. These files will be deployed to Vercel/Netlify as-is

## Adding New Assets

When adding new certificates or images:
1. Place them in `public/assets/`
2. Reference them as `/assets/filename.ext` in your code
3. Commit and push - they will work in production
