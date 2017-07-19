console.log("main.js");

let saywhat = document.getElementById("output");

let listItems = document.getElementsByClassName("list-item");
console.log("listItems", listItems);

function handleClick(event){
	console.log("you clicked", event);
	let elementText = event.target.innerHTML;
	saywhat.innerHTML = "hummmmm, " + elementText + " you have clicked.";
}

for (let i = 0; i < listItems.length; i++){
	listItems.item(i).addEventListener("click", handleClick);
}

let header = document.getElementById("page-header");

header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseout", handleHeaderMouseOut);

function handleHeaderMouseOver(event){
	saywhat.innerHTML = "The force is strong with this one";
}

function handleHeaderMouseOut(event){
	saywhat.innerHTML = "Remember... the Force will be with you, always";
}

//lambda

let inputArea = document.getElementById("keypress-input");

inputArea.addEventListener("keyup", function(event){
	console.log("event", event);
	saywhat.innerHTML = event.target.value;
});

let yodaImage = document.getElementById("theYoda");

document.getElementById("change-color")
	.addEventListener("click", function(){
		yodaImage.classList.toggle("flashy");
	});

document.getElementById("force-lots-of")
	.addEventListener("click", function(){
		yodaImage.classList.toggle("moreforce");
	});

document.getElementById("add-border")
	.addEventListener("click", function(){
		yodaImage.classList.toggle("bordered");;
	})

/*
  EVENT BUBBLING:

  You can add an event handler on the body tag, and since all
  browser events bubble up to the body, you can then put in
  conditional logic to handle the click event on many different
  elements in one function.
 */

document.getElementById("wrapper").addEventListener("click", function(event){
	console.log("target", event.target);
	console.log("currentTarget", event.currentTarget);

	if(event.target.tagName.toLowerCase() === "li"){
		console.log("You clicked on an <li> element");
	}

	if(event.target.className === "list-item"){
		console.log("You clicked on a `list-item` element");
	}

	if(event.target.id === "page-title"){
		console.log("You clicked on the page-title element");
	}
});

let quotesArray = [
"A long time ago in a galaxy far, far away…",
"Use the force, Luke.",
"The force is strong with this one.",
"Do. Or do not. There is no try.",
"Fear is the path to the dark side.",
"Someday I will be the most powerful Jedi ever.",
"You were the chosen one!"
];

quotesArray.forEach( (quote, index) => {
	let quoteBlock = `<div id="quote--${index}">
						<h3>"${quote}" - Star Wars</h3>
						</div>`;

	let quoteDiv = document.createElement("div");
	quoteDiv.innerHTML = quoteBlock;
	document.getElementById("stickItHere").appendChild(quoteDiv);
	let quoteDom = document.getElementById(`quote--${index}`);
	quoteDom.addEventListener("click", () => {
		console.log("event", event);
		event.currentTarget.classList.add("accent");
	});
});


let jediPlayer = [22, 24, 980, 200];
let stormPlayer = [11, 14, 900, 100];

function changeScores(item, index, whichArray){
	console.log("what stuff", item, index, whichArray);
	whichArray[index] = item * 10;
};

document.getElementById("changeJedi").addEventListener("click", () => {
	jediPlayer.forEach(changeScores);
	console.log("Jedi", jediPlayer);
});

document.getElementById("changeStorm").addEventListener("click", () => {
	stormPlayer.forEach(changeScores);
	console.log("Storm Trooper", stormPlayer);
});



























