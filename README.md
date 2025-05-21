# Receiptra - Landing Page

This project is a modern landing page for Receiptra, a smart receipt management solution. It has been updated from its initial version to use a modern front-end stack and development workflow.

## Project Purpose

The primary goal of this landing page is to present Receiptra to potential users and partners, highlighting its features, benefits, and vision.

## Technology Stack

The project utilizes the following core technologies:

*   **HTML5:** For the basic structure and content of the website.
*   **Tailwind CSS:** A utility-first CSS framework used for styling the website.
    *   _Note:_ The project is structured to use Tailwind CSS via PostCSS, processed by Parcel.
*   **JavaScript (ES6+):** For interactive elements like the mobile navigation and scroll-triggered animations.
*   **Parcel:** Used as the build tool for bundling assets, running a development server, and creating production builds.
    *   _Note:_ Execution of Parcel commands (`npm start`, `npm run build`) faced timeouts in the development environment. This might require troubleshooting in different local setups.
*   **PostCSS:** For transforming CSS with plugins like Tailwind CSS and Autoprefixer.

## Project Structure

A brief overview of key files and directories:

*   `index.html`: The main HTML file for the landing page.
*   `src/input.css`: The main CSS file where Tailwind CSS directives are imported and custom global styles (including scroll animations) are defined.
*   `tailwind.config.js`: Configuration file for Tailwind CSS, including custom color palettes and fonts.
*   `postcss.config.js`: Configuration file for PostCSS, specifying Tailwind CSS and Autoprefixer as plugins.
*   `script.js`: Contains custom JavaScript for scroll-fade animations and the mobile navigation menu toggle.
*   `assets/images/`: Intended to store website imagery. Currently, image files in this directory contain URLs as placeholders due to environment constraints on direct downloads.
*   `package.json`: Manages project dependencies (Parcel, Tailwind CSS, PostCSS, etc.) and defines `npm` scripts for development and building.
*   `.gitignore`: Specifies intentionally untracked files that Git should ignore (e.g., `node_modules/`, `dist/`).

## Setup and Installation

To set up the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    Ensure you have Node.js and npm installed. Then, run:
    ```bash
    npm install
    ```
    This will install all development dependencies listed in `package.json`, including Parcel, Tailwind CSS, and PostCSS.

## Running the Project (Development)

To start the Parcel development server, run:

```bash
npm start
```

Alternatively, you can run Parcel directly:

```bash
npx parcel index.html --open
```

This command *should* compile the assets, start a development server, and automatically open the page in your default web browser. The server will also watch for file changes and rebuild automatically.

**Important Note on Parcel Execution:**
During development and testing in some environments, the Parcel development server (`npm start`) and build command (`npm run build`) were observed to time out. If you encounter similar issues:
*   Ensure your environment has sufficient resources (CPU, memory).
*   You might need to troubleshoot Parcel's interaction with your specific operating system or file system.
*   For basic HTML/CSS viewing without Parcel's processing (e.g., if Parcel fails to run), you might need to temporarily modify `index.html` to use a CDN version of Tailwind CSS (like the Tailwind Play CDN) as was done in earlier development stages of this project.

## Building for Production

To create an optimized production build, run:

```bash
npm run build
```

Alternatively, you can run Parcel directly:

```bash
npx parcel build index.html
```

This command *should* bundle all assets, optimize them, and output the production-ready files into a `dist/` directory.

**Important Note on Parcel Execution:**
Similar to the development server, the production build command might time out in some environments. Please refer to the troubleshooting notes in the "Running the Project (Development)" section.

## Modernization Highlights

This project has undergone several key improvements:

*   **Tailwind CSS Integration:** The entire styling was refactored from vanilla CSS to Tailwind CSS, enabling a utility-first approach.
*   **Build Process:** A Parcel-based build process was set up to handle CSS processing (via PostCSS for Tailwind and Autoprefixer) and asset bundling (though execution was problematic).
*   **Local Asset Management:** Image paths were updated to point to local `assets/images/` (currently placeholder files with URLs), moving away from direct hotlinking for better control and performance once actual assets are downloaded.
*   **JavaScript Refactor:** The mobile navigation icon toggle was refactored to use CSS class manipulation (`hidden` class) instead of direct style property changes, aligning better with Tailwind practices.
*   **Accessibility & UX:**
    *   Placeholder images were replaced with more descriptive ones (via URLs).
    *   Improved color contrast on specific elements.
    *   Enhanced focus states for all interactive elements for better keyboard navigation.
    *   `mailto:` links were made more prominent with icons and improved styling.

---

This README provides a snapshot of the project and its intended setup. For further development, ensuring Parcel runs correctly or choosing an alternative build tool might be necessary.
