# AutoRAG Demo

A web application that demonstrates search functionality with both regular and AI-powered search capabilities. The application uses [Cloudflare AutoRAG](https://developers.cloudflare.com/autorag/) to provide the search functionality.

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

### Installation

```bash
npm install
```

### Development

To run the application in development mode:

```bash
npm run dev
```

### Deployment

To deploy the application:

```bash
npm run deploy
```

## Usage

1. Open the application in your web browser
2. Uncomment the `/url` endpoint in the [src/index.ts](src/index.ts) file
3. Create an R2 bucket in the Cloudflare dashboard and update the `wrangler.jsonc` file
4. Create and configure AutoRAG to use this bucket
5. Run the application and make a post request to `/url` endpoint passing the url of the blog page
6. On the AutoRAG dashboard, you will see the blog page getting indexed
7. When ready, navigate to the app and enter your search query in the text input field
8. Select the search type (Regular/AI)
9. View the results displayed in a card-based layout

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
