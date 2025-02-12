 1️⃣    WHAT IS A EVENT 
             
        JAVASCRIPT EVENTS:
                            Events in JavaScript are actions or occurrences that happen in the browser, like clicking a button, 
        pressing a key, or loading a page. JavaScript allows us to listen for these events and execute code in response.

        Types of Events
            1.	Mouse Events (click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, contextmenu)
            2.	Keyboard Events (keydown, keypress, keyup)
            3.	Form Events (submit, change, input, focus, blur)
            4.	Window Events (load, scroll, resize, hashchange, beforeunload)
            5.	Clipboard Events (copy, cut, paste)
            6.	Drag and Drop Events (dragstart, drag, dragend, dragover, drop)
            7.	Touch Events (for mobile devices: touchstart, touchmove, touchend)

2️⃣   HANDLING EVENTS

        HANDLING EVENTS IN JS:
        1. Using HTML Event Attributes (Inline Event Handlers)
                <button onclick="alert('Button Clicked!')">Click me</button>
                🔴 Why Avoid This?
            •	Mixing JavaScript with HTML is not recommended.
            •	Cannot add multiple event handlers to the same element.
        2. Using the onclick Property (DOM Event Handlers)
                const btn = document.getElementById('myBtn');
                btn.onclick = function() {
                alert('Button Clicked!') };
                🔴 Limitations:
            •	Only one event handler per event type can be assigned (overwrites previous handlers).
        3. Using addEventListener() (Best Practice)
                const btn = document.getElementById('myBtn');
                btn.addEventListener('click', function() {
                alert('Button Clicked!'); });
                ✅ Advantages of addEventListener():
            •	Allows multiple event listeners on the same element.
            •	Supports event delegation.
            •	Can remove event listeners.
        4. Removing an Event Listener: To remove an event, use removeEventListener():
                function sayHello() {
                alert('Hello!');
                }
                btn.addEventListener('click', sayHello);
                btn.removeEventListener('click', sayHello); 
                (🔴 Note: The function reference must be the same (anonymous functions won’t work).)


3️⃣  EVENT OBJECT(e)

        When an event occurs, JavaScript automatically creates an event object that contains information about the event.

        document.getElementById('owl').addEventListener('click', function(e){
                console.log(e);
                
            })

                When you logs e(event object) by a console.log(e), and the event is triggered by a mouse click, touch, or pen, it logs a PointerEvent.
                A PointerEvent is a specialized event in JavaScript that provides details about user interactions with a device’s input (mouse, touch, or stylus).
                A PointerEvent is triggered for mouse clicks, touches, and stylus inputs.

                /*  A PointerEvent contains many useful properties. Here are some key ones:
                1. Basic Event Information
                    type	        The type of event (e.g., "click", "pointerdown", "pointermove", etc.)
                    timeStamp	    The time (in milliseconds) when the event occurred.
                    target	        The element that was clicked or touched.
                    currentTarget	The element where the event listener is attached
                2. Pointer Device Information
                    pointerId	    A unique ID for the pointer (useful for multi-touch).
                    pointerType	    "mouse", "touch", or "pen".
                    isPrimary	    true for the primary pointer (useful for multi-touch).
                3. Mouse Position Details
                    clientX, clientY	    X, Y position relative to the viewport.
                    pageX, pageY	        X, Y position relative to the full page.
                    screenX, screenY	    X, Y position relative to the screen.
                4. Button & Click Details
                    buttons	          Which mouse buttons are pressed (1 for left-click, 2 for right-click, etc.).
                    button	          Which button triggered the event (0 = left, 1 = middle, 2 = right).
                    ctrlKey,altkey    true if these keys were pressed during the event.
                    shiftKey, metaKey	
                */

                //	•	e.currentTarget works when logged directly.
                //   Inside the console-expanded event, currentTarget is null because events get garbage collected after they finish.


4️⃣  Event Bubbling and Event Capturing (Event Propagation)

        When an event happens on an element inside another element, the event propagates.
        1. Event Bubbling (Default)
           Events start from the target element and bubble up to the parent elements.
           
                document.getElementById('child').addEventListener('click', function() {
                console.log('Child clicked');
                });

                document.getElementById('parent').addEventListener('click', function() {
                console.log('Parent clicked');
                });

            📌 Clicking the child will trigger both handlers because the event bubbles up.
               To stop bubbling:

               event.stopPropagation();

        2. Event Capturing (Trickling)
           Events are captured from the top (document) down to the target.
           To enable capturing, pass { capture: true }:

           document.getElementById('parent').addEventListener('click', function() {
           console.log('Parent clicked first');
           }, true);

           📌 Now, the parent will capture the event first before the child.


5️⃣  Event Delegation

         Event delegation is a technique where you attach an event listener to a parent element instead of individual child elements.

                document.getElementById('parent').addEventListener('click', function(e) {
                if (e.target.tagName === 'BUTTON') {
                console.log('Button inside parent clicked');
                }
                });

                ✅ Advantages:
	            •	Efficient (no need to add listeners to multiple elements).
	            •	Works for dynamically added elements.


6️⃣ Default Actions and preventDefault()

        Some events have default browser behaviors.
        Use event.preventDefault() to stop default actions.

                document.getElementById('link').addEventListener('click', function(e) {
                e.preventDefault(); // Prevents navigation
                });
           

7️⃣ Keyboard Events
        
                document.addEventListener('keydown', function(e) {
                console.log(`Key pressed: ${e.key}`);
                if (e.key === 'Enter') {
                console.log('Enter was pressed!');
                }
                });

                🔹 keydown: Fires when a key is pressed.
                🔹 keyup: Fires when a key is released.
                🔹 keypress (Deprecated).

8️⃣ Mouse Events

                document.addEventListener('click', function(e) {
                console.log(`Mouse clicked at X:${e.clientX}, Y:${e.clientY}`);
                });

                🔹 mousedown: When mouse button is pressed.
                🔹 mouseup: When mouse button is released.
                🔹 mousemove: When mouse moves.
                🔹 mouseenter / mouseleave: When mouse enters/leaves an element.

9️⃣ once Option (Execute Only Once)

                document.getElementById('btn').addEventListener('click', function() {
                console.log('This runs only once');
                }, { once: true });

                ✅ Automatically removes itself after execution.


