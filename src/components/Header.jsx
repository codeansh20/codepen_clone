
import { AppBar, Toolbar, styled } from "@mui/material"
import Img from '../assets/codepen.png';
const Container = styled(AppBar)`
    background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 7vh;
`;

const Header = () => {
    return (
        <Container>
            <Toolbar>
                <img src={Img} alt="logo" style={{ width: 100, cursor:"pointer",paddingBottom:25}} />
            </Toolbar>
        </Container>
    )
}

export default Header