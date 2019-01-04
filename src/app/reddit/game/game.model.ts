//A good practice when writing Angular code is to try to isolate the data structures we are using from
// the component code. To do this, let’s create a data structure that represents a single article. Let’s add
// a new file game.model.ts to define a Game class that we can use.

export class Game {
    title: string;
    score:  number;
    
  
    constructor(title: string, score?: number) {
      this.title = title;
      this.score = score || 0;
    }
  
    //void is Typescript and means the method does not return a value 
  voteUp(): void {
    this.score += 1;
  }

  voteDown(): void {
    this.score -= 1;
  }
    
  }
  