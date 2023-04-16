import { useState } from "react";
import styled from "styled-components";
import LoginButton from "../LoginButton";

const ProfileWrapper = styled.div``;

function Profile() {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <ProfileWrapper>
            <LoginButton />
        </ProfileWrapper>
    );
}

export default Profile;
