// change image second section
let img = document.getElementById("payrollImage");
let payroll = document.getElementById("payroll");
let expenses = document.getElementById("expenses");
let vat = document.getElementById("vat");
let report =document.getElementById("report")

payroll.addEventListener("click",()=>{
    img.src="../assests/image/payroll.webp"
})
expenses.addEventListener("click",()=>{
    img.src="../assests/image/expenses.webp"
})
vat.addEventListener("click",()=>{
    img.src="../assests/image/vat-returns.webp"
})
report.addEventListener("click",()=>{
    img.src="../assests/image/reporting.webp"
})

// change TABS bg-color when i click on button

const tabs = document.querySelectorAll(".tabs  li");
const tabContent = document.querySelectorAll(".content")
const btn = document. querySelectorAll("li button")
tabs.forEach((tab,index)=>{
tab.addEventListener("click",()=>{
    tabs.forEach((tab)=>{
        tab.classList.remove("live")
        
    })

    tabContent.forEach((content)=>{
        content.classList.remove("active")
    })

    btn.forEach((tab)=>{
        tab.classList.remove("color")
    })

    btn[index].classList.add("color")
    tabContent[index].classList.add("active")
    tabs[index].classList.add("live")
    
})
})




// change color not to work hover effect after changing color
// second section left
const groups = document.querySelectorAll(".divGroup .gp");
groups.forEach((group,index)=>{
group.addEventListener("click",()=>{
    groups.forEach((group)=>{
        group.classList.remove("change");
    })
    groups[index].classList.add("change")
})
})
// second section move image in moblie device
let Btn1 =  document.querySelector(".btn1");
let Btn2 = document.querySelector(".btn2")
let Btn3 = document.querySelector(".btn3")
let Image1 = document.querySelector(".img1")


    Btn1.addEventListener("click",()=>{
        Image1.style.marginLeft="";
        Image1.style.transition="0.3s"
     })
     Btn2.addEventListener("click",()=>{
        Image1.style.marginLeft="-31%";
        Image1.style.transition="0.3s"
     })
     Btn3.addEventListener("click",()=>{
        Image1.style.marginLeft="-65%";
        Image1.style.transition="0.3s"
     })

    
// menu
let menu = document.querySelector(".menu");
let openMenu = document.querySelector(".open-menu")
let closeMenu = document.querySelector(".close-menu")

openMenu.addEventListener("click",()=>{
    menu.style.top="8%";
   
    menu.style.duration ="0.1s"
})
closeMenu.addEventListener("click",()=>{
    menu.style.top="-500%"
})

// waypoints
    let navBar = document.querySelector(".nav-bar")
    var waypoint = new Waypoint({
    element: document.getElementById('feature'),
    handler: function(direction) {
        if(direction === "down"){
        navBar.classList.add("fixed","bg-slate-50","shadow-md","shadow-slate-500","w-full","z-50","bg-opacity-95","animate__slideInDown");
        menu.style.top = "-500%"
        openMenu.addEventListener("click",()=>{
        menu.style.top="90%";
        
        menu.style.duration ="0.1s"
    })
    closeMenu.addEventListener("click",()=>{
        menu.style.top="-500%"
    })
        }
        else{
        navBar.classList.remove("fixed","bg-slate-50","shadow-md","shadow-slate-500","w-full","z-50","bg-opacity-95","animate__slideInDown");
        menu.style.top = "-500%"
        openMenu.addEventListener("click",()=>{
        menu.style.top="8%";
    
        menu.style.duration ="0.1s"
    })
    closeMenu.addEventListener("click",()=>{
        menu.style.top="-500%"
    })
        }
        
    },
    offset: '5%'
    })
// mobile slide close
    let closeMobileSlide = document.querySelectorAll(".close-mobile-slide");
    for( let i = 0 ; i< closeMobileSlide.length;i++){
        closeMobileSlide[i].addEventListener("click",()=>{
            menu.style.top="-500%"
        })
    }

//  nav active link
const sections = document.querySelectorAll("section[id]")
    function activeScroll (){
    const scrollY = window.pageYOffset;
    // console.log("scrollY")
    sections.forEach((current)=>{
        const sectionHeight = current.offsetHeight;
        console.log(sectionHeight)
        sectionTop = current.offsetTop - 58;
    
        sectionId = current.getAttribute("id")
        
    if(scrollY>sectionTop && scrollY<=sectionTop + sectionHeight){
        document.querySelector("a[href*="+sectionId+"]")
        .classList.add("active-link")
    }else{
        document.querySelector("a[href*="+sectionId+"]")
        .classList.remove("active-link")
    }
        
    })
}
window.addEventListener("scroll",activeScroll)



// loading
const loading = document.querySelector(".loading");
window.addEventListener('load',()=>{
loading.style.display= "none"
})





// dark mode for large device switch button
const toggleB = document.getElementById("toggle");

    const changeThemToDark = () => {
        document.documentElement.classList.add('dark')
        localStorage.setItem('data-theme', 'dark')
    }

    const changeThemToLight = () => {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('data-theme', 'light')
    }

    

    toggleB.addEventListener('click', () => {
        const theme = localStorage.getItem('data-theme')
        if(theme === 'dark') {
            changeThemToLight()
        } else {
            changeThemToDark()
        }
    })


    const theme = localStorage.getItem('data-theme')
    if(theme === 'dark') {
        changeThemToDark()
        toggleB.setAttribute('checked', 'checked')
    } else {
        changeThemToLight()
    }



