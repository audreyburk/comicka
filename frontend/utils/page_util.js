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
  },

  updatePage: function(page, success, error){
    const url = `/api/pages/${page.id}`;
    $.ajax({
      method: "PATCH",
      url: url,
      data: { page: page },
      success: success,
      error: function(response) {
        const errors = response.responseJSON;
        error("edit", errors);
      }
    });
  }
};
