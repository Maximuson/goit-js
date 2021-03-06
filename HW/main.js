/* eslint-disable no-plusplus */
/* eslint-disable max-classes-per-file */
// strange code for generate IDs
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}
function* generateUserId() {
  yield* generateSequence(500, 1000);
}
function* generateMassageId() {
  yield* generateSequence(5000, 10000);
}
function* generateGroupeId() {
  yield* generateSequence(1001, 4999);
}

const userIds = generateUserId();
const messageIds = generateMassageId();
const groupeIds = generateGroupeId();

const getUserId = () => userIds.next().value;
const getMessageId = () => messageIds.next().value;
const getGroupeId = () => groupeIds.next().value;
// end of strange code (it is JS generators)

class Message {
  constructor(text, fromUser, toUser) {
    this.id = getMessageId();
    this.text = text;
    this.fromUser = fromUser;
    this.toUser = toUser;
  }
}

class GroupMessage extends Message {
  constructor(text, fromUser, ToGroup) {
    super(text, fromUser);
    this.ToGroup = ToGroup;
  }
}

class Group {
  constructor(users) {
    this.id = getGroupeId();
    this._users = users;
    this.messages = [];
  }

  addUser(user) {
    this._users.push(user);
  }
}
class User {
  constructor(name, socialNetwork) {
    this.name = name;
    this.id = getUserId();
    this.friendList = [];
    this.messages = [];
    this.socialNetwork = socialNetwork;
    this.groups = [];
  }

  sendMessage(message, toUser) {
    const newMessage = new Message(message, this.name, toUser.id);
    this.socialNetwork.deliverMassage(newMessage);
    return newMessage;
  }

  receiveMessage(message) {
    this.messages.push(message);
  }

  createGroup(...users) {
    const newGroup = new Group([this]); // Создана группа с текущем создателем
    users.forEach((e) => {
      newGroup.addUser(e);
      e.groups.push(newGroup);
    });
    this.groups.push(newGroup);
  }

  sendMessageToGroup(message, groupID) {
    const group = this.groups.find((e) => e.id === groupID);
    const newMessage = new GroupMessage(message, this.name, groupID);
    this.socialNetwork.deliverMassage(newMessage); // возможно нужно убрать
    group.messages.push(newMessage);
  }

  addToFriends(user) {
    this.friendList.push(user);
  }
}

class SocialNetwork {
  constructor() {
    this.users = [];
    this.messages = [];
    this._name = 'Facebook';
  }

  createUser(name) {
    const newUser = new User(name, this); // this use in class User, method sendMessage()
    this.users.push(newUser);
    return newUser;
  }

  deliverMassage(newMessage) {
    this.messages.push(newMessage);
    const receiveUserId = newMessage.toUser;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === receiveUserId) {
        this.users[i].receiveMessage(newMessage);
        break;
      }
    }
  }
}


const socialNetwork = new SocialNetwork();

const userVasya = socialNetwork.createUser('Vasya');
const userPetya = socialNetwork.createUser('Petya');
const userMax = socialNetwork.createUser('Max');
const userStas = socialNetwork.createUser('Stas');
const userJames = socialNetwork.createUser('James');

userVasya.sendMessage('Hello Petya', userPetya);
userPetya.sendMessage('Hello Vasya', userVasya);

console.log('userPetya.messages', userPetya.messages);
console.log('socialNetwork.messages', socialNetwork.messages);

userMax.createGroup(userJames, userPetya, userStas);
console.log(userMax.groups);
userMax.sendMessageToGroup('Hi all', 1001); //1001 - id группы
userMax.createGroup(userJames, userPetya);
userMax.sendMessageToGroup('Hi all without stas', 1002);
userMax.addToFriends(userStas);
// HOME WORK
// create 5 users
// implement GROUP in SocialNetwork
// create group and add 3 this users, in one user invoke method createGroup(user1, user2, ....)
// implement method sendMessageToGroup
// add the other two as friends to each other, in other words, implement method addFriend()
