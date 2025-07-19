# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

AWS Masking is a Chrome browser extension that enhances security by automatically hiding sensitive information on the AWS Management Console. Built with Plasmo framework and React, it masks AWS account IDs, ARNs, access keys, and secret access keys.

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server with hot reload
pnpm dev

# Build the extension for production
pnpm build

# Package the extension for distribution
pnpm package
```

## Architecture and Key Components

### Extension Structure
- **Content Script** (`src/contents/index.ts`): Main logic that runs on AWS pages
  - Uses MutationObserver to detect DOM changes
  - Annotates text nodes and input fields with data attributes
  - Applies regex patterns to identify sensitive AWS data
  
- **Background Script** (`src/background/index.ts`): Handles storage and communication
  - Manages settings storage using Plasmo Storage API
  - Communicates settings changes to content scripts across tabs
  
- **Popup UI** (`src/popup/index.tsx`): User interface for toggling settings
  - React-based UI with Tailwind CSS and HeadlessUI components
  - Toggle switches for enabling/disabling masking features

### Key Patterns Masked
- ARNs: `arn:(aws[a-zA-Z-]*)?:([a-zA-Z0-9-\\.\\_]*):([a-zA-Z0-9-\\.\\_]*):(.*):(.*)`
- Account IDs: `\\d{12}` or `\\d{4}-\\d{4}-\\d{4}`
- Access Key IDs: `(?:ASIA|AKIA|AROA|AIDA)([A-Z0-7]{16})`
- Secret Access Keys: `[a-zA-Z0-9+/]{40}`

### Styling Approach
- Uses Tailwind CSS for utility-first styling
- Custom CSS in `src/contents/styles.css` for masking effects
- PostCSS configuration for processing styles

### Settings Management
- Settings stored in Chrome storage using Plasmo Storage
- Real-time updates propagated to all AWS tabs
- Default settings enable all masking features

## Testing

No specific test scripts are defined. Manual testing involves:
1. Loading the extension in Chrome developer mode
2. Navigating to AWS Console pages
3. Verifying sensitive data is masked according to settings