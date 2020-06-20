# Functional & Technical Requirements

To get a better hands on practice in JavaScript, try to implement a social news program. Requirements and expected results are given below.

## WE'LL COVER THE FOLLOWING

-   Objective
-   Functional Requirements
-   Technical Requirements
-   Expected Result

## Objective

The goal of this project is to build a basic social news program. Its users will be able to show a list of links and add new ones.

## Functional Requirements

-   A link is defined by its title, its URL and its author (submitter).
-   If a new link URL does not start with "http://" or "https://", "http://" is automatically added to its beginning.

-   At launch, the program displays a start menu with the possible actions in an alert window and asks the user for his choice. Possible actions are:

    -   Show the list of links.
    -   Add a new link.
    -   Remove an existing link.
    -   Quit the program.
    -   Showing the list of links displays the index (rank) and the properties of each link in an alert window, or a message in the absence of any link.

-   When adding a link, the program asks the user for the new link properties (title, URL and author). The link is then created. Subsequently, it must appear in the shown links.

-   When removing a link, the user is asked for the link index until it is correct. The associated link is then removed. Subsequently, it must disappear from the shown links. Removing a link is not possible if there are no existing links.

-   After an action is performed, the start menu is shown again. This goes on until the user chooses to quit the program.

## Technical Requirements

-   All your code should be correctly indented.
-   Names should be wisely chosen and adhere to the camelCase convention.
-   Code duplication should be avoided.

## Expected Result

Here are a few screenshots of the expected result.

<img src="./images/1.png"  width="400" />

<img src="./images/2.png"  width="400" />

<img src="./images/3.png"  width="400" />

Second project: Implementing Social News Program

In this coding project, you will implement a Social News Program which must follow all the rules stated in the previous lesson.

After running your code, the program must show an alert box with these 4 options:

0 - Quits

1 - Show existing links

2 - Add a link

3 - Remove a link
