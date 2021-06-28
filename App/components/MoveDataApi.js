import React from "react";
import axios from "axios";


const moveDataApi = axios.create({
    baseURL: "https://www.dustloop.com/wiki/api.php?action=cargoquery&format=json&requestid=&tables=MoveData_GGST",
});

export default moveDataApi;