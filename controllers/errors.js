exports.get404Page = (req, res) => {
    res.status(404).send("Sorry, can't find that!");
}