# URL Shortener

## Project Structure

```bash
urlshortener-fe/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── UrlForm.js
│   │   ├── ResultPanel.js
│   │   ├── QrModal.js
│   │   ├── Navbar.js
│   │   └── BrandHeader.js
│   ├── hooks/
│   │   └── useHeadResources.js
│   ├── lib/
│   │   ├── api.js
│   │   └── url.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .env.example
├── package.json
└── README.md
```

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (usually comes with Node.js) or **yarn**
- **Backend API** (the Go URL shortener service) running

## Installation & Setup

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/jmiryas/urlshortener-fe.git
    cd urlshortener-fe
    ```

2.  Install dependencies:

    ```bash
    npm install
    # or if you use yarn
    yarn install
    ```

3.  Set up environment variables:

    ```bash
    cp .env.example .env
    ```

4.  Start the development server:

    ```bash
    npm start
    # or
    yarn start
    ```

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```
