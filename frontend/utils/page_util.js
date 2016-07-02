module.exports = {
  // addPages: function(pages, success, error){
  //   $.ajax({
  //     method: "POST",
  //     url: "/api/pages",
  //     data: { pages: JSON.stringify(pages) },
  //     success: success,
  //     error: function(response) {
  //       const errors = response.responseJSON;
  //       error("edit", errors);
  //     }
  //   });
  // },

  createPage: function(page, success, error){
    $.ajax({
      method: "POST",
      url: "/api/pages",
      data: { page: page },
      success: success,
      error: function(response) {
        const errors = response.responseJSON;
        error("edit", errors);
      }
    });
  }
};
