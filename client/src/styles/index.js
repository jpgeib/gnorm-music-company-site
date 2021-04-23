import SubNavImage from "../assets/images/brass-metallic.jpg";

// Main Navbar Styling

export const mainNavStyle = {
    navbar: {
        margin: "0 auto",
        backgroundColor: "#9a9a9a",
        width: "754px"
    },
    gnormBanner: {
        margin: "0 auto",
        marginTop: "5%"
    },
    navItem: {
        color: "white"
    }
};

//Sub Navbar Styling

export const subNavStyle = {
    backgroundImage: `url(${SubNavImage})`,
    margin: "2%",
    borderRadius: "20px"
};

//Contact Page Styling

export const contactInfoStyle = {
    header: {
        marginBottom: "-7%"
    },
    emailLink: {
        textDecorationLine: "underline",
        color: "#670001"
    }
};

// Pro Gear Page Styling

export const proGearStyle = {
    container: {
        margin: "0 auto",
        width: "754px",
        backgroundColor: "white",
        overflowY: "auto",
        maxHeight: "580px"
    },
    link: {
        textDecorationLine: "underline",
        color: "#670001"
    }
};

// Live Music Page Styling

export const liveMusicStyle = {
    container: {
        margin: "0 auto",
        width: "754px",
        backgroundColor: "white",
        overflowY: "auto",
        maxHeight: "480px"
    },
    video: {
        width: "300px",
        height: "200px"
    },
    text: {
        fontFamily: "'Noto Sans JP', sans-serif"
    }
};