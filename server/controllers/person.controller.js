// Platform Way
// module.exports.index = (req, res) => {
//     res.json({
//         message: "Hello World"
//     });
// }

// attempting to do it this way
module.exports = {
    index: (req, res) => {
        res.json({message: "Hello World!"});
    },

}