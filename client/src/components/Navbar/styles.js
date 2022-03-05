import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    width:'100%',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
    fontSize: '2vw',
  },
  image: {
    marginLeft: '-40px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    
  },
  profile: {
    display: 'flex',
  },
  userName: {
    width:'20vw',
    fontSize: '1.8vw',
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    widht:'100vw',
  },
  purple: {
    margin:'3%',
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },

}));