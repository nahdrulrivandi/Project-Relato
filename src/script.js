//MENU SLIDER START
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const iconHamburger = document.getElementById("icon-hamburger");
const iconClose = document.getElementById("icon-close");

//Buka tutup lewat icon
menuBtn.addEventListener("click",(e) =>{
    e.stopPropagation();
    //slider
    mobileMenu.classList.toggle("translate-x-full");

    //toggle icons
    iconHamburger.classList.toggle("hidden");
    iconClose.classList.toggle("hidden");
});

//klik di luar sidebar
document.addEventListener("click", (e) =>{
    const isClickInsideMenu = mobileMenu.contains(e.target);
    const isClickOnButton = menuBtn.contains(e.target);

    if(!isClickInsideMenu && !isClickOnButton){
        if(!mobileMenu.classList.contains("translate-x-full")){
            mobileMenu.classList.add("translate-x-full");

            iconHamburger.classList.remove("hidden");
            iconClose.classList.add("hidden");
        }
    }
});
//MENU SLIDER END   


// SCROLLING NAVBAR START
const navbar = document.getElementById("navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll",() =>{
    const currentScrollY = window.scrollY;

    if(currentScrollY > lastScrollY){
        navbar.classList.add("-translate-y-full");
    }else{
        navbar.classList.remove("-translate-y-full");
    }

    lastScrollY = currentScrollY;
});
//SCROLLING NAVBAR END


//FEATURE MOBILE & TABLET START
const dataFeature = {
    overview:{
        title:"Business Performance at a Glance",
        desc: "Tracnk revenue and deal progress in one clear dashboard",
        image:"Assets/Feature Image - Overview.svg"
    },

    tasks:{
        title:"Task Management",
        desc:"Stay on top of priorities and track progress effortlessly",
        image:"Assets/Feature Image - Task.svg"
    },

    chat: {
        title: "Customer Interaction",
        desc: "Manage all conversations in one centralized inbox",
        image: "Assets/Feature Image - Omnichannel.svg"
    },

    automation:{
        title:"Workflow Automation",
        desc:"Automate repetitive tasks and save valuable time",
        image:"Assets/Feature Image - Status.svg"
    }
};

const tabs = document.querySelectorAll(".feature-tab");
const titleFeature = document.getElementById("feature-title");
const descFeature = document.getElementById("feature-desc");
const imageFeature = document.getElementById("feature-image");

tabs.forEach((tab) => {
    tab.addEventListener("click", () =>{
        const key = tab.dataset.feature;
        const data = dataFeature[key];

        //reset all active icon
        tabs.forEach(t => {
            t.classList.remove("active");
            t.src = t.dataset.outlined;
        });

        // update active state
        tab.classList.add("active");
        tab.src = tab.dataset.filled;

        //update content
        titleFeature.textContent = data.title;
        descFeature.textContent = data.desc;
        imageFeature.src = data.image;
    });
});
//FEATURE MOBILE & TABLET END


//FEATURE DESKTOP START
const desktopTabs = document.querySelectorAll(".feature-desktop-tab");
const desktopImage = document.getElementById("feature-desktop-image");

desktopTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const feature = tab.dataset.feature;

        desktopTabs.forEach(t => {
            t.classList.remove("active");
            t.classList.remove("bg-[linear-gradient(135deg,#ffffff_70%,#EAF5F6_100%)]");
            t.classList.replace("border-[#0099A7]", "border-abu100");
        });

        tab.classList.add("active");
        tab.classList.add("bg-[linear-gradient(135deg,#ffffff_70%,#EAF5F6_100%)]");
        tab.classList.replace("border-abu100", "border-[#0099A7]");

        desktopImage.src = dataFeature[feature].image;
    });
});
//FEATURE DEKSTOP END
