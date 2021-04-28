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
        color: "white",
        fontFamily: "'Noto Sans JP', sans-serif"
    }
};

//Sub Navbar Styling

export const subNavStyle = {
    backgroundImage: `url(${SubNavImage})`,
    margin: "2%",
    borderRadius: "20px",
    fontFamily: "'Noto Sans JP', sans-serif"
};

//Home Page Styling

export const homeStyle = {
    text: {
        fontFamily: "'Noto Sans JP', sans-serif"
    },
    item: {
        fontSize: "24px"
    }
};

//Shows Styling

export const showStyle = {
    text: {
        header: {
            fontFamily: "'Noto Sans JP', sans-serif"
        },
        subheader: {
            fontFamily: "'Noto Sans JP', sans-serif",
            textAlign: "center"
        },
        link: {
            fontFamily: "'Noto Sans JP', sans-serif",
            textAlign: "center",
            textDecorationLine: "underline",
            color: "#670001"
        }
    }
};

//Contact Page Styling

export const contactStyle = {
    header: {
        marginBottom: "-7%",
        fontFamily: "'Noto Sans JP', sans-serif"
    },
    emailLink: {
        textDecorationLine: "underline",
        color: "#670001",
        fontFamily: "'Noto Sans JP', sans-serif"
    },
    text: {
        fontFamily: "'Noto Sans JP', sans-serif"
    }
};

// Pro Gear Page Styling

export const proGearStyle = {
    container: {
        margin: "0 auto",
        width: "754px",
        backgroundColor: "white",
        overflowY: "auto",
        maxHeight: "480px"
    },
    link: {
        textDecorationLine: "underline",
        color: "#670001",
        fontFamily: "'Noto Sans JP', sans-serif"
    },
    text: {
        fontFamily: "'Noto Sans JP', sans-serif"
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

//Footer Styling

export const footerStyle = {
    container: {
        marginTop: "4.5%",
        backgroundColor: "#3d413f"
    },
    copyright: {
        color: "white",
        marginLeft: "2%",
        fontFamily: "'Noto Sans JP', sans-serif"
    },
    guitar: {
        margin: "0 auto"
    }
}

//Aggregate Styling

export const websiteStyle = {
    mainNavStyle,
    subNavStyle,
    homeStyle,
    showStyle,
    liveMusicStyle,
    proGearStyle,
    contactStyle,
    footerStyle
};