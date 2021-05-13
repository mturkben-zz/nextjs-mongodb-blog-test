const checkFields = (...args) => {
    const filter = args.filter(item => {
        return item === null || item.length === 0
    })
    return filter.length === 0
}
module.exports = checkFields;
