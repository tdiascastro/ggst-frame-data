import React from "react";
import axios from "axios";

const URI = axios.create({baseURL: 'https://www.dustloop.com'})

function getCharacterDetail(characterName) {
    return URI.get('/wiki/api.php', {
        params: {
            action: 'cargoquery',
            format: 'json',
            tables: 'ggstCharacters',
            fields: 'name,defense,guts,prejump,weight,backdash,umo',
            where: `name='${characterName}'`
        }
    })
}

function getCharacterMoves(characterName) {
    return URI.get('/wiki/api.php', {
        params: {
            action: 'cargoquery',
            format: 'json',
            tables: 'MoveData_GGST',
            fields: 'chara,name,input,damage,guard,startup,active,recovery,onBlock,onHit,invuln,type',
            where: `chara='${characterName}'`
        }
    })
}

export {getCharacterDetail, getCharacterMoves};