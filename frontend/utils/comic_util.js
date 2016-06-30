module.exports = {
  fetchComic: function(shortname, success, error){
    const url = `/api/comics/${shortname}`;
    $.ajax({
      url: url,
      success: success,
      error: error
    });
  },

  createComic: function(comic, success, error){
    $.ajax({
      method: "POST",
      url: "/api/comics",
      data: { comic: comic },
      success: success,
      error: function(response) {
				const errors = response.responseJSON;
				error("new", errors);
			}
    });
  }
};
