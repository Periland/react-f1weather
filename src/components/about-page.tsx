//
//
// PAGE CREATED AND STYLED BY AN (SUE) NGO
//
//
import JoseImage from "../jose.png";
import MiloImage from "../milo.png";
import SueImage from "../sue.png";
import AwadImage from "../awad.png";

// this is the home page
import styled from "styled-components";

const AboutDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #92140c;
    height: 100vh;
    color: #fff8f0;
    font-family: 'Monaco', sans-serif;
    font-size: calc(2px + 0.65vw);
    
`;

const PersonContainer = styled.div`
    display: flex;
    
    justify-content: space-between;
    align-items: center;
    width: 60%;
    margin: 0.7rem 0;
    background-color: #fff8e7;
    color: #1e1e24;
    border-radius: 10px;
    padding: 1%;
    &:nth-child(even) {
        flex-direction: row-reverse; 
    }
`;

const Image = styled.img`
    width: 200px;
    height: auto;
    
    border-radius: 8px;
    
`;

const TextContainer = styled.div`
    flex: 3;
    text-align: center;
   
`;

export default function AboutPage() {
    return (
        <AboutDiv>
            <PersonContainer>
                <Image src={JoseImage} alt="Jose" />
                <TextContainer>
                    <h1>Jose Amusategui</h1>
                    <p>My name is Jose Maria Amusategui Garcia Peri and I am a senior majoring in Computer Science at Boston University with a minor in Business Administration. I am originally from Madrid, Spain and I have been living in the United States for the past 4 years. I am very interested in technology a whole and I hope to be able to use my skills to help develop impactful software.</p>
                </TextContainer>
            </PersonContainer>

            <PersonContainer>
                <Image src={MiloImage} alt="Milo" />
                <TextContainer>
                    <h1>Milo Zurn-Galinsky</h1>
                    <p>My name is Milo Zurn-Galinsky. I am a senior studying at Boston University graduating with a Bachelors in Computer Science. I am eager to use my strong academic background to gain further hands-on experience in the field. I have a strong work ethic and problem solving skills. I wish to pursue opportunities where I can continuously learn and make a meaningful impact.</p>
                </TextContainer>
            </PersonContainer>

            <PersonContainer>
                <Image src={SueImage} alt="Sue" />
                <TextContainer>
                    <h1>An (Sue) Ngo</h1>
                    <p>I’m An (Sue) Ngo, a senior majoring in Computer Science. I’m deeply interested in web development, distributed systems, and hardware technologies, and I enjoy working on projects with groupmates. Outside of academics, I’m a big fan of Formula 1 racing, and my favorite team is Ferrari! I also love exploring new ideas, solving challenging problems, and collaborating with others to bring ambitious projects to life</p>
                </TextContainer>
            </PersonContainer>

            <PersonContainer>
                <Image src={AwadImage} alt="Awad" />
                <TextContainer>
                    <h1>Awad </h1>
                    <p>I’m An (Sue) Ngo, a senior majoring in Computer Science. I’m deeply interested in web development, distributed systems, and hardware technologies, and I enjoy working on projects with groupmates. Outside of academics, I’m a big fan of Formula 1 racing, and my favorite team is Ferrari! I also love exploring new ideas, solving challenging problems, and collaborating with others to bring ambitious projects to life</p>
                </TextContainer>
            </PersonContainer>
        </AboutDiv>
    );
}
