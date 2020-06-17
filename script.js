// write your code here
console.log('it works!');

let myLink =  [
    {
        title: "html",
        url: "https://html.cool",
        author: "Robert"
    },
    {
        title: "css",
        url: "https://ccss.com",
        author: "Prisca"
    },
    {
        title: "javascritp",
        url: "https://js.coom",
        author: "John",
    }
];  

// Generate function that will list the link of social new program

    const socialProgram = () => {
        for(let i= 0; i < myLink.length; i++) {
            let socialString = `Title: ${myLink[i].title};
    URL: ${myLink[i].url};
    Author: ${myLink[i].author};`
    alert(socialString);

        };
    };

// Generate function that will allow user to add new link

    const addNewLink = () => {
        let linkTitle = prompt("What is your link's tilte?");
        let linkUrl = prompt("What is your link's url: (https/");
        if(!linkUrl.startsWith("https:")) {
            linkUrl= `https//:${linkUrl}`;
          };
        let linkAuthor = prompt("What is your link's author");
        let newLink = {
            title: linkTitle,
            url: linkUrl,
            author: linkAuthor
        };
        myLink.push(newLink);
        return;
    };
    


// This will allow the user to choose the menu    
    let menu = `Choose an option:
    1: Show a link;
    2: Add a new link;
    3: Remove a link;
    4: quit the program;
    `
  
    let linkMenu = Number(prompt(menu));
    alert(`${linkMenu}`);    

//  We excecute the program till the user choose 4 in order to quit

     while(linkMenu !== 4) {
        switch(linkMenu) {
            case 1:
                socialProgram();
                break;
            case 2:
                addNewLink();
                break;    
            case 3:
                const removeLink = myLink.pop();
			alert(`We removed one of the element inside of the array : ${removeLink.author}`);
			break;
            default:
                alert("Choose the accurate option");       
        }
        linkMenu = Number(prompt(menu));
     };
     alert("Thank you for using my program")