import { connect} from 'react-redux';
import { logout, login, signup, clearErrors } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import NavbarComponent from './navbar_component';



const msp = ({ session }) => ({
    currentUser: session.currentUser
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    loginDemoUser: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    openModal: modal => dispatch(openModal(modal))

});

export default connect(
    msp,
    mdp
)(NavbarComponent);
