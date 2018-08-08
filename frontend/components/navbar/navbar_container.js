import { connect} from 'react-redux';
import { logout, login, signup } from '../../actions/session_actions';
import NavbarComponent from './navbar_component';

const msp = ({ session }) => ({
    currentUser: session.currentUser
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user))
});

export default connect(
    msp,
    mdp
)(NavbarComponent);