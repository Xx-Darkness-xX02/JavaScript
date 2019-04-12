var course = new Object();

var course = {
  title:  "javascript essential training",
  instructor:  "mortan rand-hendriksen",
  level:  1,
  published:  true,
  views:  0,
  updateViews: function(){
    return ++ course.views;
  }
}

console.log(course.views);
course.updateViews();
console.log(course.views);
