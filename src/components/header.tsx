//
// PAGE CREATED AND STYLED BY AN (SUE) NGO
//
import styled from "styled-components";
import { Link } from "react-router-dom";

// This is the styling for the header on top of the page
const StyledHeader = styled.header`
    display: block;
    justify-content: space-between;
    width: 100%;
    top: 0;
    left: 0;
    padding: 1% 0;
    font-family: 'Monaco', sans-serif;
    background-color: #fff8e7;
    font-size: 170%;
    nav {
        font-size: 50%;
        padding-left: 41.5%;
        margin: auto;
        padding-top: 1%;
        
       
      
    }
        nav ul{
      
        }
`;

// Styling for the text in the title area
const Title = styled.h2`
    color: #92140c;
    margin: auto;
    font-family: 'Monaco', sans-serif;
    padding-left: 36%;
`;

// Styling for the navigation links as buttons
const ButtonLink = styled(Link)`
    margin: 0.25rem 1.1rem;
    color: #fff;
    background-color: #92140c;
    padding: 0.5rem 0.75rem;
    border: none;
    border-radius: 5px;
    font-family: 'Monaco', sans-serif;
    text-decoration: none;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border: 1px solid black;
    &:hover {
        background-color: #c71e1a;
    }

    &:active {
        background-color: #8a1009;
    }
`;

// NAVIGATION LINK AREA
function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
    return <ButtonLink to={to}>{children}</ButtonLink>;
}

export default function Header() {
    return (
        //basically the parts of the top area that includes title and nav
        <StyledHeader>
            <Title>WELCOME TO OUR F1 APP!</Title>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/races">Races</NavLink>
                <NavLink to="/drivers">Drivers</NavLink>
            </nav>
        </StyledHeader>
    );
}
