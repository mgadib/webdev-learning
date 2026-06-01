# Repository Guidelines

## Project Structure & Module Organization

This repository is a React 19 + TypeScript learning platform built with Vite and Tailwind CSS. Application entry points live in `src/main.tsx` and `src/App.tsx`. Route pages are in `src/pages`, reusable app components are in `src/components`, and generated or library-style UI primitives are in `src/components/ui`. Course content and metadata are stored in `src/data/modules.ts`, `src/data/chapters.ts`, and `src/data/glossary.ts`. Shared utilities live in `src/lib`, React hooks in `src/hooks`, and global styles in `src/index.css` plus `src/styles`. Static assets belong in `public`; production output goes to `dist` and should not be edited directly.

## Build, Test, and Development Commands

- `npm install`: install dependencies. Use Node `>=20` and npm `>=10`.
- `npm run dev`: start the Vite development server.
- `npm run build`: run TypeScript project checks and create the production build.
- `npm run lint`: run ESLint across the repository.
- `npm run audit:content`: validate learning modules, chapters, prerequisite links, and markdown quality.
- `npm run preview`: preview the Vite production build locally.
- `npm start`: serve `dist` on port `3000`.

## Coding Style & Naming Conventions

Use TypeScript, ESM imports, React function components, and two-space indentation. Components and pages use `PascalCase` filenames such as `ChapterPage.tsx`; hooks use `useThing.ts` or `useThing.tsx`; utility modules use `camelCase` names. Prefer the `@/` path alias for source imports. Keep Tailwind classes readable and colocated with JSX unless a shared token or utility belongs in `src/styles`.

## Testing Guidelines

There is no dedicated unit test runner configured. Before submitting changes, run `npm run lint`, `npm run build`, and `npm run audit:content`. For content changes, verify module IDs, chapter IDs, `recommendedAfter` references, allowed levels, tracks, and topics. Add focused tests or scripts when introducing behavior that cannot be covered by the existing build, lint, or content audit.

## Commit & Pull Request Guidelines

Recent history uses short, imperative-style subjects such as `update: readme` and iteration labels like `iterasi 5`. Keep commits concise and focused; prefer a clear prefix when helpful, for example `content: add CSS chapter` or `fix: repair module route`. Pull requests should describe the change, list validation commands run, link related issues, and include screenshots for visible UI changes.

## Security & Configuration Tips

Copy `.env.example` for local configuration and avoid committing secrets. Keep deployment files such as `Dockerfile`, `nginx.conf`, and `nixpacks.toml` aligned with any build or routing changes.
