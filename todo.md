0. TO display output. <done>

1.  ROW CHANGER:
    it should increment after each submission of a 5 letter word <done>

2. a json file with all possible 5 letter words <done>

3. submit button should be disabled if all 5 letters arent selected, or if the word
   is not a valid 5 letter word, i.e it doesnt match with any word in the json file <done>

4. RANDOM SELECTION OF A WORD FROM THE JSON, THAT HAS TO BE THE WORD TO BE GUESSED <done>
 
5. LETTER POSITION, GREEN AND YELLOW <done>
    GREEN -> crct letter in the crct position, 
    YELLOW -> crct letter, but not in the crct positon
    GREY -> not crct letter

6. RESET BUTTON -> automatically resets after loosing or winning, also reset in between if this button is clicked

7. LEADERBOARD
    stores streak (streak will increase with how many correct words your guess in a stretch)

8. PLAY NEXT
    appears after correctly guessing a word

9. NEW GAME BUTTON
    it should reset all the words to null and set row counter to 0

10. UPDATE WINNER AND LOSER MESSAGES

11. IF THE ENTERED GUESS IS NOT A VALID GUESS, CHANGE THE TEXT OF SUBMIT BUTTON TO 'not a valid word'

12. ADD A HINT BUTTON

13. ADD A HELP BUTTON
    contains the how to play info


small problems:
    <li> 1. img x on the button close doesnt move with the button when clicked </li>
    <li> 2. main heading is out of view when screen size set to phone-size

current problems:
    1. function handleClick is always one click late, i.e when 3rd letter is typed, only upto 2nd letter is shown in backend <solved>