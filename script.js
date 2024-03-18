function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=;`
    console.log()

}

setCookie('cat', 'silver', 3);


function getCookie(cookie) {
    const cookies = document.cookie.split('; ')
    console.log(cookies)
    for (let i =0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();

        // cookie name = cookie value

        if (cookie.indexOf(name + '=') === 0) {
            return cookie.substring(name.length + 1);
        }
    }
}

function hasCookie(cookie) {
    const cookies = document.cookie.split(';');

    for (let i =0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();

        // cookie name = cookie value

        if (cookie.indexOf(name + '=') === 0) {
            return true
        }
    }
    return false;
}

function removeCookie(cookie) {
    document.cookie = `${name}=; expires=Mon, 18 Mar 1980 18:21:36 GMT; path=/`
}
