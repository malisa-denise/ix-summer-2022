
class Phone {
  constructor(name, width, height) {
    this.name = name;
    this.screenWidth = width;
    this.screenHeight = height;
  }

  calculateScreenArea() {
    return this.screenHeight * this.screenWidth;
  }
}

const phone1 = new Phone('phone 1', 200, 150);
const phone2 = new Phone('phone 2', 300, 350);


class IPhone extends Phone {

  constructor(name, width, height, apps) {
    super(name, width, height);

    this.apps = apps;
  }

  findApp(app) {
    return this.apps.find(x => x === app);
  }

  static assistantName() {
    return 'SIRI';
  }
}

class AndroidPhone extends Phone {

  constructor(name, width, height, assistant) {
    super(name, width, height);

    this.assistant = assistant;
  }

  calculateScreenArea() {
    return 6;
  }
}

const iphone = new IPhone('iphone', 100, 350, ['facebook', 'instagram']);

const androidPhone = new AndroidPhone('Android', 150, 400, 'Google Assistant');

const phones = [
  phone1,
  phone2,
  iphone,
  androidPhone
];


console.log(IPhone.assistantName())

for (const phone of phones) {
  console.log(phone.calculateScreenArea());  
}

// console.log(androidPhone.calculateScreenArea());