function getDescription() {
    const date = new Date;
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} - This is my awesome app description..`
}

module.exports = {
    app_title: "a title from config",
    app_description: getDescription()
}