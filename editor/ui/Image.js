function Image(parent)
{
	//ID
	var id = "img" + Image.id;
	Image.id++;

	//Create element
	this.element = document.createElement("div");
	this.element.id = id;
	this.element.style.position = "absolute";

	//Element atributes
	this.size = new THREE.Vector2(0,0);
	this.position = new THREE.Vector2(0,0);
	this.image = "";
	this.visible = true;
	
	//Add element to document
	document.body.appendChild(this.element);
}

//Image ID counter
Image.id = 0;

//Functions Prototype
Image.prototype.setImage = setImage;
Image.prototype.update = update;
Image.prototype.updateInterface = updateInterface;

//Update
function update(){}

//Set Image
function setImage(image)
{
	this.image = image;
}

//Update Interface
function updateInterface()
{
	if(this.visible)
	{
		this.element.style.visibility = "visible";
	}
	else
	{
		this.element.style.visibility = "hidden";
	}

	this.element.innerHTML = '<img src="' + this.image + '" width="' + this.size.x + '" height="' + this.size.y +'">';
	this.element.style.top = this.position.y + "px";
	this.element.style.left = this.position.x + "px";
	this.element.style.width = this.size.x + "px";
	this.element.style.height = this.size.y + "px";
}