import { connect} from 'react-redux';
import { logout, login, signup, clearErrors } from '../../actions/session_actions';
import NavbarComponent from './navbar_component';

const msp = ({ session }) => ({
    currentUser: session.currentUser
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    loginDemoUser: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())

});

export default connect(
    msp,
    mdp
)(NavbarComponent);
