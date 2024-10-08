/src
  /assets                   # Static files (images, fonts, etc.)
  /components               # Reusable components
    /Button
      Button.tsx
      Button.styles.ts      # Component-specific styles (optional, can also be Tailwind CSS)
      Button.test.tsx
    /Modal
      Modal.tsx
      Modal.styles.ts
      Modal.test.tsx
  /layouts                  # Layout components
    /MainLayout
      MainLayout.tsx
      MainLayout.styles.ts
  /pages                    # Page components for routing
    /Blog
      BlogPage.tsx
      BlogPage.test.tsx
    /Post
      PostPage.tsx
      PostPage.test.tsx
  /hooks                    # Custom hooks
    useFetch.ts             # Custom hook for fetching data
  /contexts                 # React context for global state
    AuthContext.tsx
    ThemeContext.tsx
  /services                 # API service calls
    api.ts                  # Base API configuration
    blogService.ts          # Specific service for blog-related API calls
  /store                    # State management (Redux or context)
    /slices
      authSlice.ts          # Redux slice for authentication
      blogSlice.ts          # Redux slice for blog posts
    store.ts                # Store configuration
  /styles                   # Tailwind CSS and global styles
    tailwind.config.js       # Tailwind CSS configuration
    global.css              # Optional global styles (if needed)
    /components              # Optional component-specific styles if not using Tailwind exclusively
  /tests                    # Test setup
    setupTests.ts           # Configuration for Jest
  /types                    # TypeScript type definitions
    models.ts               # General types and interfaces
    api.d.ts                # API response types
  /mocks                    # Mock data
    blogPosts.mock.ts       # Mock blog posts for testing
  /config                   # Configuration files
    env.ts                  # Environment variables setup
  /middleware               # Custom middleware (if using Express or similar)
    logger.ts               # Logger middleware for API calls
  index.tsx                 # Entry point
  App.tsx                   # Main application component
