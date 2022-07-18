import { useDispatch, useSelector } from 'react-redux';
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    getUserSnapshot
} from '../../utils/firebase';
import { setUserData } from '../../redux/user';

import './style.css';

const SignIn = () => {
    const dispatch = useDispatch();

    const user = useSelector(store => store.user.user);
    const logged = useSelector(store => store.user.logged);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        const userSnapshot = await getUserSnapshot(userDocRef);
        console.log({ user, userDocRef, userSnapshot });
        console.log({ id: userSnapshot._key.path.segments[1] });
        console.log({ displayName: userSnapshot._document.data.value.mapValue.fields.displayName.stringValue });
        console.log({ email: userSnapshot._document.data.value.mapValue.fields.email.stringValue });
        console.log({ createdAt: userSnapshot._document.data.value.mapValue.fields.createdAt.timestampValue });
        dispatch(setUserData(
            userSnapshot._document.data.value.mapValue.fields.displayName.stringValue,
            userSnapshot._document.data.value.mapValue.fields.email.stringValue,
            userSnapshot._document.data.value.mapValue.fields.displayName.stringValue
        ));
    }

    return (
        <div className='bar'>
            <div>&nbsp;</div>
            <div>
            {logged ?
                <span>{user.displayName}&nbsp;</span> :
                <button onClick={logGoogleUser}>
                    Sign in with Google Popup
                </button>
            }
            </div>

        </div>
    )

}

export default SignIn