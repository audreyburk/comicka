module.exports = {
  signUp: function(user, success, error){
    $.ajax({
      method: "POST",
      url: "/api/users",
      data: { user: user },
      success: success,
      error: function(response) {
				const errors = response.responseJSON;
				error("login", errors);
			}
    });
  },

  logIn: function(user, success, error){
    $.ajax({
      method: "POST",
      url: "/api/session",
      data: { user: user },
      success: success,
      error: function(response) {
				const errors = response.responseJSON;
				error("login", errors);
			}
    });
  },

  logOut: function(success){
    $.ajax({
      method: "DELETE",
      url: "/api/session",
      success: success,
      error: function () {
			  console.log("Logout error in SessionApiUtil#logout");
			}
    });
  }
};
