const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

for (const user of users) {
    if (user.name[0]==="A") {
        user.name="Anacleto"
    }
}
console.log(users);