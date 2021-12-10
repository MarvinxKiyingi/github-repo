import { StyledGithubLogo } from '../../styles/GithubLogo';
import GitHubIcon from '@mui/icons-material/GitHub';

export const GitHubLogo = () => {
  return (
    <StyledGithubLogo>
      <GitHubIcon fontSize='inherit' className='gitIconWrapper' />
    </StyledGithubLogo>
  );
};
