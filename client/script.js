const form = document.getElementById("form");

function handleSubmit(event) {
  event.preventDefault();

  const username = event.target.username.value;
  const message = event.target.message.value;

  console.log({ username: username, message: message });
  // make a request to the server with our form data as the body
  fetch("http://localhost:8080/message", {
    method: "POST",
    body: JSON.stringify({ username: username, messaage: message }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

form.addEventListener("submit", handleSubmit);

const guestbookWrapper = document.getElementById("guestbookWrapper");

// get guests from my API
async function getGuestbook() {
  const response = await fetch("http://localhost8080/guestbook");
  const guestbook = await response.json();
  console.log(guestbook);

  // put the games onto the page
  games.forEach(function (guestbook) {
    // DOM manipulation to put the games onto the html
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const h3 = document.createElement("h3");

    h2.textContent = guestbook.title;
    p.textContent = `Number of guests booked: ${guestbook.numGuests}`;
    h3.textContent = guestbook.tblNum;

    guestbookWrapper.appendChild(h2);
    guestbookWrapper.appendChild(p);
    guestbookWrapper.appendChild(h3);
  });
}

getGuestbook();
