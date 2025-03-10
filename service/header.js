import axios from "axios";
import { $helper, $cms } from "@jx3box/jx3box-common/js/https.js";
import { __ossMirror } from "@jx3box/jx3box-common/data/jx3box.json";

function getMsg() {
    return $helper({ mute: true }).get("/api/messages/unread_total");
}

function getNav(client = "std") {
    let file = client == "origin" ? "header_nav_origin.json" : "header_nav.json";
    return axios.get(__dataPath + `data/box/${file}`);
}

function getPanel() {
    return axios.get(__dataPath + "data/box/header_panel.json");
}

function getBox(client = "std") {
    let filename = client == "origin" ? "box_origin.json" : "box.json";
    return axios.get(__dataPath + "data/box/" + filename);
}

function getMenu(key) {
    return $cms().get(`/api/cms/config/menu/${key}`);
}

function getGames(){
    return axios.get(__ossMirror + 'data/product/games.json')
}

export { getMsg, getNav, getPanel, getBox, getMenu, getGames };
