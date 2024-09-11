import React from 'react';
import { Button } from '@/components/ui/button';

const GITHUB_CLIENT_ID = 'Ov23liLPMojCyXg56ENb'; // Replace with your GitHub Client ID
const REDIRECT_URI = 'http://localhost:5173/github'; // Ensure this matches the callback URL set in GitHub

const GitHubPage: React.FC = () => {
  const handleGitHubLogin = () => {
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
    window.location.href = authUrl;
  };

  return (
    <Button
      onClick={handleGitHubLogin}
      style={{ maxWidth: '180px', cursor: 'pointer' }}
    >
      GitHub
    </Button>
  );
};

export default GitHubPage;
