import style from 'styled-components';

const Landing = style.section`
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('/img/landing.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 100vh;
`;

export default Landing;