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
    const userRef = useSelector(store => store.user.userRef);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log({ userRef: userDocRef._key.path.segments[1] });
        const userSnapshot = await getUserSnapshot(userDocRef);
        console.log({ user, userDocRef, userSnapshot });
        console.log({ id: userSnapshot._key.path.segments[1] });
        console.log({ displayName: userSnapshot._document.data.value.mapValue.fields.displayName.stringValue });
        console.log({ email: userSnapshot._document.data.value.mapValue.fields.email.stringValue });
        console.log({ createdAt: userSnapshot._document.data.value.mapValue.fields.createdAt.timestampValue });
        dispatch(setUserData(
            userSnapshot._document.data.value.mapValue.fields.displayName.stringValue,
            userSnapshot._document.data.value.mapValue.fields.email.stringValue,
            userSnapshot._document.data.value.mapValue.fields.displayName.stringValue,
            userDocRef._key.path.segments[1]
        ));
    }

    return (
        <div className='bar'>
            <div>&nbsp;</div>
            <div>
                {userRef ?
                    <span>{user.displayName}</span> :
                    <button onClick={logGoogleUser}>
                        Sign in with Google Popup
                    </button>
                }&nbsp;
            </div>

        </div>
    )

}

export default SignIn