import styled from "styled-components";
import InstagramLogo from "../../asset/logoInstagram.png";
import FacebookLogo from "../../asset/logoFacebook.png";
import YoutubeLogo from "../../asset/logoYoutube.png";
import TwitterLogo from "../../asset/logoTwitter.png";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context";

const PanelWrapper = styled.div`
    position: fixed;
    height: 250px;
    width: 50px;
    left: 0px;
    top: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > div {
        width: 50px;
        height: 50px;
        background: orange;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    & .description {
        color: white;
        width: 250px;
        height: 50px;
        flex-shrink: 0;
        transform-origin: left;
        transform: scaleX(0%);
        background: orange;
        justify-content: center;
        align-items: center;
        font-size: 2em;
        align-self: center;
    }

    & > div:hover .description {
        transform-origin: left;
        transition: 500ms ease;
        transform: scaleX(100%);
    }
`;

const ImageWrapper = styled.img`
    display: flex;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
`;

function LeftPanel() {
    const { themeMode } = useContext(ThemeContext);
    return (
        <PanelWrapper thememode={themeMode}>
            <div>
                <ImageWrapper src={FacebookLogo} />
                <div className="description">Facebook</div>
            </div>
            <div>
                <ImageWrapper src={TwitterLogo} />
                <div className="description">Twitter</div>
            </div>
            <div>
                <ImageWrapper src={InstagramLogo} />
                <div className="description">Instagram</div>
            </div>
            <div>
                <ImageWrapper src={YoutubeLogo} />
                <div className="description">Youtube</div>
            </div>
        </PanelWrapper>
    );
}

export default LeftPanel;
