import { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../utils/context";

const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 15px;
    padding: 5px;
`;

const StyledForm = styled.form`
    margin: auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: begin;

    & .bigLabel {
        font-size: 2em;
        margin: 0px 15px 0px 0px;
    }

    & input,
    & textarea {
        font-size: 2em;
        background: transparent;
        border: none;
        border-bottom: 1px solid ${(props) => props.thememode.color};
        color: ${(props) => props.thememode.text};
        margin: 15px;
        padding: 5px;
    }

    & input[type="radio"] {
    }

    & input:focus,
    & textarea:focus {
        outline: none;
        border-bottom: 1px solid orange;
    }

    & input[type="text"],
    & input[type="date"] {
        width: 100%;
    }
`;

const NameWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

function Contact() {
    const [firstname, setFirstname] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [, setGender] = useState();
    const [job, setJob] = useState();
    const [birthday, setBirthday] = useState();
    const [object, setObject] = useState("");
    const [content, setContent] = useState("");
    const { themeMode } = useContext(ThemeContext);

    // Fonction pour valider le prénom et le nom
    function validateName(name) {
        const res = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name);
        if (!res) {
            alert(
                "Merci de remplir un prénom valide (les chiffres ne sont pas acceptés)"
            );
        }
        return res;
    }

    // Fonction pour valider l'adresse email
    function validateEmail(email) {
        const trimmedEmail = email.trim();
        const res = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
        if (!res) {
            alert("Merci de remplir une email valide.");
        }
        return res;
    }

    // Fonction pour valider la date de naissance
    function validateBirthday(birthday) {
        const today = new Date();
        const selectedDate = new Date(birthday);
        const res = selectedDate <= today;
        if (!res) {
            alert(
                "Merci de donner une date de naissance antérieur à celle d'aujourd'hui."
            );
        }
        return res;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            validateName(firstname) &&
            validateName(name) &&
            validateEmail(email) &&
            validateBirthday(birthday)
        ) {
            // pour envoyer le form plus tard
        }
    };

    return (
        <StyledForm action="" thememode={themeMode}>
            <NameWrapper>
                <input
                    type="text"
                    value={firstname}
                    placeholder="Prénom"
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                    thememode={themeMode}
                />

                <input
                    type="text"
                    value={name}
                    placeholder="Nom"
                    onChange={(e) => setName(e.target.value)}
                    required
                    thememode={themeMode}
                />
            </NameWrapper>

            <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
                thememode={themeMode}
            />

            <Box>
                <label className="bigLabel">Genre :</label>
                <label>Homme</label>
                <input
                    name="gender"
                    type="radio"
                    value="male"
                    onChange={(e) => setGender(e.target.value)}
                    required
                />
                <label>Femme</label>
                <input
                    name="gender"
                    type="radio"
                    value="female"
                    onChange={(e) => setGender(e.target.value)}
                    required
                />
                <label>Autre</label>
                <input
                    name="gender"
                    type="radio"
                    value="other"
                    onChange={(e) => setGender(e.target.value)}
                    required
                />
                <label>Préfère ne pas dire</label>
                <input
                    name="gender"
                    type="radio"
                    value="preferNotToSay"
                    onChange={(e) => setGender(e.target.value)}
                    required
                />
            </Box>

            <Box>
                <label className="bigLabel"> Métier :</label>
                <select
                    className="select"
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                    required
                >
                    <option value="">-- Sélectionnez un métier --</option>
                    <option value="developer">Développeur</option>
                    <option value="designer">Designer</option>
                    <option value="manager">Manager</option>
                    <option value="sales">Vendeur</option>
                </select>
            </Box>

            <Box>
                <label className="bigLabel">Date de naissance :</label>
                <input
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required
                    thememode={themeMode}
                />
            </Box>

            <input
                type="text"
                value={object}
                placeholder="Objet"
                onChange={(e) => setObject(e.target.value)}
                required
                thememode={themeMode}
            />
            <textarea
                value={content}
                placeholder="Écrire votre message ici"
                onChange={(e) => setContent(e.target.value)}
                required
                thememode={themeMode}
            />

            <button className="button" onClick={handleSubmit}>
                Envoyer
            </button>
        </StyledForm>
    );
}

export default Contact;
