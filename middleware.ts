import { authMiddleware } from "@clerk/nextjs";

const middleware = authMiddleware();

export default middleware;

export const config = {
  api: {
    bodyParser: false, // Enable reading of request body
  },
  ignoredRoutes: [
    "/_next/static/chunks", // Adjust this based on your project structure
  ],
};

// Exporting the middleware function directly for use in API routes
export { middleware };
