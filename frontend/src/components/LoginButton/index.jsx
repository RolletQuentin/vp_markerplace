import { useContext, useState } from "react";
import { AuthContext, ThemeContext } from "../../utils/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import fontawesome from "@fortawesome/fontawesome";
import styled, { keyframes } from "styled-components";

fontawesome.library.add(faUser);

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    width: 50px;
    height: 50px;

    &:hover {
        cursor: pointer;
    }
`;

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    padding-right: 50px;
    padding-bottom: 20px;

    & h2 {
        margin: 5px;
    }
`;

const printAnimation = keyframes`
    from {
        transform: scaleY(0%);
    }
    to {
        transform: scaleY(100%);
    }`;

const LoginWrapper = styled.div`
    position: absolute;
    right: 200px;
    background: linear-gradient(#696484, #8788ba);
    color: white;
    border-radius: 10px;
    transition: ${printAnimation} linear 1s;
    padding: 0px 20px;
    z-index: 1;

    & input {
        font-size: 1em;
        background: transparent;
        border: none;
        border-bottom: 1px solid ${(props) => props.thememode.color};
        color: ${(props) => props.thememode.text};
        margin: 5px;
        padding: 5px;
    }
`;

const Formbutton = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`;

function LoginButton() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const { userState, setUserState, setToken } = useContext(AuthContext);
    const { themeMode } = useContext(ThemeContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            email,
            password,
        };

        const response = await fetch("http://localhost:8000/api/auth/login", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const json = await response.json();
        console.log(json);

        if (!response.ok) {
            setError(json.error);
            console.log(error);
        }
        if (response.ok) {
            localStorage.setItem("user", JSON.stringify(json));
            localStorage.setItem("token", json.token);
            setUserState(json);
            setToken(json.token);
            setError(null);
        }
    };

    return (
        <div>
            <div
                onClick={() =>
                    isLoaded ? setIsLoaded(false) : setIsLoaded(true)
                }
            >
                <StyledFontAwesomeIcon icon="fa-solid fa-user" />
            </div>
            <LoginWrapper thememode={themeMode}>
                {userState["user"] === null ? (
                    isLoaded ? (
                        <>
                            <FormWrapper onSubmit={handleSubmit}>
                                <h2>Se connecter</h2>

                                <input
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                />
                                <input
                                    type="password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="Mot de passe"
                                />

                                <button className="button">Connexion</button>
                            </FormWrapper>

                            <Formbutton>
                                <div>
                                    <a href="/signup">Pas encore inscrit ?</a>
                                </div>
                            </Formbutton>
                        </>
                    ) : null
                ) : isLoaded ? (
                    <button
                        className="button"
                        onClick={() => {
                            setUserState({ user: null });
                            localStorage.removeItem("user");
                            localStorage.removeItem("token");
                        }}
                    >
                        Déconnexion
                    </button>
                ) : null}
            </LoginWrapper>
        </div>
    );
}

export default LoginButton;
