var chatFilter = {
  getChat: function() {
	console.log("start getChat()");
	$('<iframe/>', {
						frameborder:"0",
						scrolling:"no",
						id:"chat_embed",
						src:"https://twitch.tv/chat/embed?channel=twitchplayspokemon&amp;popout_chat=true",
						height:"500",
						width:"350"
					}
	).appendTo('body');
	$("iframe").load(
		function (){
			chatLineList = $("#chat_embed").contents();
			console.log("chatLineList " + chatLineList.html());
			console.log("end getChat()");
		}
	);
	this.placeHolder();	
  },
  
  placeHolder: function() {
	console.log("start placeHolder()");
	chatLineList = $("#chat_line_list > li > p");
	var numOfMsg = chatLineList.length;
	console.log("numOfMsg " + numOfMsg);
	for (var i = 0; i < numOfMsg; i++) {
      var message = document.createElement('message');
      /* message.src = this.constructKittenURL_(kittens[i]); */
      /* message.setAttribute('alt', kittens[i].getAttribute('title')); */
	  console.log("message " + message);
      document.body.appendChild(message);
    }
	console.log("end placeHolder()");
  }
};

// Run script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
	chatFilter.getChat();
});
