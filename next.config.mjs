import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import withTM from 'next-transpile-modules';

// Load environment variables from .env file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: `${__dirname}/.env` });

// Transpile required modules
const withTranspile = withTM(['rc-util', '@ant-design/icons', 'rc-pagination', 'rc-picker']);

const nextConfig = {
  reactStrictMode: true,
  // Other Next.js configurations
};

export default withTranspile(nextConfig);
