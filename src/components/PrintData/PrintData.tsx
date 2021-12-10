import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import { StyledData } from '../../styles/PrintData';

interface IPrintData {
  name?: string;
  description?: string;
  stars?: number;
}
export const PrintData = (props: IPrintData) => {
  const width = '100%';
  const maxWidth = '90%';
  const cardMargin = ' 3rem 0rem;';
  const startIconColor = '#FFBF00';

  return (
    <StyledData>
      <Card sx={{ width: width, maxWidth: maxWidth, margin: cardMargin }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
              <PersonIcon />
            </Avatar>
          }
          title={props.name}
          titleTypographyProps={{ variant: 'h6' }}
        />

        <CardContent>
          <Typography variant='body1' color='inherit'>
            {props.description}
          </Typography>
        </CardContent>

        <CardActions>
          <IconButton aria-label='add to favorites'>
            <StarIcon sx={{ color: startIconColor }} />
          </IconButton>
          <p>{props.stars}</p>
        </CardActions>
      </Card>
    </StyledData>
  );
};
