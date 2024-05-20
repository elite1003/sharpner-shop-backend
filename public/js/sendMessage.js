const handleSendMessage = async (e) => {
  e.preventDefault();
  const userName = localStorage.getItem("username");
  const message = e.target.message.value;
  const response = await fetch("/message", {
    method: "POST",
    body: JSON.stringify({ userName, message }),
    headers: {
      "Content-type": "application/json",
    },
  });
  if (!response.ok) {
    console.log("failed to sent the data");
  }
  location.reload();
};

document.addEventListener("DOMContentLoaded", async (event) => {
  const messages = document.getElementById("messages");
  const response = await fetch("/message");
  const data = await response.json();
  messages.innerText = data;
});
