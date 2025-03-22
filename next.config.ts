import type { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source:'/',
        destination:'/content/latest',
        permanent:true
      },
      {
        source: '/docs/integrations/headless-cms',
        destination: '/content/headless-cms',
        permanent: true,
      },
      {
        source: '/docs/integrations/db',
        destination: '/content/databases',
        permanent: true,
      },
      {
        source: '/docs/integrations/baas',
        destination: '/content/baas',
        permanent: true,
      },
      {
        source: '/docs/integrations/commerce',
        destination: '/content/commerce',
        permanent: true,
      },
      {
        source: '/docs/integrations/hosting',
        destination: '/content/hosting',
        permanent: true,
      },
      {
        source: '/docs/jobs',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/docs/sponsor',
        destination: '/content/sponsor',
        permanent: true,
      },
      // Additional redirects
      {
        source: '/docs/latest',
        destination: '/content/latest',
        permanent: true,
      },
      {
        source: '/docs/learn',
        destination: '/content/learn',
        permanent: true,
      },
      {
        source: '/docs/templates',
        destination: '/content/templates',
        permanent: true,
      },
      {
        source: '/docs/tools',
        destination: '/content/tools',
        permanent: true,
      },
      {
        source: '/docs/real-world-apps',
        destination: '/content/real-world-apps',
        permanent: true,
      },
      {
        source: '/docs/j/:slug',
        destination: '/jobs',
        permanent: true,
      },
    ];
  },
};

export default config;