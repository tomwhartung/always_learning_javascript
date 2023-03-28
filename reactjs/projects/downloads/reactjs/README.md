
# README.md

The [React Tic-Tac-Toe Tutorial](https://beta.reactjs.org/learn/tutorial-tic-tac-toe)
has many code boxes, and next to the title of each one of these is a Download (Download sandbox) link.

Apparently each of these allows us to download a slightly different version of the code.
Presumably these downloads match the code in the code box (I've only tested the first two).

This directory contains these different versions of this downloaded file.

# About the Versions

This should be obvious, but just so we leave no doubt, the table below shows where the versions of `sandbox.html` come from.

What is not so obvious is that these files do not match what's in the code boxes.
For one thing, the files contain a lot of css, while the code boxes don't show any of that.  Hmmm.

| Title of Subsection             | Name of Directory                  | Name of File |                        Comment                                             |
| ------------------------------- | ---------------------------------- |:------------:| -------------------------------------------------------------------------- |
| What are you building?          | 01-What_are_you_building           | sandbox.html | This looks like the entire app                                             |
| Setup for the tutorial          | 02-Setup_for_the_tutorial          | sandbox.html | The code box contains just barely three lines of code                      |
| Inspecting the starter code     | 03-Inspecting_the_starter_code     | sandbox.html | This code contains the `<>` that gives an error in the `their_way` version |
| Passing data through props      | 04-Passing_data_through_props      | sandbox.html | Updates `Board` to pass a value of 1-9 from `Board` to each `Square`       |
| Making an interactive component | 05-Making_an_interactive_component | sandbox.html | Updates the code to display an "X" when the user clicks a `Square`         |
| Lifting state up (part 1)       | 06-Lifting_state_up-part_1         | sandbox.html | Prepare to lift state up by moving state from `Square` to `Board`          |
| Lifting state up (part 2)       | 07-Lifting_state_up-part_2         | sandbox.html | Finish lifting state up by updating `Square` and `Board` appropriately     |
| Taking turns                    | 08-Taking_turns                    | sandbox.html | Update the code to alternate between placing "X"s and "O"s                 |
| Declaring a winner              | 09-Declaring_a_winner              | sandbox.html | Update the code to declare a winner, if one of the player wins             |
| Lifting state up, again         | 10-Lifting_state_up_again          | sandbox.html | Prepare the state variables for implementation of "time travel"            |
| Showing the past moves          | 11-Showing_the_past_moves          | sandbox.html | Display a list of buttons users can click to "time travel"                 |
| Implementing time travel-1      | 12-Implementing_time_travel-1      | sandbox.html | Add a `key` attribute to the list of "time travel" buttons                 |
| Implementing time travel-2-done | 13-Implementing_time_travel-2-done | sandbox.html | Finish other steps needed to make the "time travel" buttons work           |
| Wrapping up                     | 14-Wrapping_up                     | sandbox.html | Remove a redundant state variable and examine optional next steps          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |

