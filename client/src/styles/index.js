import SubNavImage from "../assets/images/brass-metallic.jpg";

// Main Navbar Styling

const mainNavStyle = {
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

const subNavStyle = {
    backgroundImage: `url(${SubNavImage})`,
    margin: "2%",
    borderRadius: "20px",
    fontFamily: "'Noto Sans JP', sans-serif"
};

// Landing Page Styling

const landingStyle = {
    imgTop: {
        marginLeft: "-1.8%",
        // marginTop: "-3%"
    },
    imgBottom: {
        marginBottom: "-2%",
        marginTop: "-3.85%"
    },
    header1: {
        textAlign: "center",
        fontFamily: "'Noto Sans JP', sans-serif"
    },
    header2: {
        textAlign: "center",
        marginTop: "-3%",
        fontFamily: "'Noto Sans JP', sans-serif"
    }
};

//Home Page Styling

const homeStyle = {
    text: {
        fontFamily: "'Noto Sans JP', sans-serif",
        fontSize: "16px"
    },
    item: {
        fontSize: "24px",
        fontFamily: "'Noto Sans JP', sans-serif"
    }
};

//Shows Styling

const showStyle = {
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

const contactStyle = {
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

const proGearStyle = {
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

const liveMusicStyle = {
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
    },
    image: {
        width: "218px",
        height: "280px"
    }
};

//Footer Styling

const footerStyle = {
    container: {
        computer: {
            marginTop: "4.5%",
            backgroundColor: "#3d413f"
        },
        largescreen: {
            marginTop: "8%",
            backgroundColor: "#3d413f",
            height: "210px"
        },
        widescreen: {
            marginTop: "9%",
            backgroundColor: "#3d413f",
            height: "200px"
        }
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
    footerStyle,
    landingStyle
};