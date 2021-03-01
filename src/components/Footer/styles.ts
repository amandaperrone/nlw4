import styled from 'styled-components';

export const Container = styled.div`
    height: 10vh;
    background: ${props => props.theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: space-around;
`;