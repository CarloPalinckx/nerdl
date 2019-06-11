import styled from 'styled-components';

const Nav = styled.nav`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    padding: 12px 24px;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    color: #fff;
    display: flex;
    gap: 10px;
`;

export default Nav;
