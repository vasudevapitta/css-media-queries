$(()=>{
/* model should Only contain all data in an object. The object can have arrays in it
model can have certain keys set to null initially, so we could reassign them later on
model should NOT contain any methods */

const model = {
  cats: [
  {
  	name: 'Missy',
  	clickCount: 0,
  	imgSrc: 'images/cat0.jpg',
  },

  {
  	name: 'Kitty',
  	clickCount: 0,
  	imgSrc: 'images/cat1.jpg',
  },

  {
  	name: 'Sooty',
  	clickCount: 0,
  	imgSrc: 'images/cat2.jpg',
  }
  ]

}


/*controller contains Init method.
Initially sets the previously set to null key(from model) and reassign it.
Calls init method on view - which does all the creation of new content and appending it to the DOM,
while calling the methods on the controller and getting the parsed data.
*/

const controller = {
	init(){
		view.init();
	},

	getAllCats(){
		return model.cats;
	}
}


const view = {
	init(){
		this.ul = $('#ul');
		this.render();
	},

	render(){
		let catObj, template;
		const allCats = controller.getAllCats();
				for(let cat of allCats) {
				catObj = cat;
				template = $(`<li>${catObj.name}</li>`);
				
				template.click(function(thisObj){
					return function(){
						alert(thisObj.name);
					};
				}(catObj));

				this.ul.append(template);
				}
	}
}

/* View should call DOM elements and store them in Variables
View should handle render() method which appends new content to the DOM
View should take parsed data from Controller
View should contain any looping related to the Data
View's init method should call DOM elements and store them in this.variableName and then call the render method on itself
*/


controller.init();

});