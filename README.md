# Code Snippet Manager

## Architecture Overview

The application follows a clean architecture pattern with a feature-based organization. Here's an overview of the main directories and their purposes:

### Core Layer (`src/core/`)
- Contains the business logic and domain models
- Includes repositories and interfaces
- Houses core types and entities

### Feature Layer (`src/features/`)
- Feature-based organization (e.g., snippets, folders)
- Each feature has its own components, hooks, and utilities
- Follows the principle of separation of concerns

### Shared Layer (`src/shared/`)
- Common UI components (`shared/ui/`)
- Layouts (`shared/layouts/`)
- Helper functions (`shared/helpers/`)
- Constants and configurations

## Directory Structure

```
src/
├── core/
│   ├── repositories/
│   │   ├── snippet.repository.ts
│   │   ├── folder.repository.ts
│   │   └── index.ts
│   └── types/
│       ├── snippet.ts
│       ├── folder.ts
│       └── index.ts
├── features/
│   └── snippets/
│       ├── components/
│       │   ├── editor.tsx
│       │   ├── snippet-actions.tsx
│       │   └── index.ts
│       └── hooks/
├── shared/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── index.ts
│   ├── layouts/
│   │   ├── main-layout/
│   │   └── index.ts
│   └── helpers/
│       ├── cn.ts
│       └── index.ts
└── app/
    └── (routes)/
        └── code-snippets/
            └── page.tsx
```

## Guidelines

### Component Placement
1. Place components in the appropriate feature directory if they're specific to a feature
2. Use shared/ui for reusable UI components
3. Keep layouts in shared/layouts
4. Create new features directories for distinct functionality

### Code Organization
1. Export all components through index.ts files
2. Keep components small and focused
3. Use proper typing for all components and functions
4. Follow the single responsibility principle

### Best Practices
1. Use absolute imports with @/ prefix
2. Keep business logic in repositories
3. Use shared helpers for common utilities
4. Follow consistent naming conventions

### Documentation
1. Add JSDoc comments for complex functions
2. Include README.md files in feature directories
3. Document component props using TypeScript interfaces
4. Keep documentation up-to-date with changes

## Maintaining Architecture

1. Regular code reviews
2. Consistent use of established patterns
3. Documentation updates with changes
4. Periodic architecture reviews