import {Grid, Link, Typography} from '@mui/material'
import {header} from '../portfolio'
import NavTabs from './NavTabs'

const Header = () => {
  const {homepage, title} = header

  return (
    <Grid
      container
      spacing={2}
      bgcolor={'#cfe8fc'}
      p={1}
      m={1}
      alignItems={'center'}
    >
      <Grid xs={4}>
        <Typography variant='h3' textAlign={'start'} m={1}>
          {homepage ? <Link href={homepage}>{title}</Link> : title}
        </Typography>
      </Grid>

      <Grid xs={6}>
        <NavTabs />
      </Grid>

      <Grid xs={2}>
        <Typography textAlign={'end'} m={1}>
          {homepage ? (
            <Link href={homepage}>
              <img src={'logo.png'} width={50} height={50} alt='Logo' />
            </Link>
          ) : (
            title
          )}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Header
