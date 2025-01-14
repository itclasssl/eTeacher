import random

# Choices for the game
choices = ["rock", "paper", "scissors"]

print("Welcome to Rock, Paper, Scissors!")
print("Type 'rock', 'paper', or 'scissors' to play.")
print("Type 'quit' to exit the game.\n")

while True:
    # Player's input
    player_choice = input("Enter your choice: ").lower()
    
    if player_choice == "quit":
        print("Thanks for playing! Goodbye!")
        break
    
    if player_choice not in choices:
        print("Invalid choice. Please choose 'rock', 'paper', or 'scissors'.")
        continue
    
    # Computer's random choice
    computer_choice = random.choice(choices)
    print(f"Computer chose: {computer_choice}")
    
    # Determine the winner
    if player_choice == computer_choice:
        print("It's a tie!")
    elif (player_choice == "rock" and computer_choice == "scissors") or \
         (player_choice == "paper" and computer_choice == "rock") or \
         (player_choice == "scissors" and computer_choice == "paper"):
        print("You win!")
    else:
        print("You lose!")

    print()  # Empty line for better readability
