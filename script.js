const data = [
    {"name": "John Doe", "balance": 100, "friends": ["Jane Smith", "Jim Brown"], "skills": ["Python", "JavaScript"]},
    {"name": "Jane Smith", "balance": 150, "friends": ["John Doe"], "skills": ["Java", "Python"]},
    {"name": "Jim Brown", "balance": 200, "friends": [], "skills": ["C++", "Python"]}
];

const totalBalance = data.reduce((sum, user) => sum + user.balance, 0);
console.log("Загальна сума балансу:", totalBalance);

function usersWithFriend(users, friendName) {
    return users.filter(user => user.friends.includes(friendName)).map(user => user.name);
}

const friendName = "John Doe";
const namesWithFriend = usersWithFriend(data, friendName);
console.log(`Користувачі, у яких є друг з ім'ям ${friendName}:`, namesWithFriend);


const sortedUsersByFriends = [...data].sort((a, b) => b.friends.length - a.friends.length);
const sortedNamesByFriends = sortedUsersByFriends.map(user => user.name);
console.log("Користувачі, відсортовані за кількістю друзів:", sortedNamesByFriends);


const allSkills = [...new Set(data.flatMap(user => user.skills))].sort();
console.log("Усі унікальні вміння користувачів:", allSkills);
