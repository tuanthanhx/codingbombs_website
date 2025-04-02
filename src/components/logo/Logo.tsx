import { memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, BoxProps, Link } from '@mui/material';
import Image from '../image';

// ----------------------------------------------------------------------

function Logo({ sx }: BoxProps) {

  const singleLogo = (
    <Image
      src="/assets/images/common/logo.svg"
      alt="CODINGBOMBS"
      sx={{
        width: '100%',
        height: '100%',
      }}
    />
  );

  return (
    <Link
      component={RouterLink}
      to="/"
      color="inherit"
      aria-label="go to homepage"
      sx={{ lineHeight: 0 }}
    >
      <Box
        sx={{
          width: 320,
          objectFit: 'contain',
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          ...sx,
        }}
      >
        {singleLogo}
      </Box>
    </Link>
  );
}

export default memo(Logo);
