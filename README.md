# AI Email Writer Chrome Extension

An AI-powered Chrome Extension designed to generate professional and context-aware email replies using the Gemini API.

This project demonstrates practical integration of Generative AI into browser extensions while focusing on productivity, usability, and clean user experience.

---

## Overview

The AI Email Writer Extension helps users quickly draft professional email responses directly from the browser. By leveraging the Gemini API, the extension can generate intelligent replies based on user prompts in real time.

The project was built to explore:

- Chrome Extension Development
- AI API Integration
- Frontend Application Design
- Productivity Automation
- Real-World AI Use Cases

---

## Features

- AI-generated email replies
- Fast and lightweight extension
- Clean and minimal user interface
- Real-time response generation using Gemini API
- Easy Chrome integration
- Beginner-friendly setup process

---

## Tech Stack

- JavaScript
- HTML
- CSS
- Chrome Extension APIs
- Gemini API

---

## Project Structure

```bash
AI-Email-Writer/
│
├── manifest.json
├── popup.html
├── popup.js
├── popup.css
├── content.js
├── background.js
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md
```

---

## Local Setup Guide

Follow these steps to run the extension on your local system.

### Step 1: Download the Project

Download the project ZIP file from GitHub.

After downloading:

1. Right-click the ZIP file
2. Click:

```text
Extract All
```

3. Choose a folder location
4. Click:

```text
Extract
```

The project folder is now ready.

---

### Step 2: Add Your Gemini API Key

Open the project folder.

Locate the JavaScript file where the Gemini API request is configured.

Replace:

```javascript
const API_KEY = "YOUR_API_KEY";
```

with your actual Gemini API key:

```javascript
const API_KEY = "YOUR_GEMINI_API_KEY";
```

Save the file after updating the key.

---

## Getting Gemini API Key

### Step 1

Open:

```text
https://aistudio.google.com/app/apikey
```

### Step 2

Sign in using your Google account.

### Step 3

Click:

```text
Create API Key
```

### Step 4

Copy the generated API key.

### Step 5

Paste it into the project configuration file.

---

## Loading the Extension in Chrome

### Step 1

Open Google Chrome.

In the address bar, open:

```text
chrome://extensions/
```

---

### Step 2

Enable:

```text
Developer Mode
```

from the top-right corner.

This allows Chrome to load custom extensions locally.

---

### Step 3

Click:

```text
Load Unpacked
```

A folder selection window will appear.

---

### Step 4

Select the extracted project folder.

Click:

```text
Select Folder
```

The extension will now be installed in Chrome.

---

### Step 5

Pin the extension for quick access:

1. Click the Extensions icon in the Chrome toolbar
2. Find:

```text
AI Email Writer
```

3. Click the Pin icon

The extension will now appear permanently in the toolbar.

---

## Using the Extension

1. Open the extension from the Chrome toolbar
2. Enter your email prompt
3. Click the generate button
4. The AI-generated email response will appear instantly

---

## Updating the Extension After Code Changes

Whenever changes are made to the source code:

1. Open:

```text
chrome://extensions/
```

2. Locate the extension
3. Click:

```text
Reload
```

Chrome will load the updated version of the extension.

---

## Screenshots

Add screenshots for better project presentation.

Recommended screenshots:

- Extension popup interface
- AI-generated email response
- Chrome extensions page
- Example workflow

Example structure:

```bash
screenshots/
├── popup.png
├── generated-reply.png
└── extension-loaded.png
```

---

