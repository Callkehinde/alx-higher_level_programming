#!/usr/bin/node
// Script that prints all characters of a Star Wars movie:


const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/' + process.argv[2];
request(url, function (err, response, body)
{

        if (err)
        {
            console.log(err);
        }
        else
        {
            let characters = JSON.parse(body).characters;
            for (let i = 0; i < characters.length; i++)
            {
                request(characters[i], function (err, response, body)
                {
                    if (err)
                    {
                        console.log(err);
                    }
                    else
                    {
                        console.log(JSON.parse(body).name);
                    }
                }
                );
            }
        }

}
);
