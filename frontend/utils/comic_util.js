module.exports = {
  fetchAllComics: function(success, error){
    $.ajax({
      url: "/api/comics",
      success: success,
      error: error
    });
  },

  fetchComic: function(shortname, success, error){
    const url = `/api/comics/${shortname}`;
    $.ajax({
      url: url,
      success: success,
      error: error
    });
  },

  createComic: function(comic, success, error){
    debugger
    $.ajax({
      method: "POST",
      url: "/api/comics",
      data: { comic: comic },
      success: success,
      error: function(response) {
				const errors = response.responseJSON;
				error("comic", errors);
			}
    });
  },

  updateComic: function(comic, success, error){
    debugger
    const url = `/api/comics/${comic.id}`;
    $.ajax({
      method: "PATCH",
      url: url,
      data: { comic: comic },
      success: success,
      error: function(response) {
				const errors = response.responseJSON;
				error("comic", errors);
			}
    });
  }
};
