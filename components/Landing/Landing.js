import style from 'styled-components';

const Landing = style.section`
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url('/img/landing.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 100vh;
`;

export default Landing;