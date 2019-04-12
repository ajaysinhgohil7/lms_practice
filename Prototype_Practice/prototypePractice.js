
Object.prototype.print = function(){
    console.log(this.pays? 'yyyyyyy':'nnnnnnnnnn');
}

let Job = function(){
    this.pays = true;
};

// Job.prototype.print = function(){
//     console.log(this.pays ? "yes come" : "sorry");
// };

let developer = function(title, pays){
    this.title = title;
    this.pays = pays;
};

developer.prototype = Object.create(Job.prototype);
developer.prototype.constructor = developer;

// Shadowing Job print method : kind of over riding
// developer.prototype.print = function(){
//     console.log(this.pays? "yes come here" : "sorry noooo");
// }

let objJsDev1 = new developer('JavaScript', true);
objJsDev1.print();

console.log(objJsDev1);