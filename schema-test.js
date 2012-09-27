s=require("./models/schema.js");
s.addItem({name: "Stian Jensen"}, {
            "success": function(list) {
                console.log(list);
                },
            "error": function(err) {
                console.log(err);
                }
            });
s.getItems({
            "success": function(list) {
                console.log(list);
                },
            "error": function(err) {
                console.log(err);
                }
            });
