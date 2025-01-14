import random

print("Welcome to the Number Guessing Game!")
print("I'm thinking of a number between 1 and 100.")
print("You have 5 chances to guess it. Good luck!\n")

# Generate a random number between 1 and 100
secret_number = random.randint(1, 100)

# Give the user 5 chances to guess
for attempt in range(1, 6):
    # Get the player's guess
    guess = input(f"Attempt {attempt}/5 - Enter your guess: ").lower()
    
    if guess == "quit":
        print("You exited the game. Thanks for playing!")
        break
    
    # Ensure the input is a valid number
    if not guess.isdigit():
        print("Invalid input. Please enter a number between 1 and 100.")
        continue
    
    # Convert the guess to an integer
    guess = int(guess)
    
    # Check the guess
    if guess < secret_number:
        print("Too low! Try again.")
    elif guess > secret_number:
        print("Too high! Try again.")
    else:
        print(f"Congratulations! You guessed the number {secret_number} correctly!")
        break
else:
    # If all 5 attempts are used up
    print(f"Game over! The number was {secret_number}. Better luck next time!")
