const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

const returnPWithMostPoints = (data) => {
  let name = ''
  for (const p in data) {
    if (data[name] === undefined) {
      name = p;
    } else if (data[name] < data[p]) {
      name = p;
    }
  }
  return name;
}

const biggestFollower = () => {
  let bFollower = {};
  for (const p in data) {
    bFollower[data[p].name] = data[p].follows.length;
  }
  const biggest = returnPWithMostPoints(bFollower);
  return biggest;

}
console.log(biggestFollower(), 'has the most follows');

const mostPopular = () => {
  let mostFollows = {}
  for (const p in data) {
    if (!mostFollows[p]) {
      mostFollows[p] = 0;
    }
    for (const follower of (data[p].follows)) {
      if (mostFollows[follower]) {
        mostFollows[follower] += 1;
      } else {
        mostFollows[follower] = 1;
      }
    }
  }
  const most = returnPWithMostPoints(mostFollows);
  return data[most].name;
}
console.log(mostPopular(), 'is followed by the most people');

const getFollowers = (passedName) => {
  const followers = [];
  for (const p in data) {
    data[p].follows.forEach((name) => {
      if (passedName === name) {
        followers.push(p);
      }
    })
  }
  return followers;
}


const printAll = () => {
  let followsAndFollowers = []
  for (const p in data) {
    const person = new Object;
    person.name = data[p].name;
    person.followers = getFollowers(p);
    person.following = (data[p].follows);
    followsAndFollowers.push(person);
  }
  //parseNames(followsAndFollowers);
  return followsAndFollowers;
}

const parseNames = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].following.forEach((name, index, array) => {
      array[index] = data[name].name
    });
    arr[i].followers.forEach((name, index, array) => {
      array[index] = data[name].name
    });
  }
}

console.log(printAll());


const unrequiredFollowers = () => {
  let poggers = printAll();
  let notFollowing = [];
  for (const p in poggers) {
    const person = new Object;
    person.name = poggers[p].name;
    person.doesnotFollow = poggers[p].following;
    person.doesnotFollow.forEach((name, index, array) => {
      poggers[p].followers.forEach((follows) => {
        if (name === follows) {
          array[index] = '';
        }
      })
    })
    person.doesnotFollow = person.doesnotFollow.filter(Boolean);
    notFollowing.push(person);
  }
  return (notFollowing);
}

console.log(unrequiredFollowers());