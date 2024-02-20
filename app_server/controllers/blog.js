// Get blog list page.
module.exports.list = function(req, res) {
    res.render('bloglist', { 
        title: 'Blog List',
        blogs: [{
            blogTitle: "My First Blog Entry",
            blogText: "This is my first blog entry!",
            createdOn: "14 February 2024"
        }, {
            blogTitle: "My Second Blog Entry",
            blogText: "This is my second blog entry!",
            createdOn: "15 February 2024"
        }, {
            blogTitle: "My Third Blog Entry",
            blogText: "This is my third blog entry!",
            createdOn: "16 February 2024"
        }]
    });
};

// Get add blog page.
module.exports.add = function(req, res) {
    res.render('blogadd', { title: 'Add Blog'});
};

// Get edit blog page.
module.exports.edit = function(req, res) {
    res.render('blogedit', { title: 'Edit Blog'});
};

// Get delete blog page.
module.exports.delete = function(req, res) {
    res.render('blogdelete', { title: 'Delete Blog'});
};