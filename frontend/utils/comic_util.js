module.exports = {
  fetchComic: function(shortname, success, error){
    const url = `/api/comics/${shortname}`;
    $.ajax({
      url: url,
      success: success,
      error: error
    });
  }
};
