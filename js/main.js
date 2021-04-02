export class DropDownActions{

	static showDropDown(id, className, content){
		
		this.element = document.getElementById(id);
		this.list = document.createElement('ul');
		this.items = [];

		for(let i = 0; i < content.length; i++){
			this.items.push(content[i]);
			
			this.list.insertAdjacentHTML(
				'beforeend', 
				`<li class="added" name="aaa">${content[i]}</li>`
			);
			
		};
		
		this.element.style.position = 'relative';		
		this.list.classList.add(className);
		this.element.append(this.list);
		
		for(let i = 0; i < this.list.children.length; i++){

		}

	}


	hideDropDown(){
		
	}


}



	products.addEventListener('click', function(){
		DropDownActions.showDropDown('products', 'main-dropDown', ['sofa', 'chair']);
		document.querySelector('.main-dropDown').addEventListener('click', function(event){
			console.log(event.target.className);
		})
	});



