module Greeter2 {

    class TaxMan {
        fullName: string;

        constructor(public firstName, public lastName) {
            this.fullName = `${firstName} ${lastName}`;
        }
    }

    interface Person {
        firstName: string;
        lastName: string;
    }

    function greeter(person: Person) {
        return `Hello there, ${person.firstName} ${person.lastName}`;
    }

    var person = Object.freeze(new TaxMan("Jon", "Davies"));

    person.firstName = 'Joe';

    console.log(person);

    document.body.innerHTML = greeter({firstName: "Robert", lastName: "Rees"});
    document.body.innerHTML = greeter(person);
}
