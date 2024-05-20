const handleLoginSubmit = function (e) {
  e.preventDefault();
  localStorage.setItem("username", e.target.username.value);
  location.replace("/");
};
