#!/usr/bin/node
// Script that gets the contents of a webpage and stores it in a file.

const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const filePath = process.argv[3];


request(url, function (err, response, body)
{
    if (err)
    {
        console.log(err);
    }
    else
    {
        fs.writeFile(filePath, body, 'utf8', function (err, data)
        {
            if (err)
            {
                console.log(err);
            }
        }
        );
    }
}
);
