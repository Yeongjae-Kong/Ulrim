import {useTheme, useMediaQuery} from '@material-ui/core';
import './aboutus.css';

function Aboutus() {
    
//media query
const theme = useTheme();
const matches = useMediaQuery(theme.breakpoints.down('xs'));

    return (
    <div className = {matches? 'phonescreen' : 'comscreen'}>
    <img src={require('./image/aboutus2.jpg').default}  width="100%" style={{padding:'50px 20px 50px 20px'}} />
    </div>
    );
}
export default Aboutus;