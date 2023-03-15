// Write your solution here!
function scuberGreetingForFeet(feet) {
    if (feet <= 400) {
      return "This one is on me!";
    } else if (feet > 400 && feet <= 800) {
      return "I will gladly take your thirty bucks.";
    } else if (feet > 800 && feet <=1200) {
      return "you will pay seventy bucks.";
    } else {
      return "Please enter a valid distance.";
    }
  }
  