import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { useState } from "react";


const Login = () => {
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user)
                setUser(result.user);
            })
            .catch(error => {
                console.log("error", error)
                setUser(null);
            })
    }
    const handleGitHubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch((error) => {
                console.log("error", error)
                setUser(null);
            })
    }
    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign out done');
            setUser(null);
        }).catch((error) => {
            console.log("error", error)
        });
    }
    return (
        <div>
            {/* <button onClick={handleGoogleSignIn}>Login with Google</button>
            <button onClick={handleSignOut}>Sign Out</button> */}
            {user ? <button onClick={handleSignOut}>Sign Out</button>
                : <>
                    <button onClick={handleGoogleSignIn}>Log In With Google</button>
                    <button onClick={handleGitHubSignIn}>Log In with Github</button>
                </>}
            {user && <div>
                <h4>{user.displayName}</h4>
                <p>Email :{user.email}</p>
                <img src={user.photoURL} />
            </div>}
        </div>
    );
};

export default Login;