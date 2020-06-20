
const newsProgram = [
    {link: "https://madagascar"},
    {link: "https://coronasvirus"},
    {link: "https://health"},
    {link: "https://wheather"},
    {link: "https:// education"}
];

// Creat funcion to run the program

const linkSocialPro = () => {
    for(let i = 0; i < newsProgram.length; i++) {
        let links = `${newsProgram[i].link}`;
        alert(links)
    };
};

// require a new link from a user 
 
    const addNewLink = () => {
        let newLinks = prompt("Add a new link here and start it with https");
            if(!newLinks.startsWith("https://") && !newLinks.startsWith("http://")) {
            newLinks = `https://${newLinks}`;
            }
        let newLinkPro = {link: newLinks};
        newsProgram.push(newLinkPro);
        return;
    };

// Generate menu of the program

    let myMenu = ` THese are the option which inform you to run this program:

    Choose 0 to quit

    Choose 1 to show existing links

    Choose 2 add a link

    Choose 3 remove a link
    `
    let menuString = Number(prompt(myMenu));
    alert(menuString);

// Run the program

    while(menuString !== 0) {
        switch (menuString) {
            case 1:
                linkSocialPro();
                break;
            case 2:
                addNewLink();
                break;
            case 3:
                newsProgram.pop();
                linkSocialPro();
                break;
            default:
                "Choose a valid number (1,2,3)"    
        };
        menuString = Number(prompt(myMenu));
    }alert("Thank you for using my program")