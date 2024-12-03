import styled from "styled-components";

const AboutDiv = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    background-color : lightblue;
`;

export default function AboutPage() {
    return (
        <AboutDiv>
            <h1>My name is Milo Zurn-Galinsky!</h1>
            <p>I like designing websites and coding and stuff.</p>
            
            <h1>My name is Sue!</h1>
            <p>I am a senior in Computer Science. I love F1 and my favorite team is Ferrari! </p>
        </AboutDiv>
    );
}