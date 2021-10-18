/* import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

const PrivateDetails = ({ children, ...rest }) => {
    let auth = useAuth();
    console.log("private details");
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/details",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
export default PrivateDetails */