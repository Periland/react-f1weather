//
//
// PAGE CREATED AND STYLED BY AN (SUE) NGO
//
//

// Importing images for each person
import JoseImage from "../jose.png";
import MiloImage from "../milo.png";
import SueImage from "../sue.png";
import AwadImage from "../awad.png";

// Importing styled-components for styling
import styled from "styled-components";

// Styling for the main container of the About Page
const AboutDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #92140c; // Dark red background for the entire page
    height: 100vh;
    color: #fff8f0; // Light beige text color
    font-family: 'Monaco', sans-serif; // Using a built-in monospaced font
    font-size: calc(2px + 0.65vw); // Responsive font size
`;

// Styling for each person's container
const PersonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%; // Restricting the width for better alignment
    margin: 0.7rem 0; // Spacing between each container
    background-color: #fff8e7; // Light beige background for individual boxes
    color: #1e1e24; // Dark text for contrast
    border-radius: 10px; // Rounded corners for a softer look
    padding: 1%; // Padding inside the container

    &:nth-child(even) {
        flex-direction: row-reverse; // Reverses the layout for even items to alternate the image position
    }
`;

// Styling for the images inside each person's container
const Image = styled.img`
    width: 200px; // Fixed width for images
    height: auto; // Maintain aspect ratio
    border-radius: 8px; // Slightly rounded corners for the images
`;

// Styling for the text content inside each person's container
const TextContainer = styled.div`
    flex: 3; // Takes more space to balance with the image
    text-align: center; // Center-align text content
`;

// Main functional component for the About Page
export default function AboutPage() {
    return (
        <AboutDiv>
            {/* Container for Jose */}
            <PersonContainer>
                <Image src={JoseImage} alt="Jose" />
                <TextContainer>
                    <h1>Jose Amusategui</h1>
                    <p>My name is Jose Maria Amusategui Garcia Peri and I am a senior majoring in Computer Science at Boston University with a minor in Business Administration. I am originally from Madrid, Spain and I have been living in the United States for the past 4 years. I am very interested in technology a whole and I hope to be able to use my skills to help develop impactful software.</p>
                </TextContainer>
            </PersonContainer>

            {/* Container for Milo */}
            <PersonContainer>
                <Image src={MiloImage} alt="Milo" />
                <TextContainer>
                    <h1>Milo Zurn-Galinsky</h1>
                    <p>My name is Milo Zurn-Galinsky. I am a senior studying at Boston University graduating with a Bachelors in Computer Science. I am eager to use my strong academic background to gain further hands-on experience in the field. I have a strong work ethic and problem solving skills. I wish to pursue opportunities where I can continuously learn and make a meaningful impact.</p>
                </TextContainer>
            </PersonContainer>

            {/* Container for Sue */}
            <PersonContainer>
                <Image src={SueImage} alt="Sue" />
                <TextContainer>
                    <h1>An (Sue) Ngo</h1>
                    <p>I’m An (Sue) Ngo, a senior majoring in Computer Science. I’m deeply interested in web development, distributed systems, and hardware technologies, and I enjoy working on projects with groupmates. Outside of academics, I’m a big fan of Formula 1 racing, and my favorite team is Ferrari! I also love exploring new ideas, solving challenging problems, and collaborating with others to bring ambitious projects to life</p>
                </TextContainer>
            </PersonContainer>

            {/* Container for Awad */}
            <PersonContainer>
                <Image src={AwadImage} alt="Awad" />
                <TextContainer>
                    <h1>Awad</h1>
                    <p>I’m An (Sue) Ngo, a senior majoring in Computer Science. I’m deeply interested in web development, distributed systems, and hardware technologies, and I enjoy working on projects with groupmates. Outside of academics, I’m a big fan of Formula 1 racing, and my favorite team is Ferrari! I also love exploring new ideas, solving challenging problems, and collaborating with others to bring ambitious projects to life</p>
                </TextContainer>
            </PersonContainer>
        </AboutDiv>
    );
}
