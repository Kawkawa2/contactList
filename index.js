const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var contactList = [
  { name: "kawtar", phone: "05893284948" },
  { name: "kawtar", phone: "05893284948" },
];
process.stdout.write("choose from one to 6 \n");

rl.question(
  "Menu:\n 1-Add Contact \n 2-search contact \n 3-show contacts \n 4-delete contact \n 5-modify contact\n 6-exit\n",
  (choice) => {
    if (choice == 1) {
      rl.question("Enter a name please:", (name) => {
        rl.question("Enter a phone please:", (phone) => {
          contactList.push({ name: name, phone: phone });
          console.log(`You entered ${name},${phone} `);
        });
      });
    } else if (choice == 2) {
      let findContact = [];

      rl.question("enter the contact name pleease:", (cname) => {
        findContact = contactList.find((item) => {
          return item.name == cname;
        });

        if (findContact) {
          process.stdout.write(`${findContact.name} : ${findContact.phone}`);
        } else {
          process.stdout.write(`nothing found for the name: ${cname}`);
        }
      });
    } else if (choice == 3) {
      console.log(contactList);
    } else if (choice == 4) {
      rl.question("enter the contact name pleease:", (cname) => {
        findContact = contactList.find((item) => {
          return item.name == cname;
        });

        if (findContact) {
          contactList = contactList.filter((item) => {
            return item.name !== cname;
          });
          console.log(`contact list:`, contactList);
        } else {
          process.stdout.write(`nothing found for the name: ${cname}`);
        }
      });
    } else if (choice == 5) {
      rl.question("enter contact name please: ", (cname) => {
        let index = contactList.findIndex((item) => item.name == cname);
        if (index >= 0) {
          rl.question("new Phone number \n: ", (newPhone) => {
            if (!isNaN(+newPhone)) {
              contactList[index].phone = newPhone;
              console.log(contactList);
            } else {
              process.stdout.write(`the phone must be a number`);
            }
          });
        } else {
          process.stdout.write(`nothing found for the name: ${cname}`);
        }
      });
    } else if (choice == 6) {
      rl.close();
    } else {
      process.stdout.write("please enter valid option");
    }
  }
);
