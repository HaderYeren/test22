# Об'єднання елементів масиву в один рядок за допомогою циклу for
def concatenate_with_for(array):
    result = ""
    for i in range(len(array)):
        result += array[i]
        if i < len(array) - 1:
            result += ","
    return result

# Об'єднання елементів масиву в один рядок за допомогою join()
def concatenate_with_join(array):
    return ",".join(array)

# Приклади використання
array = ["apple", "banana", "cherry"]
print(concatenate_with_for(array))  # Виведе: apple,banana,cherry
print(concatenate_with_join(array))  # Виведе: apple,banana,cherry

# Робота з колекцією карток в Trello
cards = ["Card 1", "Card 2", "Card 3", "Card 4"]

# Видалити картку
def remove_card(cards, index):
    if 0 <= index < len(cards):
        cards.pop(index)

# Додати картку
def add_card(cards, index, card):
    if 0 <= index <= len(cards):
        cards.insert(index, card)

# Оновити картку
def update_card(cards, index, new_card):
    if 0 <= index < len(cards):
        cards[index] = new_card

# Приклади використання
remove_card(cards, 1)
print(cards)  # Виведе: ['Card 1', 'Card 3', 'Card 4']

add_card(cards, 1, "New Card")
print(cards)  # Виведе: ['Card 1', 'New Card', 'Card 3', 'Card 4']

update_card(cards, 1, "Updated Card")
print(cards)  # Виведе: ['Card 1', 'Updated Card', 'Card 3', 'Card 4']
