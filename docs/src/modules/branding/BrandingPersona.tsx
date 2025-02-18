import * as React from 'react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Box, { BoxTypeMap } from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import t1 from 'docs/src/modules/branding/t1';

interface PersonaRootProps {
  ownerState: { size: 'large' | 'small' };
}

const PersonaRoot: OverridableComponent<BoxTypeMap<PersonaRootProps>> = styled(Box, {
  name: 'Persona',
  slot: 'Root',
})<PersonaRootProps>(({ ownerState, theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  flexDirection: 'column',
  alignItems: 'center',
  '& [class*="MuiAvatar-root"]': {
    width: ownerState.size === 'large' ? 200 : 120,
    height: ownerState.size === 'large' ? 200 : 120,
    marginBottom: theme.spacing(1),
  },
  '& [class*="MuiIconButton-root"]': {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    color: theme.palette.greyAA,
    boxShadow: `0 2px 3px rgba(9, 10, 12, .08)`,
  },
})) as OverridableComponent<BoxTypeMap<PersonaRootProps>>;

interface BrandingPersonaProps {
  github: string;
  location?: string;
  name?: string;
  size?: 'small' | 'large';
  src?: string;
  srcSet?: string;
  title?: string;
  twitter?: string;
}

export default function BrandingPersona(props: BrandingPersonaProps) {
  const { name, src, srcSet, title, location, twitter, github, size = 'large' } = props;
  return (
    <PersonaRoot
      ownerState={{ size }}
      sx={{
        '& img': {
          borderRadius: '50%',
          display: 'block',
          bgcolor: 'greyD7',
          mb: 1,
        },
      }}
    >
      <img
        loading="lazy"
        src={src}
        width={size === 'small' ? 120 : 200}
        height={size === 'small' ? 120 : 200}
        srcSet={srcSet}
        alt=""
      />
      <Typography variant="h4" component="div">
        {name}
      </Typography>
      <Typography sx={{ color: 'grey5A' }} variant="body2">
        {title}
      </Typography>
      <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
        {location}
      </Typography>
      <Stack direction="row" spacing={1}>
        {twitter && (
          <IconButton
            component="a"
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noopener"
            aria-label={t1('twitter')}
          >
            <TwitterIcon />
          </IconButton>
        )}
        <IconButton
          component="a"
          href={`https://github.com/${github}`}
          target="_blank"
          rel="noopener"
          aria-label={t1('github')}
        >
          <GitHubIcon />
        </IconButton>
      </Stack>
    </PersonaRoot>
  );
}
