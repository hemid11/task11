// class Human {
//     constructor(name, surname, age = 0, gender, nationality) {
//       this.name = name;
//       this.surname = surname;
//       this.age = age;
//       this.gender = gender;
//       this.nationality = nationality;
//     }
  
//     getFullName(){
//         return this.name + " " + this.surname;
//     }
  
//     getBirthYear() {
//       const currentYear = new Date().getFullYear();
//       return currentYear - this.age;
//     }
//   }
  
//   class User extends Human {
//     constructor(name, surname, age, gender, nationality, username, email, isAdmin, password, bio) {
//       super(name, surname, age, gender, nationality);
//       this.username = username;
//       this.email = email;
//       this.isAdmin = isAdmin;
//       this.isLogged = false;
//       if (password.length >= 5) {
//         this.password = password;
//       } else {
//         console.error("sifre en az 5 herf olmalidir.");
//       }
//       this.bio = bio.length > 30 ? bio.substring(0, 30) : bio;
//     }
  
//     changePassword(currentPassword, newPassword) {
//       if (currentPassword === this.password) {
//         if (currentPassword !== newPassword) {
//           this.password = newPassword;
//           console.log("sifre deyisdirildi");
//         } else { 
//           console.error("Yeni sifre movcut sifre ile eyni ola bilmez.");
//         }
//       } else {
//         console.error("bu sifre dogru deyil.");
//       }
//     }
  
//     changeEmail(users, newEmail) {
//       const existingUserWithEmail = users.find(user => user.email === newEmail);
//       if (existingUserWithEmail) {
//         console.error("Bu e--poct basqa istifadeci terefinden istifade olunub");
//       } else {
//         this.email = newEmail;
//         console.log("E-poct deyisdirildi");
//       }
//     }
//   }
  
//   const user1 = new User("Hemid", "Ismayilzade", 20, "male", "Azerbaijani", "hemid01", "hemid03@gmail.com", false, "hemid01", "Azerbaycanda  Baki şeherinde yaşayıram.");
//   user1.changePassword("hemid01", "newpass123");
//   user1.changePassword("wrongpassword", "newpass123");
//   user1.changePassword("hemid01", "hemid01");
//   user1.changeEmail([user1], "newemail@example.com");

// class User {
//     constructor(username, email) {
//         this.username = username;
//         this.email = email;
//     }
// }

// let user1 = new User("Hemid", "hemid03@gmail.com");
// let user2 = new User("Ilkin", "ilkin01@gmail.com");
// let user3 = new User("Rustem", "rustem02@gmail.com");
// let user4 = new User("Cavid", "cavid00@gmail.com");
// let user5 = new User("Emil", "emil001@gmail.com");

// let users = [user1, user2, user3, user4, user5];

// users.forEach(user => {
//     console.log(`Username: ${user.username}, Email: ${user.email}`);
// });



// class User {
//     constructor(username, email , age) {
//         this.username = username;
//         this.email = email;
//         this.age=age;
//     }
// }
// let user1 = new User("Hemid", "hemid03@gmail.com",20);
// let user2 = new User("Ilkin", "ilkin01@gmail.com",18);
// let user3 = new User("Rustem", "rustem02@gmail.com",16);
// let user4 = new User("Cavid", "cavid00@gmail.com",22);
// let user5 = new User("Emil", "emil001@gmail.com",24);
// let users = [user1, user2, user3,user4,user5];
// function sortUsersByUsername(usersArray) {
//     return usersArray.sort((a, b) => a.username.localeCompare(b.username));
// }
// let sortedUsers = sortUsersByUsername(users);
// sortedUsers.forEach(user => {
//     console.log(`Username: ${user.username}, Email: ${user.email}`);
// });



class User {
    constructor(username, email, age) {
        this.username = username;
        this.email = email;
        this.age = age;
    }
}

let user1 = new User("Hemid", "hemid03@gmail.com", 20);
let user2 = new User("Ilkin", "ilkin01@gmail.com", 18);
let user3 = new User("Rustem", "rustem02@gmail.com", 14);
let user4 = new User("Cavid", "cavid00@gmail.com", 22);
let user5 = new User("Emil", "emil001@gmail.com", 24);
let users = [user1, user2, user3, user4, user5];

function sortUsersByUsername(usersArray) {
    return usersArray.sort((a, b) => a.username.localeCompare(b.username));
}

function filterByBirthYear(usersArray, year) {
    return usersArray.filter(user => user.age > year);
}

let sortedUsers = sortUsersByUsername(users);
console.log("Sorted Users:");
sortedUsers.forEach(user => {
    console.log(`Username: ${user.username}, Email: ${user.email}`);
});

let filteredUsers = filterByBirthYear(users, 20);
console.log("\nIstifadecinin yasi 15den boyukdur:");
filteredUsers.forEach(user => {
    console.log(`Username: ${user.username}, Email: ${user.email}`);
});
