class Form{
    constructor(){
        this.button = createButton('Submit');
        this.greeting = createElement('h2');
        this.input = createInput('Name');
        this.title = createElement('h2')
    }

    hide(){
        this.button.hide();
        this.greeting.hide();
        this.input.hide();
        this.title.hide();
    }

    display(){
        this.title.html('A survey to bring about change');
        this.title.position(400, 50);
        this.input.position(400, 150);
        this.button.position(400, 200);

      this.button.mousePressed(()=>{
          
      this.input.hide();
      this.button.hide();

      playerCount+=1;

      this.greeting.html("Hello " + player.name)
      this.greeting.position(250, 250);
    });

    }
}