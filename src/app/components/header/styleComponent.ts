import { Button, Collapse, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const Image = styled.img`
  width: '100%';
  max-width: 8rem;
`

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 10px 20px;
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0px;
  z-index: 1000;
  @media screen and (min-width: 1210px) {
    padding: 20px 0px;
    padding-left: 80px;
    padding-right: 80px;
  }
`
const NavLink = styled(Link)`
  font-family: ${({ theme }: any) => theme.fonts.Poppins};
  text-decoration: none;
  color: ${({ theme }: any) => theme.colors.blackPrimary};
  font-weight: ${(props: { active?: boolean }) =>
    props.active ? '600' : '400'};
  font-size: 18px;
  &:hover {
    color: ${({ theme, color }: any) => (color ? color : theme.colors.primary)};
    font-weight: 600;
  }
`

const NavLinkIcon = styled(Link)`
  text-decoration: none;
  color: ${({ theme }: any) => theme.colors.blackPrimary};
  &:hover {
    color: ${({ theme }: any) => theme.colors.primary};
    font-weight: 600;
  }
  @media (max-width: 910px) {
    display: none;
  }
`

const NavBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 910px) {
    display: none;
  }
`

const ColNav = styled(Collapse)`
  width: 100%;
  background: rgba(245, 246, 248, 0.17);
  box-shadow: 0 4px 30px rgb(0 0 0 / 4%);
  backdrop-filter: blur(8.8px);
  -webkit-backdrop-filter: blur(8.8px);
  padding: 10px;
  display: flex;
  position: fixed;
  z-index: 1000;
  top: 88px;
  flex-direction: row-reverse;
  text-align: right;
`

const BtnIcon = styled(Button)`
  color: ${({theme}: any) => theme.colors.greySecondary};
  background-color: transparent;
  border: 1px solid ${({theme}: any) => theme.colors.greySecondary};
  &:hover {
    color: ${({theme}: any) => theme.colors.blackSecondary};
    background-color: transparent;
    border: 1px solid ${({theme}: any) => theme.colors.blackSecondary};
  }
  @media screen and (min-width: 910px) {
    display: none;
  }
`

const NavItemBar = styled(NavItem)`
  padding-top: 8px;
  padding-bottom: 8px;
`

export {
    Image,
    Box,
    NavLink,
    NavLinkIcon,
    NavBox,
    ColNav,
    BtnIcon,
    NavItemBar
}