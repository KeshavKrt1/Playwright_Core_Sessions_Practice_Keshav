import { test, request, expect } from "@playwright/test";


test('simple GET request test', async ({ request }) => {
    
    let response = await request.get('https://conduit-api.bondaracademy.com/api/tags');
    let responseObj = await response.json();
    console.log(responseObj);

    expect(responseObj.tags[0]).toEqual('Test');
    expect(responseObj.tags[1]).toEqual('Blog');
    expect(responseObj.tags).toHaveLength(10);


});

test('POST request test', async ({request}) => {
    
    let response = await request.post('https://conduit-api.bondaracademy.com/api/articles/', {
        headers: {
            Authorization: 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo2ODcxMX0sImlhdCI6MTc4ODc2ODg4OSwiZXhwIjoxNzkzOTUyODg5fQ.CJlDNnri8q_fb2M7KbcJBBu2PuWafQ-2IQptN9yBGxU'
        },
        data: {
            "article":{"title":"test test","description":"test11","body":"sdsds","tagList":[]}
        }
    });
    let responseObj = await response.json();
    console.log(responseObj);


});