function Course(title, instructor, level, published, viewss ){
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views;
  this.updateViews = function(){
    return ++this.views;
  };
}

var courses = [
  new Course("Javascript essential training", "mortan rand-hendriksen", 1, true, 0 ),
  new Course("up and running with ECMA6" "Eve pollons", 1, true, 123456 )
];

console.log(courses);
