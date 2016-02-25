var fs = require("fs");

module.exports = {
    hooks: {
        "finish": function() {
            var chapters = [];
            for (var key in this.navigation) {
                value = this.navigation[key];
                chapters[value.index] = value;
            };
            fs.writeFileSync('_book/sidebar.json', JSON.stringify(chapters));
        }
    }
};
