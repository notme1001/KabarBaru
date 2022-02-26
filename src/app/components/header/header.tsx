import React, {useState} from 'react';
import Logo from '../../assets/images/logo.png'
import { FaSearch, FaAlignRight } from 'react-icons/fa'
import { useLocation, useParams } from 'react-router-dom'
import { Nav } from 'reactstrap'
import {
    Image,
    Box,
    NavLink,
    NavLinkIcon,
    NavBox,
    ColNav,
    BtnIcon,
    NavItemBar
} from './styleComponent'

const Header: React.FC = () => {
    const [collapse, setCollapse] = useState(false)
    const loc = useLocation()

    return (
        <>
            <Box>
                <NavLink to="/">
                    <Image src={Logo} />
                </NavLink>
                    <NavBox>
                        <NavLink active={loc?.pathname == '/'} to="/">Top News</NavLink>
                        <NavLink active={loc?.pathname == '/business'} to="/business">Business</NavLink>
                        <NavLink active={loc?.pathname == '/entertainment'} to="/entertainment">Entertainment</NavLink>
                        <NavLink active={loc?.pathname == '/health'} to="/health">Health</NavLink>
                        <NavLink active={loc?.pathname == '/science'} to="/science">Science</NavLink>
                        <NavLink active={loc?.pathname == '/sports'} to="/sports">Sports</NavLink>
                        <NavLink active={loc?.pathname == '/technology'} to="/technology">Technology</NavLink>
                    </NavBox>

                    <NavLinkIcon to="/search">
                        <FaSearch />
                    </NavLinkIcon>

                <BtnIcon
                    color="primary"
                    onClick={() => setCollapse(!collapse)}
                >
                    <FaAlignRight />
                </BtnIcon>
            </Box>

            <ColNav isOpen={collapse}>
                <Nav navbar>
                    <NavItemBar>
                        <NavLink active={loc?.pathname == '/'} to="/">Top News</NavLink>
                    </NavItemBar>
                    <NavItemBar>
                        <NavLink active={loc?.pathname == '/business'} to="/business">Business</NavLink>
                    </NavItemBar>
                    <NavItemBar>
                        <NavLink active={loc?.pathname == '/entertainment'} to="/entertainment">Entertainment</NavLink>
                    </NavItemBar>
                    <NavItemBar>
                        <NavLink active={loc?.pathname == '/health'} to="/health">Health</NavLink>
                    </NavItemBar>
                    <NavItemBar>
                        <NavLink active={loc?.pathname == '/science'} to="/science">Science</NavLink>
                    </NavItemBar>
                    <NavItemBar>
                        <NavLink active={loc?.pathname == '/sports'} to="/sports">Sports</NavLink>
                    </NavItemBar>
                    <NavItemBar>
                        <NavLink active={loc?.pathname == '/technology'} to="/technology">Technology</NavLink>
                    </NavItemBar>
                    <NavItemBar>
                        <NavLink active={loc?.pathname == '/search'} to="/search">
                            Search <FaSearch />
                        </NavLink>
                    </NavItemBar>
                </Nav>
            </ColNav>
        </>
    )
}

export default Header