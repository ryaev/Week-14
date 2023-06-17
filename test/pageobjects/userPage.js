class UserPage{
    get wellcomeText(){
        return $("#header_container > div.header_secondary_container > span");
    }
}

export default new UserPage();